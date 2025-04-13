import Table from 'cli-table3';
import chalk from 'chalk';

export default function showTable() {
    const table = new Table({
        head: [chalk.blue('ID'), 'Name', 'Status'],
        colWidths: [10, 20, 20],
    });

    table.push(
        [1, 'Alice', '✅ Active'],
        [2, 'Bob', '🟡 Pending'],
        [3, 'Eve', '❌ Banned']
    );

    console.log(table.toString());
}
