import { promises as fs } from "fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import OpenAI from "openai";
import { encoding_for_model } from "tiktoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export class GPTModel {
  private MODEL_NAME = "gpt-4-1106-preview" as const;

  async rewrite(code: string) {
    const prompt = await this.createPrompt(code);

    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: this.MODEL_NAME,
      temperature: 0,
    });

    const result = chatCompletion.choices[0].message.content;
    if (result == null) {
      return null;
    } else {
      // コードブロックで囲まれているので、コードブロックを取り除く
      return result.split("\n").slice(1, -1).join("\n");
    }
  }

  async estimateCost(code: string) {
    const prompt = await this.createPrompt(code);

    const enc = encoding_for_model(this.MODEL_NAME);
    const rate = 150; // ドルレート

    // 入力プロンプ卜のトークン数と料金を計算
    const inputTokens = enc.encode(prompt);
    const inputPricing = (0.01 / 1000) * inputTokens.length * rate;
    const roundedInputPricing = Math.round(inputPricing * 10) / 10;

    // 回答のトークン数と料金を計算
    const outputTokens = enc.encode(code);
    const outputPricing = (0.03 / 1000) * outputTokens.length * rate;
    const roundedOutputPricing = Math.round(outputPricing * 10) / 10;

    return {
      input: {
        tokens: inputTokens.length,
        pricing: roundedInputPricing,
      },
      output: {
        tokens: outputTokens.length,
        pricing: roundedOutputPricing,
      },
    };
  }

  private async createPrompt(code: string) {
    const sampleCodes = await this.readSampleCodes();

    return `次の仕様とサンプルコードを元にして、変更対象のstyled-jsxで書かれたReactのコードを既存のコードの全てを含めてemotionを使用して書き換えてください。

説明文は出力せずにコードだけを出力してください。

書き換えたコードをそのままコピーして使いたいので、変更のないコードも省略せずに全て出力してください。

## 仕様
- styled-jsxで記述されたクラス名をキャメルケースに変更して変数名を定義する
- テンプレートリテラルを利用してCSSの実装は変更しない
- メディアクエリも条件を変えずに移行してください
- emotionのCSS定義の変数の適用はcss propsを利用してください

${sampleCodes
  .map(
    (sampleCode, i) => `## サンプルコード${i + 1}
### 変更前
${sampleCode.before}

### 変更後
${sampleCode.after}
`
  )
  .join("\n")}

## 変更対象のコード
${code}
`;
  }

  private async readSampleCodes() {
    const dataDir = path.join(__dirname, "..", "data");
    const sampleDirs = await fs.readdir(dataDir);
    const sampleCodes = await Promise.all(
      sampleDirs.map(async (dir) => {
        const before = await fs.readFile(
          path.join(dataDir, dir, "before.tsx"),
          "utf8"
        );
        const after = await fs.readFile(
          path.join(dataDir, dir, "after.tsx"),
          "utf8"
        );
        return {
          before,
          after,
        };
      })
    );

    return sampleCodes;
  }
}
