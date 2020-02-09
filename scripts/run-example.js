const chalk = require("chalk");
const { runScript, getScriptList } = require("./script-helpers");
const { examples } = require("./manifest");

const scriptRequested = process.argv[2];

if (!scriptRequested) {
  console.error(`${chalk.bold.bgRed(" ERROR ")} No Example selected`);

  console.log(
    `\n${chalk.bold("The Available examples are:")}${getScriptList(
      examples
    )}\n\n`
  );

  return;
}

const scriptPath = examples[scriptRequested];

if (!scriptPath) {
  console.error(
    `${chalk.bold.bgRed(" ERROR ")} example called "${chalk.bold(
      scriptRequested
    )}" found`
  );

  console.log(
    `\n${chalk.bold("The Available examples are:")}${getScriptList(
      examples
    )}\n\n`
  );

  return;
}

const getLocalScriptPath = absolutePath => {
  const {
    length,
    [length - 2]: folder,
    [length - 1]: scriptName
  } = absolutePath.split("/");

  return `${folder}/${scriptName}`;
};

console.log(
  `${chalk.bold.bgHex("#08C39D")(` ${scriptRequested} `)} in ${chalk.bold(
    getLocalScriptPath(scriptPath)
  )}
---------------------------------------------------------------------------
  `
);

runScript(scriptPath, error => {
  console.log("\n");
  if (error) {
    console.log(`${chalk.bold.bgRed(" ERROR ")} Oops! something went wrong\n`);
  }
  console.log(
    `---------------------------------------------------------------------------`
  );
});
