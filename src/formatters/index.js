import makePlain from './plain.js';
import makeStylishDiff from './stylish.js';

export default function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return makeStylishDiff(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Unknown format '${format}`);
  };
};