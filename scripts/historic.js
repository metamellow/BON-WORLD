// script.js
const data = [
    { hash: "Hash1", wallet1: "Endereço1", wallet2: "Endereço2", winner: "EndereçoGanhador1", amount: "Valor1" },
    { hash: "Hash2", wallet1: "Endereço3", wallet2: "Endereço4", winner: "EndereçoGanhador2", amount: "Valor2" },
    // Adicione mais dados conforme necessário
  ];
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  let currentPage = 1;
  
  function renderTable(page) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
  
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    for (let i = startIndex; i < endIndex && i < data.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `
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
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = i;
      link.addEventListener("click", () => {
        currentPage = i;
        renderTable(currentPage);
        renderPagination();
      });
  
      if (i === currentPage) {
        link.style.backgroundColor = "#ddd";
      }
  
      pagination.appendChild(link);
    }
  }
  
  renderTable(currentPage);
  renderPagination();
  