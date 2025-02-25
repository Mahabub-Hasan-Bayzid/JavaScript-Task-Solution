

// const dropdown = document.getElementById('type');
// const totalPrice1 = document.getElementById('totalPriceDisplay');
// const totalPrice2 = document.getElementById('totalPrice');

// const toppings = document.querySelectorAll(".topping, .extra");
// const pancakeForm = document.querySelector("#pancakeForm")

// const priceChange = () => {
//     let Price = Number(dropdown.value); 

//     let extralCost = 0;
//     toppings.forEach(item => {
//         if (item.checked) {
//             extralCost += Number(item.value);
//         }
//     });

//     let subTotal = Price + extralCost;
//     totalPrice1.textContent = subTotal + "€"; 
//     totalPrice2.textContent = subTotal + "€"; 
// };

// dropdown.addEventListener('change', priceChange);
// toppings.forEach(item => item.addEventListener('change', priceChange));

const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
const pancakeForm = document.querySelector("#pancakeForm")


const changeHandler = (event) => {

    const basePrice = parseFloat(
        document.getElementById('type').selectedOptions[0].dataset.price
    );
    const toppingsPrice = [
        ...document.querySelectorAll(".topping:checked"),
    ].reduce((sum,topping) => sum + parseFloat(topping.dataset.price), 0);
    
    const extrasPrice = [
        ...document.querySelectorAll(".extra:checked"),
    ].reduce((sum,extra) => sum + parseFloat(extra.dataset.price), 0);

    let deliveryFee= 0;
    const deliveryPrice = document.querySelectorAll(".delivery:checked");
    if (deliveryPrice) {
        deliveryFee = parseFloat(deliveryPrice.dataset.price);
    }
    
    let totalPrice= basePrice + toppingsPrice + extrasPrice + deliveryFee
    
    console.log(totalPrice);
    
    // totalPriceDisplay.textContent = 
    // totalPriceBanner.textContent = 
}

pancakeForm.addEventListener('change',changeHandler);
