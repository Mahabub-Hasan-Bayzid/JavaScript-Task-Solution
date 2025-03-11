const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");

const overlay = document.querySelector('.overlay');
const closeButton= document.querySelector('.modal button')

const seeOrderButton = document.getElementById("seeOrder");
const confirmBtn = document.querySelector('#confirmOrder');
const displayOrders= document.getElementById('show_btn');


const changeHandler = () => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  let deliveryFee = 0;
  const deliveryChecked = document.querySelector(".delivery:checked");
  if (deliveryChecked) {
    deliveryFee = parseFloat(deliveryChecked.dataset.price);
  }

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

seeOrderButton.addEventListener("click", () => {
  // put in your code here
  const deliveryChecked = document.querySelector('[name="delivery"]:checked');
  const deliveryFee = deliveryChecked ? deliveryChecked.dataset.price : "0";

  // Get selected toppings
  const selectedToppings = [...document.querySelectorAll(".topping:checked")].map(topping => topping.nextSibling.textContent.trim());

  // Get selected extras
  const selectedExtras = [...document.querySelectorAll(".extra:checked")]
    .map((extra) => extra.value)
    .join(", ");

  // Handle case where no toppings or extras are selected
  const toppingsText = selectedToppings
    ? `with ${selectedToppings}`
    : "with no toppings";
    
  const extrasText = selectedExtras ? `and ${selectedExtras}` : "and no extras";

  summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} ${toppingsText} ${extrasText}. Delivery fee: ${deliveryFee}€`;
});

// PANCAKE 03



const orders = ()=>{

  const order_id= Date.now();
  const name= customerName.value;
  const selectedPancake = pancakeType.value;
  const selectedToppings = [...document.querySelectorAll(".topping:checked")].map(topping => topping.nextSibling.textContent.trim());
  const selectedExtras = [...document.querySelectorAll(".extra:checked")].map(extra => extra.nextSibling.textContent.trim());
  const deliveryMethod = document.querySelector('[name="delivery"]:checked').nextSibling.textContent.trim();
  const totalPrice = totalPriceDisplay.textContent;

  class OrdersArray {
    constructor(id, customerName, selectedPancake, toppings, extras, deliveryMethod, totalPrice, status) {
      this.id= id;
      this.customerName= customerName;
      this.selectedPancake= selectedPancake;
      this.toppings= toppings;
      this.extras= extras;
      this.deliveryMethod= deliveryMethod;
      this.totalPrice= totalPrice;
      this.status= status;
    }
  }

  
  const newOrder = new OrdersArray(order_id, name, selectedPancake, selectedToppings, selectedExtras, deliveryMethod, totalPrice, "waiting");

  let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

  allOrders.push(newOrder);
  localStorage.setItem("allOrders", JSON.stringify(allOrders));

  const existsOrders= JSON.parse(localStorage.getItem('allOrders'));
  console.log(existsOrders);
  alert('Order Created Successfully!')
  
} 

const showOrderList =()=>{
  overlay.classList.toggle('hidden');

  // const existsOrders= JSON.parse(localStorage('allOrders'));
  // console.log(existsOrders);
  
}

const closeElement=()=>{
  overlay.classList.toggle('hidden')
}

confirmBtn.addEventListener('click',orders);
displayOrders.addEventListener('click',showOrderList);
closeButton.addEventListener('click', closeElement);

