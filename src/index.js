import { readFileSync } from 'node:fs';
import path from 'node:path';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const read = (filepath) => readFileSync(getPath(filepath));

const parser = (path) => JSON.parse(path);

const gendiff = (filepath1, filepath2) => {
    const file1 = read(filepath1);
    const file2 = read(filepath2);
    const data1 = parser(file1);
    const data2 = parser(file2);
    console.log(data1, data2)
};

export default gendiff;