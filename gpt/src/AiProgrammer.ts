import { promises as fs } from "fs";
import { join, extname } from "path";
import { GPTModel } from "./GptModel";

export class AiProgrammer {
  private gptModel: GPTModel;

  constructor() {
    this.gptModel = new GPTModel();
  }

  async estimateCost(srcDir: string) {
    const files = await this.readComponentFiles(srcDir);

    const estimateCosts = await Promise.all(
      files.map(async (file) => {
        const code = await fs.readFile(file, "utf8");
        const cost = await this.gptModel.estimateCost(code);

        return {
          file,
          ...cost,
        };
      })
    );
    return estimateCosts;
  }

  async refactor(srcDir: string) {
    const files = await this.readComponentFiles(srcDir);

    // GPTへの書き換えリクエストとファイルの書き換えを並行処理として実行
    const refactorPromises = files.map(async (file) => {
      const code = await fs.readFile(file, "utf8");
      console.log(`[start]: Refactoring ${file}`);
      const rewrittenCode = await this.gptModel.rewrite(code);
      if (rewrittenCode !== "" && rewrittenCode != null) {
        await this.replaceFile(file, rewrittenCode);
      }
      console.log(`[end]: Refactoring ${file}`);
    });
    const results = await Promise.allSettled(refactorPromises);

    // 書き換えに失敗したファイルを表示
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      const file = files[i];

      if (result.status === "rejected") {
        console.log(`[error]: Refactoring ${file}`);
        console.log(result.reason);
      }
    }
  }

  private async readComponentFiles(dir: string): Promise<string[]> {
    let files: string[] = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = join(dir, item.name);
      if (item.isDirectory()) {
        files = files.concat(await this.readComponentFiles(fullPath));
      } else if (extname(fullPath) === ".tsx") {
        files.push(fullPath);
      }
    }

    return files;
  }

  private replaceFile(file: string, content: string): Promise<void> {
    return fs.writeFile(file, content);
  }
}
