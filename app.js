///memory Section//

function memoryCostVai(item, product) {
    const memoryCost = document.getElementById(item + '-cost');
    memoryCost.innerText = product;
    totalCost()

}

//////calculation In Total 

function totalCost() {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryCostText.innerText);

    /// storage Value

    const storageCostText = document.getElementById('storage-cost')
    const storageCost = parseInt(storageCostText.innerText);

    ///////delivaryCost VAlue

    const deliveryCostText = document.getElementById('delivary-cost')
    const deliveryCost = parseInt(deliveryCostText.innerText);

    /////total Price

    const total = document.getElementById('total-price');
    total.innerText = memoryCost + storageCost + deliveryCost + 1299;

    //increase TotalAmount in footer//

    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = total.innerText;
}


// -------------------memory -------

document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 0)


})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 180);

})
// -------------------storage -------
document.getElementById('256-gb').addEventListener('click', function () {
    memoryCostVai('storage', 0);

})
document.getElementById('512-gb').addEventListener('click', function () {
    memoryCostVai('storage', 100);

})
document.getElementById('1000-gb').addEventListener('click', function () {
    memoryCostVai('storage', 180);

})
// -------------------delivery -------
document.getElementById('freeDelivary').addEventListener('click', function () {
    memoryCostVai('delivary', 0);

})
document.getElementById('chargeNeed').addEventListener('click', function () {
    memoryCostVai('delivary', 20);

})

///promo code discount section

document.getElementById('promo-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldvalue = parseInt(inputField.value);

    // memory 

    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryCostText.innerText);

    //storage

    const storageCostText = document.getElementById('storage-cost')
    const storageCost = parseInt(storageCostText.innerText);

    //delivary

    const deliveryCostText = document.getElementById('delivary-cost')
    const deliveryCost = parseInt(deliveryCostText.innerText);

    //total Amount

    const total = document.getElementById('total-price');
    const allInOne = memoryCost + storageCost + deliveryCost + 1299;
    total.innerText = allInOne;

    // start promo validation

    const totalAmount = document.getElementById('total-amount');
    if (inputField.value == 'stevekaku') {
        let PriceCount = allInOne;
        totalAmount.innerText = (PriceCount - (PriceCount * 0.20));
    }

})