/* function memoryCostVai(product) {
    const memoryCost = document.getElementById(product + '-cost');
    var MemoryInnitPrice = 0;
    memoryCostTotal = MemoryInnitPrice + 0;
    memoryCost.innerText = memoryCostTotal;
    return memoryCost.innerText;
}
 */

////memory Section//

document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    var MemoryInnitPrice = 0;
    memoryCostTotal = MemoryInnitPrice + 0;
    memoryCost.innerText = memoryCostTotal;
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    var MemoryInnitPrice = 0;
    memoryCostTotal = MemoryInnitPrice + 180;
    memoryCost.innerText = memoryCostTotal;

})

///// Storage Section////

document.getElementById('256-gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    let StorageinnitPrice = 0;
    storageCostInTotal = StorageinnitPrice + 0;
    storageCost.innerText = storageCostInTotal;
})
document.getElementById('512-gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    let StorageinnitPrice = 0;
    storageCostInTotal = StorageinnitPrice + 100;
    storageCost.innerText = storageCostInTotal;
})
document.getElementById('1000-gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    let StorageinnitPrice = 0;
    storageCostInTotal = StorageinnitPrice + 180;
    storageCost.innerText = storageCostInTotal;
})

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

/* function getValue() {
    const memoryCost = document.getElementById('memory-cost');
    var MemoryInnitPrice = 0;
    memoryCostTotal = MemoryInnitPrice + 0;
    memoryCost.innerText = memoryCostTotal;
}

function calculateTotal() {
    memoryCost.innerText = memoryCost();
    const memoryCost = getValue() + 100;
} */


/* const totalPrice = document.getElementById('total-price').innerText
const memoryCost = document.getElementById('memory-cost').innerText
console.log(memoryCost);
 */




/* const bestPrice = document.getElementById('best-price').innerText
const memoryCost = document.getElementById('memory-cost').innerText
const storageCost = document.getElementById('storage-cost').innerText;
const delivaryCost = document.getElementById('delivary-cost').innerText;
const calculateAll = bestPrice + memoryCost + storageCost + delivaryCost;
totalPrice.innerText = calculateAll; */