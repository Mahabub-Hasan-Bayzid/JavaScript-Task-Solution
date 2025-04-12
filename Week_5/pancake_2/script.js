const pancakeForm = document.querySelector("#pancakeForm");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const seeOrderBtn = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#summaryText");







let selectedToppings = [];
let selectedExtras = [];  


const changeHandler = (e) => {
  const pancakeType = document.querySelector("#type");
  const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

 
  selectedToppings = Array.from(
    document.querySelectorAll(".topping:checked")
  ).map((el) => el.parentElement.textContent.trim());



  selectedExtras = Array.from(document.querySelectorAll(".extra:checked")).map(
    (el) => {
      return {
        name: el.parentElement.textContent.trim(),
        price: parseFloat(el.dataset.price),
      };
    }
  );

  let toppingsPrice = selectedToppings.length * 1;
  let extrasPrice = selectedExtras.reduce((sum, item) => sum + item.price, 0);




  const deliveryOption = document.querySelector(".delivery:checked");
  const deliveryPrice = parseFloat(deliveryOption.dataset.price);

  const total = basePrice + toppingsPrice + extrasPrice + deliveryPrice;





  totalPriceDisplay.textContent = total + "€";
  totalPriceBanner.textContent = total + "€";
};



const showOrder = () => {
  const customerName = document.querySelector("#customerName").value || "Customer";
  const pancakeType = document.querySelector("#type");
  const selectedPancake = pancakeType.options[pancakeType.selectedIndex].text;
  const deliveryMethod = document.querySelector(".delivery:checked").parentElement.textContent.trim();




  let orderSummary = `
    <strong>Name:</strong> ${customerName}<br>
    <strong>Pancake:</strong> ${selectedPancake}<br>
    <strong>Toppings:</strong> ${selectedToppings.length > 0 ? selectedToppings.join(", ") : "None"}<br>
    <strong>Extras:</strong> ${
      selectedExtras.length > 0
        ? selectedExtras.map((ex) => ex.name).join(", ")
        : "None"
    }<br>


    <strong>Delivery:</strong> ${deliveryMethod}<br>
    <strong>Total:</strong> ${totalPriceDisplay.textContent}
  `;

  summaryText.innerHTML = orderSummary;
};







// event listeners
pancakeForm.addEventListener("change", changeHandler);
seeOrderBtn.addEventListener("click", showOrder);
