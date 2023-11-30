import { fileURLToPath } from "node:url";
import path from "node:path";
import { AiProgrammer } from "./AiProgrammer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// process.argv には ['node', 'index.js'] に続いてコマンドライン引数が含まれます
// 最初の2つの要素を除外して、実際の引数のみを取得します
const args = process.argv.slice(2);

async function main() {
  const srcDir = `${__dirname}/../../src`;
  const programmer = new AiProgrammer();

  if (args.includes("--estimate")) {
    const costs = await programmer.estimateCost(srcDir);
    console.log(costs);
    console.log(
      `トークン数の合計: ${costs.reduce(
        (sum, cost) => sum + cost.input.tokens + cost.output.tokens,
        0
      )}トークン`
    );
    console.log(
      `料金: ${costs
        .reduce(
          (sum, cost) => sum + cost.input.pricing + cost.output.pricing,
          0
        )
        .toFixed(1)}円`
    );
  } else {
    await programmer.refactor(srcDir);
  }
}

main();
