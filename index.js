var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  var c;
  cart = c;
}

function addToCart(item) {

  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var text = "In your cart, you have ";
  var text2 = "Your shopping cart is empty.";
  if (cart.length === 0)
  {
    console.log(text2);
  }
  for(var i = 0; cart.length > i; i++)
  {
    if(cart.length -1 === i)
    {
      console.log(text += Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ".");
    } else
    {
      console.log(text += Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ", ");
    }
  }
}

function total() {
  var totalCost = 0;
  for(var i = 0; cart.length > i; i++)
  {
    totalCost += cart[i][Object.keys(cart[i])[0]];
  }
  return totalCost;
}
