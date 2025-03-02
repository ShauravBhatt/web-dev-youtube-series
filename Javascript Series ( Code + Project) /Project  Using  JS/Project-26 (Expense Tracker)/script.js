document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenseList();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseName.value.trim();
    const amount = parseInt(expenseAmount.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        price: amount,
      };
    
      
      expenses.push(newExpense);
      calculateTotal();
      saveExpensesToLocal();
      renderExpenseList();
      updateTotal();
      
      expenseName.value = "";
      expenseAmount.value = "";
    }
  });

  expenseList.addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON"){
      let expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => (expense.id !== expenseId));
      saveExpensesToLocal();
      calculateTotal();
      renderExpenseList();
      updateTotal();
    }
  })

  function updateTotal(){
    totalAmount = calculateTotal();
    totalAmountDisplay.innerText = totalAmount.toFixed(2);
  }

  function renderExpenseList() {
    expenseList.innerHTML = ``;
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${expense.name} : $${expense.price}</span>
      <button data-id="${expense.id}">Delete</button>`;
      expenseList.appendChild(li);
    });
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function calculateTotal() {
    return expenses.reduce((total, expense) => total + expense.price, 0);
  }
});
