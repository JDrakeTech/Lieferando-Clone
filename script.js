load();
function render() {
    let foodSelection = document.getElementById('ChoiceFoodContainer');

    generatedMexican(foodSelection);
    generatedPizzas(foodSelection);
    generatedBurgers(foodSelection);
    generatedFries(foodSelection);
    generatedSalads(foodSelection);
    generatedDesserts(foodSelection);
    renderBasketChoise();
    if (basket['food'].length > 0) {
        document.getElementById('basketInfo').classList.add('d-none');
    } else {
        document.getElementById('basketInfo').classList.remove('d-none');
    }
}

function generatedMexican(foodSelection) {
    for (let i = 0; i < mexican.length; i++) {
        const menu = mexican[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `mex${i}`);
    }
}

function generatedPizzas(foodSelection) {
    foodSelection.innerHTML += generatedMenuSeparation('Pizzas', './img/pizzas.jpg');
    for (let i = 0; i < pizzas.length; i++) {
        const menu = pizzas[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `pizza${i}`);
    }
}

function generatedBurgers(foodSelection) {
    foodSelection.innerHTML += generatedMenuSeparation('Burgers', './img/burgers.png');
    for (let i = 0; i < burgers.length; i++) {
        const menu = burgers[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `burger${i}`);
    }
}

function generatedFries(foodSelection) {
    foodSelection.innerHTML += generatedMenuSeparation('Pommes', './img/fries.jpg');
    for (let i = 0; i < fries.length; i++) {
        const menu = fries[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `fries${i}`);
    }
}

function generatedSalads(foodSelection) {
    foodSelection.innerHTML += generatedMenuSeparation('Salate', './img/salads.jpg');
    for (let i = 0; i < salads.length; i++) {
        const menu = salads[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `salad${i}`);
    }
}

function generatedDesserts(foodSelection) {
    foodSelection.innerHTML += generatedMenuSeparation('Desserts', './img/desserts.jpg');
    for (let i = 0; i < desserts.length; i++) {
        const menu = desserts[i];
        foodSelection.innerHTML += generatedFoodSelectionHtml(menu, `dessert${i}`);
    }
}

function addToBasket(food, price) {
    if (getBasketIndex(food) == - 1) {
        basket['food'].push(food);
        basket['price'].push(price);
        basket['amount'].push(1);
    } else {
        basket['amount'][getBasketIndex(food)]++;
    }
    renderBasketChoise();
    document.getElementById('basketInfo').classList.add('d-none');
    save();
}

function removeBasket(i) {
    if (basket['amount'][i] > 1) {
        basket['amount'][i]--;
    } else {
        basket['food'].splice(i, 1);
        basket['price'].splice(i, 1);
        basket['amount'].splice(i, 1);
        if (basket.food.length == 0) {
            document.getElementById('basketInfo').classList.remove('d-none');
            document.getElementById('basketSumContainer').innerHTML = ''
        }
    }
    renderBasketChoise();
    save();
}

function deleteFood(i){
basket['food'].splice(i, 1)
basket['price'].splice(i, 1)
basket['amount'].splice(i, 1)
if (basket.food.length == 0) {
    document.getElementById('basketInfo').classList.remove('d-none');
    document.getElementById('basketSumContainer').innerHTML = ''
}
renderBasketChoise();
}

function renderBasketChoise() {
    let basketChoise = document.getElementById('basketChoise');
    basketChoise.innerHTML = ''
    for (let i = 0; i < basket['food'].length; i++) {
        const food = basket['food'][i];
        const price = basket['price'][i];
        const amount = basket['amount'][i];
        let foodSumPrice = amount * price;
        let roundedFoodPrice = foodSumPrice.toFixed(2)
        basketChoise.innerHTML += generatedBasketChoiseHtml(i);
        let choise = document.getElementById(`choise${i}`);
        choise.innerHTML = generatedChoiseHtml(amount, food, roundedFoodPrice, i, price);
    }
    let basketSumContainer = document.getElementById('basketSumContainer');
    if (basket['food'].length > 0) {
        basketSumContainer.innerHTML = generatedBasketSumHtml();
    }
    basketSum();
    save();
}

function basketSum() {
    let sum = 0;
    let basketAmount = 0;
    for (let i = 0; i < basket['amount'].length; i++) {
        sum += +basket['price'][i] * basket['amount'][i];
        roundedSum = sum.toFixed(2);
        document.getElementById('Subtotal').innerHTML = roundedSum + '€';
        totalPrice = sum + 1.50;
        roundedSumTotal = totalPrice.toFixed(2);
        document.getElementById('TotalPrice').innerHTML = `${roundedSumTotal} €`;
        basketAmount += basket['amount'][i];
        document.getElementById('basketAmount').innerHTML = +basketAmount;
    }
    save();
}

function deliveryChoice(){
    document.getElementById('deliveryBox').classList.add('deliveryPickUpChoice')
    document.getElementById('pickUpBox').classList.remove('deliveryPickUpChoice')
}

function pickUpChoice(){
    document.getElementById('pickUpBox').classList.add('deliveryPickUpChoice')
    document.getElementById('deliveryBox').classList.remove('deliveryPickUpChoice')
}

function openCloseBasketMobile() {
    document.getElementById('basketContainer').classList.toggle('d-none-mobile');
    document.getElementById('ChoiceFoodContainer').classList.toggle('d-none');
    document.getElementById('ChoiceFoodContainer').classList.toggle('d-flex');
    if (basket.food.length == 0) {
        basketAmount.innerHTML = basket.food.length;
    }
}

function successOrder() {
    document.getElementById('successfulOrderContainer').classList.toggle('d-none');
    document.getElementById('successfulOrderContainer').classList.toggle('d-flex');
    deleteBasket()
    render();
}

function deleteBasket() {
    basket['food'].splice(0, basket['food'].length)
    basket['price'].splice(0, basket['price'].length)
    basket['amount'].splice(0, basket['amount'].length)
    if (basket.food.length == 0) {
        document.getElementById('basketInfo').classList.remove('d-none');
        document.getElementById('basketSumContainer').innerHTML = ''
    }
    renderBasketChoise();
    save();
}

function save() {
    let basketAsText = JSON.stringify(basket);
    localStorage.setItem('basket', basketAsText);
}

function load() {
    let basketAsText = localStorage.getItem('basket');
    if (basketAsText) {
        basket = JSON.parse(basketAsText)
    }
}

function getBasketIndex(menu) {
    return basket['food'].indexOf(menu)
}

function openChoiseLanguage() {
    document.getElementById('choiseLanguageContainer').classList.toggle('d-none')
    document.getElementById('choiseLanguageContainer').classList.toggle('d-flex')
}