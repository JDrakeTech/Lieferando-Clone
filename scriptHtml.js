function generatedFoodSelectionHtml(menu, idName) {
    return ` 
<div class="foodSelectionBox">
    <div class="foodChoise"><h2>${menu['food']}</h2> <button onclick="addToBasket('${menu['food']}', '${menu['price']}')" class="ChoiseBt">+</button></div>
    <p id="${idName}">${menu['description']}</p>
    <p class="SelectionPrice">${parseFloat(menu['price']).toFixed(2)}€</p>
</div>
`;
}

function generatedMenuSeparation(menuPart, img) {
    return `
    <div class="foodSeparationBox">
        <h2 id="${menuPart}">${menuPart}</h2>
        <img class="SeparationImg" src="${img}" alt="">
    </div>
    `;
}

function generatedBasketChoiseHtml(i) {
    return `
    <div class="choise" id="choise${i}">
    </div>
    `;
}

function generatedChoiseHtml(amount, food, roundedFoodPrice, i, price) {
    return `
    <div class="choisePrice">
        <span><b>${amount}x</b></span>
        <p class="#"><b>${food}</b></p>
        <span>${roundedFoodPrice}€</span>
    </div>
    <div class="choiseCount">
        <button onclick="removeBasket(${i})" class="countBt">-</button>
        <div class="#">${amount}</div>
        <button onclick="addToBasket('${food}', '${price}')" class="countBt">+</button>
        <img onclick="deleteFood(${i})" class="trashBt" src="./img/trash.png" alt="">
    </div>
    `;
}

function generatedBasketSumHtml() {
    return `
    <div class="sumTextBox">
       <p id="subtotal" class="sumText">Zwischensumme</p><span id="Subtotal" class="sumPrice">0</span>
    </div>
    <div class="sumTextBox">
       <p id="deliveryCosts" class="sumText">Lieferkosten</p><span id="DeliveryCosts" class="sumPrice">1.50€</span>
    </div>
    <div class="sumTextBox">
       <p id="total" class="sumText"><b>Gesamt</b></p><span id="TotalPrice" class="sumPriceTotal">0</span>
    </div>
    <div class="payBox">
        <button id="payBt" onclick="successOrder()" class="payBt">Bezahlen</button>
    </div>
    `;
}