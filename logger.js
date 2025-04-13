import chalk from 'chalk';

const log = {
    info: (msg) => console.log(chalk.blue('[INFO]'), chalk.white(msg)),
    success: (msg) => console.log(chalk.green('[SUCCESS]'), msg),
    warning: (msg) => console.log(chalk.yellow('[WARNING]'), msg),
    error: (msg) => console.log(chalk.red('[ERROR]'), msg),
    debug: (msg) => console.log(chalk.magenta('[DEBUG]'), msg),
};

export default log;
