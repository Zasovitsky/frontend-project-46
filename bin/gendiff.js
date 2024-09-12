#!/usr/bin/env node
import { Command } from 'commander';
// import gendiff from '../src/index/js';

const program = new Command();

program
    .version('0.1.0')
    .description('Compares two configuration files and shows a difference.')
    .parse(process.argv);