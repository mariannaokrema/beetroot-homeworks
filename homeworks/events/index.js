import { sortTable } from './js/table.js';
import {
  convertToDiv,
  convertToTextarea,
  saveWithCtrlS,
} from './js/text-area.js';
import { resizeBlock, stopResizeBlock } from './js/text-block-frame.js';

convertToTextarea();

convertToDiv();

sortTable();

// updateHeaderIcons();
resizeBlock();
stopResizeBlock();
