// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input').value;
  const sub = parseInt(price.innerText)*parseInt(quantity);
  console.log(sub);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sub; 
  return parseInt(sub);
}

function calculateAll() {
  // ITERATION 2
  let total= 0
  const multiProduct = Array.from(document.getElementsByClassName('product'));
  for(let counter of multiProduct){
   total += updateSubtotal(counter);
  }
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const btnRemove = window.addEventListener('click', )
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
