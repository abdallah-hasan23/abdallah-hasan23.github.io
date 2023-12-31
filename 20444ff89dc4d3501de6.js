window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () =>{
        alert("سيتم إضافة المنتج إلى عربة التسوق")
    })
})

document.querySelectorAll('.size-option input[type="radio"]').forEach(item =>{
    item.addEventListener('change',() => {
        document.querySelectorAll('.size-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll('.color-option input[type="radio"]').forEach(item =>{
    item.addEventListener('change',() => {
        document.querySelectorAll('.color-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value ;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$";

        let totalPriceForAllProduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.getAttribute('data-product-quantity').value;
            const totalPriceForProduct = pricePerUnite
        })

    })
})




document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();

