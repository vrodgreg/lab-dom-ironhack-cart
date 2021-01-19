document.querySelector('#calculate').onclick = function() {
  console.log('calculating')
  let allProducts = document.querySelectorAll('.product')
  let total = 0
  for (let i = 0 ; i < allProducts.length; i++){
      let eachProduct = allProducts[i]
          console.log(eachProduct)
          let price = eachProduct.querySelector('.price span').innerHTML 
          let value = eachProduct.querySelector('.quantity input').value
          console.log(price, value)
          let subTotal = price * value
          console.log(subTotal)       
          eachProduct.querySelector('.subtotal span').innerHTML = subTotal
          total += subTotal
  }
  document.querySelector('#total-value span').innerHTML = total
  console.log(total)
}


document.querySelector('#create.btn').onclick = function(){
  console.log("I clicked the button")

  let newProductName =  document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value

  let newProductPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value

  console.log(newProductName,newProductPrice)

  // let productTemplate = document.querySelector('.product').outerHTML
  // let tbody = document.querySelector("#cart tbody")

  // tbody.innerHTML += productTemplate

  // let newProduct = document.querySelector('.product:last-of-type')
  // newProduct.querySelector('.name').innerHTML = newProductName
  // newProduct.querySelector('.price span').innerHTML = newProductPrice
  // newProduct.querySelector('.subtotal span').innerHTML = '0'
  
  let productRowHTML = `
  <tr class="product">
      <td class="name">
          <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPrice}</span></td>
      <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
          <button class="btn btn-remove">Remove</button>
      </td>
  </tr>
  `
  document.querySelector("#cart tbody").innerHTML += productRowHTML 
  wireUpRemove();
}

function wireUpRemove(){

let removeButtons = document.querySelectorAll('.btn-remove.btn')
  for ( let i = 0; i < removeButtons.length; i++)
  {
      let removeButton = removeButtons[i];
      removeButton.onclick = function(event) 
      {
          this.parentNode.parentNode.remove();
      }
  }

}
wireUpRemove()