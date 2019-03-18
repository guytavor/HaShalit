const { spawn } = require("child_process");

const config = {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit"
};

let child = null;

process.stdin.resume();

if (process.env.NODE_ENV === "production") {
  const options = ["-s", "build"];

  if (process.env.PORT) {
    options.push("-l");
    options.push(process.env.PORT);
  }

  child = spawn("serve", options, config);
} else {
  child = spawn("react-scripts", ["start"], config);
}

if (child) {
    let handled = false;

    child.on('exit', function (exitCode) {
        child = null;
        console.log('Goodbye');
        process.exit(exitCode);
    })
    
    function exitHandler() {
        if (child && !handled) {
            handled = true;
            console.log('\rkilling server...',);
            child.kill();
        }
    }
    
    process.on('SIGINT', exitHandler);
    process.on('SIGTERM', exitHandler);
    process.on('uncaughtException', exitHandler);
}

