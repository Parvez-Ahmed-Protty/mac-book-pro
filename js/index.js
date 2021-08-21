//  cost function
function getProductValue(product, price) {
    const productCost = document.getElementById(product);
    productCost.innerText = price;
    calculation();
}
//  total 
function calculation() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCose = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalPrice = document.getElementById('total-price');
    const totalDiscount = document.getElementById('total-discount');
    totalPrice.innerText = parseInt(memoryCose) + parseInt(storageCost) + parseInt
        (deliveryCost) + parseInt(bestPrice);
    totalDiscount.innerText = totalPrice.innerText;
}
//  memory
document.getElementById('locul-memory').addEventListener('click', function () {
    const memory = getProductValue('memory-cost', 0);
})
document.getElementById('extra-memory').addEventListener('click', function () {
    const memory = getProductValue('memory-cost', 180);
})
// memory
// SSD
document.getElementById('ssd-256').addEventListener('click', function () {
    const storage = getProductValue('storage-cost', 0);
})
document.getElementById('ssd-512').addEventListener('click', function () {
    const storage = getProductValue('storage-cost', 100);
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    const storage = getProductValue('storage-cost', 180);
})
// SSD
// delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    const delivery = getProductValue('delivery-cost', 0);
})
document.getElementById('extra-delivery').addEventListener('click', function () {
    const delivery = getProductValue('delivery-cost', 20);
})
// delivery
// Prime Code
document.getElementById('pime-btn').addEventListener('click', function () {
    const pimeInput = document.getElementById('pime-input');
    const pimeInputValue = pimeInput.value;
    const totalPrice = document.getElementById('total-price');
    const totalDiscount = document.getElementById('total-discount');
    if (pimeInputValue == 'stevekaku') {
        const descount = (totalPrice.innerText / 100) * 20;
        totalDiscount.innerText = parseInt(totalPrice.innerText) - descount;
    }
    else {
        totalDiscount.innerText = totalPrice.innerText;
    }
})
// Prime Code