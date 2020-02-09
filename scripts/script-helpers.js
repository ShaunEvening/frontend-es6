const childProcess = require("child_process");

const runScript = (scriptPath, callback) => {
  let callbackCalled = false;

  const process = childProcess.fork(scriptPath);

  process.on("error", error => {
    if (callbackCalled) return;
    callbackCalled = true;
    callback(error);
  });

  process.on("exit", exitCode => {
    if (callbackCalled) return;
    callbackCalled = true;
    const error = exitCode === 0 ? null : new Error("exit code " + exitCode);
    callback(error);
  });
};

const getScriptList = scriptManifest =>
  Object.keys(scriptManifest).reduce(
    (list, scriptName) => `${list}\n  - ${scriptName}`,
    ""
  );

module.exports = {
  runScript,
  getScriptList
};
