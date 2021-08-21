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
    /////
    const storageCostText = document.getElementById('storage-cost')
    const storageCost = parseInt(storageCostText.innerText);
    ///////
    const deliveryCostText = document.getElementById('delivary-cost')
    const deliveryCost = parseInt(deliveryCostText.innerText);
    /////
    const total = document.getElementById('total-price');
    total.innerText = memoryCost + storageCost + deliveryCost + 1299;
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = total.innerText;
}




document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 0)


})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 180);

})
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