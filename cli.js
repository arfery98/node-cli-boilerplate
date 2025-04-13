import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import log from './logger.js';
import showTable from './table.js';

const program = new Command();

program
    .name('mycli')
    .description('My CLI boilerplate')
    .version('1.0.0');

program
    .command('greet')
    .description('Say hello')
    .action(async () => {
        console.log(
            boxen(chalk.cyan(figlet.textSync('HELLO CLI')), {
                padding: 1,
                borderColor: 'cyan',
                borderStyle: 'round',
            })
        );

        const { name } = await inquirer.prompt([
            { type: 'input', name: 'name', message: 'What is your name?' },
        ]);

        log.success(`Welcome, ${name}!`);
    });

program
    .command('list')
    .description('Show mock data in table')
    .action(showTable);

program.parse();
