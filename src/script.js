/* © 2025 Ricardo Alonso Mendiola — MIT License */

/* ================================================== */
/* ======== FUNCIÓN PARA CARGAR EL FRAMEWORK ======== */
/* ================================================== */

// Función para preparar la página web al momento de cargar
async function frameworkOnLoad () {
  selectPage(document.getElementById('page-1'));
}

/* ================================================== */
/* ============= FUNCIONES DE NAVEGACIÓN ============ */
/* ================================================== */

// Función para ocultar y activar una única página del forms
function selectPage (target_page) {
  const forms_main = document.getElementById('app-script-forms');
    
  forms_main.querySelectorAll('.forms-page').forEach(page => {
    page.style.display = 'none';
  });

  target_page.style.display = 'block';
  document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
}

// Función para moverse entre páginas y mostrar altertas correspondientes
async function nextPage(current, target, alerts_on = true) {
  const current_page = document.getElementById('page-' + current);
  const target_page = document.getElementById('page-' + target);

  if(alerts_on) {
    if(target > current) {
      let allFilled = true;
            
      current_page.querySelectorAll('input, select, textarea').forEach(input => {
        if (!input.value) {
          input.style.border = '2px solid red';
          allFilled = false;
        } else { myBorder(input); }
      });

      if (!allFilled) {
        await Swal.fire({
          title: '⚠️ Atención',
          text: 'Por favor, completa todos los campos antes de continuar.',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
        return;
      }
    } else {
      const result = await Swal.fire({
        title: '⚠️ Atención',
        text: 'Si haces cambios en la sección anterior podrías perder información ya ingresada en esta sección.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      });
            
      if (result.isDismissed) return false;
    }
  }
  selectPage(target_page);
}

/* ================================================== */
/* ============ FUNCIONES PARA LOS SELECT =========== */
/* ================================================== */

// Función para llenar las opciones de un SELECT
function fillSelect(select, items, order=false) {
  select.innerHTML = "<option value=''>-- SELECCIONA --</option>";

  if(order) { items.sort((a, b) => a.localeCompare(b, "es", { numeric: true })); }

  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.appendChild(option);
  });
}

// Función para limpiar una lista [ARRAY] de SELECT
function clearSelects(elements, filler) {
  elements.forEach(element => {
    element.innerHTML = "<option value=''>-- " + filler + " --</option>";
  });
}

// Función para eliminar la opción vacía de un SELECT
function removePlaceholder (select) {
  select.querySelectorAll('option').forEach(option => {
    if (option.value === '') option.remove();
  });
}

/* ================================================== */
/* ============ FUNCIONES PARA LAS TABLAS =========== */
/* ================================================== */

// Función para añadir el encabezado a una TABLA
function addHeader(t_header_id, tmp_header_id) {
  const table_header = document.getElementById(t_header_id);
  const new_header = document.getElementById(tmp_header_id).content.cloneNode(true);
  table_header.appendChild(new_header);
}

// Función para añadir una fila a una TABLA
function addRow(t_row_id, tmp_row_id) {
  const table_row = document.getElementById(t_row_id);
  const new_row = document.getElementById(tmp_row_id).content.cloneNode(true).querySelector('tr');
  const row_number = table_row.rows.length;

  const del_button = new_row.querySelector('.row-delete');
  if (del_button) { 
    if( row_number === 0) {
      del_button.disabled = true;
      del_button.title = 'Debe contener al menos un registro.';
    } else {
      del_button.addEventListener('click', () => { removeRow(del_button); });
    }
  }

  table_row.appendChild(new_row);
}

// Función para eliminar la fila de una TABLA
function removeRow(this_row) {
  this_row.closest('tr').remove();
}

/* ================================================== */
/* ======= FUNCIONES MATEMÁTICAS Y DE FORMATO ======= */
/* ================================================== */

// Función para rendondear a un número de decimales
function myRound(num, decimals) {
  return Math.round(num * (10 ** decimals)) / (10 ** decimals);
}

// Función para volver a poner los border base de un elemento
function myBorder(element) {
  element.style.border = '2px solid var(--c-text)';
}

// Función para dar formato de pesos a un número
function myMoneyFormat(value) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Función para calcular el total de una serie de elementos
function myTotal(text_element, list) {
  let total = 0;

  list.forEach(element => {
    total += parseFloat(element?.value) || 0;
  });

  text_element.innerHTML = "TOTAL: " + myMoneyFormat(total);
}

// Función para dar formato a las fechas aaaa/mm/dd
function myDate(date) {
  const months = ["","ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];

  const d = date.substring(8,10) + "/"
    + months[parseInt(date.substring(5,7),10)] + "/"
    + date.substring(0,4)

  return d;
}

/* ================================================== */
/* ================================================== */
/* ================================================== */

document.addEventListener('DOMContentLoaded', frameworkOnLoad);
