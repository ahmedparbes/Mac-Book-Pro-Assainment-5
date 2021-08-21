////memory Section//

function memoryCostVai(item, product) {
    const memoryCost = document.getElementById(item + '-cost');
    memoryCost.innerText = product;
}



document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 0)

})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCostVai('memory', 180);
    ////added elementsconst 
})

///// Storage Section////

function storageItems(item, product) {
    const storageCost = document.getElementById(item + '-cost');
    storageCost.innerText = product;
}

document.getElementById('256-gb').addEventListener('click', function () {
    storageItems('storage', 0)

})
document.getElementById('512-gb').addEventListener('click', function () {
    storageItems('storage', 100)
})
document.getElementById('1000-gb').addEventListener('click', function () {
    storageItems('storage', 180)

})

//delivary section

function delivaryCost(items, product) {
    const delivaryCost = document.getElementById(items + '-cost');
    delivaryCost.innerText = product;

}

function freeDelivary() {
    delivaryCost('delivary', 0)
}
function chargeNeed() {
    delivaryCost('delivary', 100)
}

//////calculation In Total 



/* const bestPrice = document.getElementById('best-price').innerText
const memoryCost = document.getElementById('memory-cost').innerText
const storageCost = document.getElementById('storage-cost').innerText;
const delivaryCost = document.getElementById('delivary-cost').innerText;
const calculateAll = bestPrice + memoryCost + storageCost + delivaryCost;
totalPrice.innerText = calculateAll; */