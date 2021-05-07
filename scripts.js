const Modal = {
  open() {
    //Adiciona a classe active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    //remove a classe active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "WebSite",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

const Transaction = {};

const DOM = {
  addTransaction(transaction, index){
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction()
  },  
  innerHTMLTransaction() {
    const html = `    
      <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">19/06/2021</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação" />
        </td>
      </tr>
      `

      return html
  },
};
