function login(){

let email = document.getElementById("email")?.value;
let password = document.getElementById("password")?.value;

if(
email === "agricultor@agrolink.pe" &&
password === "123456"
){

window.location.href="index.html";

}else if(email){

alert("Correo o contraseña incorrectos");

}

}

function buscarProductos(){

let input = document.getElementById("searchInput");

if(!input) return;

let filtro = input.value.toLowerCase();

let productos = document.querySelectorAll(".producto");

productos.forEach(function(producto){

let texto = producto.textContent.toLowerCase();

if(texto.includes(filtro)){

producto.style.display = "";

}else{

producto.style.display = "none";

}

});

}
function buscarInicio(){



let input = document.getElementById("searchInicio");



if(!input) return;



let filtro = input.value.toLowerCase();



let elementos = document.querySelectorAll(".searchable, .product-card, .card, .price");



elementos.forEach(el => {



let texto = el.textContent.toLowerCase();



if(texto.includes(filtro)){

el.style.display = "";

}else{

el.style.display = "none";

} 
});

}
function buscarInicio(){

let input = document.getElementById("searchInicio");

if(!input) return;

let filtro = input.value.toLowerCase();

let elementos = document.querySelectorAll(".searchable, .product-card, .card, .price");

elementos.forEach(el => {

let texto = el.textContent.toLowerCase();

if(texto.includes(filtro)){
el.style.display = "";
}else{
el.style.display = "none";
}

});

}
// ======================
// EXPLORAR MERCADO
// ======================
function explorarMercado(){
window.location.href="productos.html";
}

// ======================
// MENSAJES
// ======================
function enviarMensaje(){

let input=document.getElementById("nuevoMensaje");

if(!input) return;

let mensaje=input.value.trim();

if(mensaje==="") return;

let chat=document.getElementById("chat");

chat.innerHTML += `
<div class="message buyer">
👤 ${mensaje}
</div>
`;

input.value="";

chat.scrollTop=chat.scrollHeight;

}

// ======================
// SEMAFORO INTELIGENTE
// ======================
function generarSemaforo(){

let producto =
document.getElementById("productoSemaforo")
.value.toLowerCase();

let resultado =
document.getElementById("resultadoSemaforo");

if(producto.includes("limon") ||
producto.includes("tomate") ||
producto.includes("cebolla")){

resultado.innerHTML=`
<div class="price red">
🔴 Precio en alerta
</div>
`;

}else if(producto.includes("arroz") ||
producto.includes("maiz") ||
producto.includes("yuca")){

resultado.innerHTML=`
<div class="price yellow">
🟡 Precio estable
</div>
`;

}else{

resultado.innerHTML=`
<div class="price green">
🟢 Precio favorable
</div>
`;

}

}

// ======================
// PERFIL DE AGRICULTOR
// ======================
function mostrarAgricultor(
nombre,
ubicacion,
productos
){

document.getElementById("perfilAgricultor").innerHTML=`

<h2>👨‍🌾 ${nombre}</h2>

<p>📍 ${ubicacion}</p>

<br>

<h3>🌱 Productos</h3>

<p>${productos}</p>

<br>

<a href="mensajes.html">

<button>

💬 Enviar mensaje

</button>

</a>

`;

}
function generarSemaforo(){

let producto =
document.getElementById("productoSemaforo")
.value
.toLowerCase()
.trim();

let resultado =
document.getElementById("resultadoSemaforo");

if(producto==""){
resultado.innerHTML=`
<div class="price yellow">
🟡 Escribe un producto
</div>`;
return;
}

if(
producto.includes("limon") ||
producto.includes("limón") ||
producto.includes("tomate") ||
producto.includes("cebolla")
){

resultado.innerHTML=`
<div class="price red">
🔴 PRECIO EN ALERTA
</div>`;

}
else if(
producto.includes("arroz") ||
producto.includes("maiz") ||
producto.includes("maíz") ||
producto.includes("yuca")
){

resultado.innerHTML=`
<div class="price yellow">
🟡 PRECIO ESTABLE
</div>`;

}
else{

resultado.innerHTML=`
<div class="price green">
🟢 PRECIO FAVORABLE
</div>`;

}

}
function mostrarAgricultor(
nombre,
ubicacion,
productos
){

document.getElementById("perfilAgricultor").innerHTML=`

<h2>👨‍🌾 ${nombre}</h2>

<p>📍 ${ubicacion}</p>

<br>

<h3>🌱 Productos disponibles</h3>

<p>${productos}</p>

<br>

<a href="mensajes.html">

<button>

💬 Enviar mensaje

</button>

</a>

`;

}
// ==========================
// PERFIL DE AGRICULTOR
// ==========================
function mostrarAgricultor(nombre, ubicacion, productos){

let perfil = document.getElementById("perfilAgricultor");

if(!perfil) return;

perfil.innerHTML = `

<h2>👨‍🌾 ${nombre}</h2>

<p>📍 ${ubicacion}</p>

<br>

<h3>🌱 Productos disponibles</h3>

<p>${productos}</p>

<br>

<a href="mensajes.html">

<button>

💬 Enviar mensaje

</button>

</a>

`;

perfil.scrollIntoView({
behavior:"smooth"
});

}s
// Diccionario de vendedores (Producto -> Lista de agricultores)
const vendedoresPorProducto = {
    "Limón Tahití": ["Juan Pérez", "Paula Reyes", "Carmen Flores"],
    "Mango Kent": ["Juan Pérez", "Elena Castro"],
    "Arroz Extra": ["María Gómez", "Rosa Mendoza"],
    // Agrega aquí todos los que necesites
};

function verVendedores(productoNombre) {
    const listaAgricultores = vendedoresPorProducto[productoNombre] || ["No hay agricultores registrados para este producto."];
    
    // Mostramos el modal
    document.getElementById('modal-nombre').innerText = "Productores de: " + productoNombre;
    const lista = document.getElementById('modal-lista-productos');
    
    lista.innerHTML = ""; // Limpiar
    listaAgricultores.forEach(nombre => {
        lista.innerHTML += `<li style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">${nombre}</li>`;
    });
    
    document.getElementById('agricultorModal').style.display = 'flex';
}


