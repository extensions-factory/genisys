#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json') as { version: string };

const program = new Command();

program
  .name('genisys')
  .description('Interactive CLI provisioner — cookiecutter-style wizard with nested recipes')
  .version(pkg.version);

program
  .command('list')
  .description('List available recipes with versions and run status')
  .action(() => {
    console.log(chalk.dim('(placeholder) list recipes — not yet implemented'));
  });

program
  .command('info <recipe>')
  .description('Show recipe details, version, changelog, and last run info')
  .action((recipe: string) => {
    console.log(chalk.dim(`(placeholder) info for ${recipe} — not yet implemented`));
  });

program
  .command('doctor')
  .description('Check system state — shells detected, tools available, recipe history')
  .action(() => {
    console.log(chalk.dim('(placeholder) doctor — not yet implemented'));
  });

program
  .command('run <recipe>')
  .description('Run a specific recipe directly (skip wizard)')
  .action((recipe: string) => {
    console.log(chalk.dim(`(placeholder) run ${recipe} — not yet implemented`));
  });

// Default action: interactive wizard
program
  .action(() => {
    console.log(chalk.bold.cyan('genisys'));
    console.log(chalk.dim('Interactive wizard not yet implemented.'));
    console.log(chalk.dim('Run `genisys --help` to see available commands.'));
  });

program
  .option('-y, --yes', 'skip confirmation prompts')
  .option('--dry-run', 'preview changes without applying')
  .option('-v, --verbose', 'verbose output')
  .option('--no-backup', 'skip backup (power users)');

program.parseAsync(process.argv).catch((err) => {
  console.error(chalk.red('Error:'), err);
  process.exit(1);
});
