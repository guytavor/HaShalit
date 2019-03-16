const { spawn } = require('child_process');

const config = {
    detached: true,
    env: process.env
};

let child = null;

if (process.env.NODE_ENV === 'production') {
    const options = ['-s', 'build'];

    if (process.env.PORT) {
        options.push('-l');
        options.push(process.env.PORT);
    }

    child = spawn('serve', options, config);
} else {
    child = spawn('react-scripts', ['start'], config);
}

if (child) {
    child.stdout.pipe(process.stdout);
}