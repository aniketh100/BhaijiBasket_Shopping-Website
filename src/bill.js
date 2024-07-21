let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];
/*
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};*/



let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <div class="details" style="border:solid;">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>Name:    ${search.name}</p>
                <p class="cart-item-price">Quantity:     ${item}</p>
                <h3>Amount:     Rs ${item * search.price}</h3>
              </h4>
          </div>
          <br><br>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Bill is Empty</h2>
    `;
  }
};





let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : Rs ${amount}</h2>
    `;
  } else return;
};

TotalAmount();
generateCartItems();
//calculation();


