function memoryCostVai(item, product) {
    const memoryCost = document.getElementById(item + '-cost');
    memoryCost.innerText = product;
}


////memory Section//

document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 0)

})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 180);
    ////added elementsconst 
})

function storageItems(item, product) {
    const storageCost = document.getElementById(item + '-cost');
    storageCost.innerText = product;
}

///// Storage Section////

document.getElementById('256-gb').addEventListener('click', function () {
    storageItems('storage', 0)

})
document.getElementById('512-gb').addEventListener('click', function () {
    storageItems('storage', 100)
})
document.getElementById('1000-gb').addEventListener('click', function () {
    storageItems('storage', 180)

})

function delivaryCost(items, product) {
    const delivaryCost = document.getElementById(items + '-cost');

}

//delivary Charge

function freeDelivary() {
    const delivaryCost = document.getElementById('delivary-cost');
    let delivaryCostinnit = 0;
    delivaryCostinTotal = delivaryCostinnit + 0;
    delivaryCost.innerText = delivaryCostinTotal;
}
function chargeNeed() {
    const delivaryCost = document.getElementById('delivary-cost');
    let delivaryCostinnit = 0;
    delivaryCostinTotal = delivaryCostinnit + 100;
    delivaryCost.innerText = delivaryCostinTotal;
}

//////calculation In Total 



/* const bestPrice = document.getElementById('best-price').innerText
const memoryCost = document.getElementById('memory-cost').innerText
const storageCost = document.getElementById('storage-cost').innerText;
const delivaryCost = document.getElementById('delivary-cost').innerText;
const calculateAll = bestPrice + memoryCost + storageCost + delivaryCost;
totalPrice.innerText = calculateAll; */