import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import path from 'node:path';

const testList = [
  'json',
  'yaml',
  'yml',
];

const resolvePath = (filePath) => path.resolve(process.cwd(), `__fixtures__/${filePath}`);

describe('gendiff', () => {
  test.each(testList)('gendiff %s', (format) => {
    const filePath1 = resolvePath(`file1.${format}`);
    const filePath2 = resolvePath(`file2.${format}`);

    expect(gendiff(filePath1, filePath2)).toEqual(result);
  })
})

test('json', () => {
    expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
});

test('yaml', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(result);
});

test('yml', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(result);
});

test('json', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(resultJSON);
});

test('yaml', () => {
expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toEqual(resultJSON);
});

test('yml', () => {
expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toEqual(resultJSON);
});

test('json', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(resultPlain);
});

test('yaml', () => {
expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(resultPlain);
});

test('yml', () => {
expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toEqual(resultPlain);
});