// script.js


const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);
let currentPage = 1;

function renderTable(page) {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${data[i].round}</td>
        <td>${data[i].hash}</td>
        <td>${data[i].wallet1}</td>
        <td>${data[i].wallet2}</td>
        <td>${data[i].winner}</td>
        <td>${data[i].amount}</td>
      `;
    tableBody.appendChild(row);
  }
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('p');
    link.textContent = i;
    link.style.padding = '0px 10px';
    link.style.color = 'white';
    link.addEventListener('click', () => {
      currentPage = i;
      renderTable(currentPage);
      renderPagination();
    });

    if (i === currentPage) {
      link.style.fontWeight = 'bolder';
      link.style.color = '#54ff65';
    }

    pagination.appendChild(link);
  }
}

renderTable(currentPage);
renderPagination();
