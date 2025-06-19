// Carrito de compras
let cartProducts = [];

// Abrir y cerrar el carrito
function openCart() {
    document.getElementById('shoppingSidebar').classList.add('active');
    document.getElementById('shoppingOverlay').classList.add('active');
}
function closeCart() {
    document.getElementById('shoppingSidebar').classList.remove('active');
    document.getElementById('shoppingOverlay').classList.remove('active');
}

// Cerrar al hacer click en el overlay
document.getElementById('shoppingOverlay').onclick = closeCart;

// Abrir al hacer click en el icono del carrito
const bag = document.querySelector('.bag');
if (bag) {
    bag.addEventListener('click', function (e) {
        e.preventDefault();
        openCart();
    });
}

// Actualiza el contador y el botón de checkout
function updateCartUI() {
    const count = document.getElementById("bag-count");
    const btn = document.getElementById('go-checkout-btn');
    count.textContent = cartProducts.length;
    if (cartProducts.length > 0) {
        count.style.display = "inline-block";
        if (btn) btn.style.display = 'block';
    } else {
        count.style.display = "none";
        if (btn) btn.style.display = 'none';
    }
}

// Agregar producto al carrito
function add(product, price) {
    cartProducts.push({ product, price });
    updateCartUI();
}

// Ir al checkout
function goToCheckout() {
    if (cartProducts.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alert('¡Agrega al menos un producto al carrito!');
    }
}