import { readFileSync } from 'node:fs';
import path from 'node:path';
import parser from './parser.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';


const resolvePath = (filepath) => (filepath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filepath)
  : path.resolve(process.cwd(), (`__fixtures__/${filepath}`))
);

const getExtension = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parser(readFileSync(filepath, 'utf-8'), getExtension(filepath));

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = resolvePath(filepath1);
  const path2 = resolvePath(filepath2);

  const data1 = getData(resolvePath(path1));
  const data2 = getData(resolvePath(path2));

  const AST = buildAST(data1, data2);
  return formatter(AST, format);
};

export default gendiff;