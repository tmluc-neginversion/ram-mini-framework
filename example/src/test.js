/* © 2025 Ricardo Alonso Mendiola — MIT License */

test_dropdown = ['PEN','PINEAPPLE','APPLE','PEN'];

async function testOnLoad () {
  const tmp_header_id = 'head-template';
  const tmp_row_id = 'row-template';

  fillSelect(document.getElementById('ff-select-1'),test_dropdown, true);

  const templateA = document.getElementById('row-template');

  fillSelect(templateA.content.querySelector('.ts-1'),['A','B','C']);
  fillSelect(templateA.content.querySelector('.ts-2'),['D','E']);
  fillSelect(templateA.content.querySelector('.ts-3'),['F','G']);

  clearSelects(templateA.content.querySelectorAll('.ts-2, .ts-3'), '');

  addHeader('tb-head', tmp_header_id);
  addRow('tb-body', tmp_row_id);
  addRow('tb-body', tmp_row_id);
  addRow('tb-body', tmp_row_id);
}

function testSuma(table_cell) {
  const total_text = document.getElementById('test-b');
  const element_list = table_cell.closest('tbody').querySelectorAll('.test_num');
  myTotal(total_text, element_list);
}

window.addEventListener('load', testOnLoad);
