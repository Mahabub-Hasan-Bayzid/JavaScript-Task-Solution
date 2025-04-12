

const dropdown = document.getElementById('type');
const totalPrice1 = document.getElementById('totalPriceDisplay');
const totalPrice2 = document.getElementById('totalPrice');

const toppings = document.querySelectorAll(".topping, .extra");

const priceChange = () => {
    let Price = Number(dropdown.value); 

    let extralCost = 0;
    toppings.forEach(item => {
        if (item.checked) {
            extralCost += Number(item.value);
        }
    });

    let subTotal = Price + extralCost;
    totalPrice1.textContent = subTotal + "€"; 
    totalPrice2.textContent = subTotal + "€"; 
};

dropdown.addEventListener('change', priceChange);
toppings.forEach(item => item.addEventListener('change', priceChange));
