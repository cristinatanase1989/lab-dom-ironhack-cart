// Iteration 1 | Make the mashed potatoes with callbacks

// Using nested callbacks print the cooking steps to make Mashed Potatoes in the correct order.
//  Write your JavaScript in the provided javascript/index.js file. Once again, 
// a reminder not to alter the getInstruction.js file.

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
});
// ITERATION 1
function updateSubtotal(products) {
  let sub = [];
  for (let product of products) {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input');
    const subtotal = product.querySelector('.subtotal span');
    //console.log(product);
    //console.log(subtotal);
    //console.log(quantity.value);
    sub.push(
      (subtotal.textContent = parseFloat(price) * parseFloat(quantity.value))
    );
  }
  return sub;
}
//parseFloat para númerois decimales y parseInt para números enteros
//
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  // end of test
  const array = updateSubtotal(products);
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  // ITERATION 2
  //updateSubtotal(secondProduct);
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  return (total.textContent = sum);
}
// ITERATION 4
function removeProduct(event) {
  //  event.preventDefault();
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const node = event.currentTarget;
  //console.log(node);
  const parent = node.parentNode.parentNode;
  parent.remove();
  calculateAll();
  // node.parentNode.remove()
}

// ITERATION 5
const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createProduct);
const list = document.querySelector('tbody');
function createProduct() {
  let newProduct = document.querySelector('#newProduct').value;
  let price = document.querySelector('#newPrice').value;
  //let valor = document.querySelector('#valor').value;
  list.innerHTML += `
  <tr class="product">
  <td class="name">
    <span>${newProduct}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input id="valor" type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  //... your code goes here
  const buttons = document.querySelectorAll('.btn-remove');
  // document.querySelectorAll('.btn-remove');
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', removeProduct);
  }
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});
