const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const seeOrderButton = document.getElementById("seeOrder");
const confirmBtn = document.querySelector("#confirmOrder");
const displayOrders = document.getElementById("show_btn");
const cardMain = document.querySelector(".card-main");

const changeHandler = () => {
    const basePrice = parseFloat(document.getElementById("type").selectedOptions[0].dataset.price);
    const toppingsTotal = [...document.querySelectorAll(".topping:checked")].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);
    const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce((sum, extra) => sum + parseFloat(extra.dataset.price), 0);
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
    const deliveryChecked = document.querySelector('[name="delivery"]:checked');
    const deliveryFee = deliveryChecked ? deliveryChecked.dataset.price : "0";
    const selectedToppings = [...document.querySelectorAll(".topping:checked")].map((topping) => topping.nextSibling.textContent.trim());
    const selectedExtras = [...document.querySelectorAll(".extra:checked")].map((extra) => extra.nextSibling.textContent.trim());
    const toppingsText = selectedToppings.length > 0 ? `with ${selectedToppings.join(", ")}` : "with no toppings";
    const extrasText = selectedExtras.length > 0 ? `and ${selectedExtras.join(", ")}` : "and no extras";
    summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} ${toppingsText} ${extrasText}. Delivery fee: ${deliveryFee}€`;
});

const orders = () => {
    const order_id = Date.now();
    const name = customerName.value;
    const selectedPancake = pancakeType.value;
    const selectedToppings = [...document.querySelectorAll(".topping:checked")].map((topping) => topping.nextSibling.textContent.trim());
    const selectedExtras = [...document.querySelectorAll(".extra:checked")].map((extra) => extra.nextSibling.textContent.trim());
    const deliveryMethod = document.querySelector('[name="delivery"]:checked').nextSibling.textContent.trim();
    const totalPrice = totalPriceDisplay.textContent;

    class OrdersArray {
        constructor(id, customerName, selectedPancake, toppings, extras, deliveryMethod, totalPrice, status) {
            this.id = id;
            this.customerName = customerName;
            this.selectedPancake = selectedPancake;
            this.toppings = toppings;
            this.extras = extras;
            this.deliveryMethod = deliveryMethod;
            this.totalPrice = totalPrice;
            this.status = status;
        }
    }

    const newOrder = new OrdersArray(order_id, name, selectedPancake, selectedToppings, 
    selectedExtras, deliveryMethod, totalPrice, "waiting");

    let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
    allOrders.push(newOrder);

    localStorage.setItem("allOrders", JSON.stringify(allOrders));
    alert("Order Created Successfully!");
};

const showOrderList = () => {
    overlay.classList.remove("hidden");
    cardMain.innerHTML = ""; // Clear previous cards

    const allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

    if (allOrders.length === 0) {
        cardMain.innerHTML = "<p>No orders found.</p>";
        return;
    }

    allOrders.forEach((order) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>Order ID: ${order.id}</h3>
            <p><strong>Name:</strong> ${order.customerName}</p>
            <p><strong>Pancake:</strong> ${order.selectedPancake}</p>
            <p><strong>Toppings:</strong> ${order.toppings.join(", ") || "None"}</p>
            <p><strong>Extras:</strong> ${order.extras.join(", ") || "None"}</p>
            <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
            <p id="price_"><strong>Total:</strong> ${order.totalPrice}</p>
            <select class= "status">
            <option value="default">${order.status}</option>
            <option value="queue">IN Queue</option>
            <option value="complete">Completed</option>
            </select>

        `;
        cardMain.appendChild(card);
    });
};

const selecTstatus = document.querySelector('#price_');
const statusUpdate =()=>{
    console.log('changed');
} 


const closeElement = () => {
    overlay.classList.add("hidden");
};

// selecTstatus.addEventListener("click", statusUpdate)
confirmBtn.addEventListener("click", orders);
displayOrders.addEventListener("click", showOrderList);
closeModalButton.addEventListener("click", closeElement);