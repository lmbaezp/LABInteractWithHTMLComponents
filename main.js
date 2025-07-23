let votosDiseñoWeb = document.getElementById('votosDiseñoWeb');
let votosJavascript = document.getElementById('votosJavascript');
let votosBasesDeDatos = document.getElementById('votosBasesDeDatos');
let numVotosDiseñoWeb = 0;
let numVotosJavascript = 0;
let numVotosBasesDeDatos = 0;

function enviarVoto(e){
    alert('¡Gracias por tu voto!');
    let valorSelecc = e.textContent;
    let totalVotos = numVotosBasesDeDatos + numVotosJavascript + numVotosDiseñoWeb;
    if(totalVotos % 5 == 0 && totalVotos != 0){
        console.log('Total acumulado de votos: ', totalVotos);
    }
    switch (valorSelecc) {
        case 'Diseño Web':
            numVotosDiseñoWeb++;
            votosDiseñoWeb.textContent = numVotosDiseñoWeb;
            break;
        case 'JavaScript':
            numVotosJavascript++;
            votosJavascript.textContent = numVotosJavascript;
            break;
        case 'Bases de Datos':
            numVotosBasesDeDatos++;
            votosBasesDeDatos.textContent = numVotosBasesDeDatos;
            break;
        default:
            break;
    }
}

/////////////////////////////////////////////////////////////////////////////////////

let numPanes = 0;
let numJugos = 0;
let numMilhojas = 0;

let seccionFactura = document.getElementById('factura');
let totalFactura = document.getElementById('totalFactura');
let prodsCarrito = document.getElementById('prodsCarrito');
let totalProductos = document.getElementById('totalProductos');
let totalGeneral = 0;

let btnVaciarCarrito = document.getElementById('vaciarCarrito');

function agregar(e) {
    let producto = e.parentElement.id;
    btnVaciarCarrito.style.display = 'inline-block';

    const newDiv = document.createElement('div');
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'space-between';
    newDiv.style.marginTop = '5px';

    const nombre = document.createElement('p');
    const numProd = document.createElement('p');
    const precioP = document.createElement('p');

    let precioUnitario = 0;
    let cantidad = 0;
    let idTotal = '';
    let idNumProd = '';

    switch (producto) {
        case 'pan':
            numPanes++;
            precioUnitario = parseFloat(document.getElementById('precioPan').textContent.replace('$', ''));
            idTotal = 'totalPanes';
            idNumProd = 'numPanes';
            nombre.textContent = 'PAN';
            cantidad += numPanes;
            break;

        case 'jugo':
            numJugos++;
            precioUnitario = parseFloat(document.getElementById('precioJugo').textContent.replace('$', ''));
            idTotal = 'totalJugos';
            idNumProd = 'numJugos';
            nombre.textContent = 'JUGO';
            cantidad += numJugos;
            break;

        case 'milhoja':
            numMilhojas++;
            precioUnitario = parseFloat(document.getElementById('precioMilhoja').textContent.replace('$', ''));
            idTotal = 'totalMilhojas';
            idNumProd = 'numMilhojas';
            nombre.textContent = 'MILHOJA';
            cantidad += numMilhojas;
            break;
    }

    totalGeneral += precioUnitario;
    newDiv.id = idTotal;
    numProd.id = idNumProd;
    numProd.textContent = cantidad;
    precioP.textContent = `$${precioUnitario.toFixed(2)}`;

    const existente = document.getElementById(idTotal);
    if (existente) {
        document.getElementById(idNumProd).textContent = cantidad; 
        existente.querySelector('p:last-child').textContent = `$${precioUnitario.toFixed(2)}`;
    } else {
        newDiv.appendChild(nombre);
        newDiv.appendChild(numProd);
        newDiv.appendChild(precioP);
        prodsCarrito.appendChild(newDiv);
    }

    console.log(`Producto agregado al carro: ${nombre.textContent} - ${precioP.textContent}`)

    totalFactura.textContent = `$${totalGeneral.toFixed(2)}`;
    totalProductos.textContent = numJugos + numMilhojas + numPanes;

    if(parseFloat(document.getElementById('totalFactura').textContent.replace('$', '')) > 50){
         alert('Envío gratis aplicado');
    }
}

function vaciar(){
    totalGeneral = 0;
    totalFactura.textContent = `$0`;
    totalProductos.textContent = 0;
    prodsCarrito.innerHTML = '';
    numPanes = 0;
    numJugos = 0;
    numMilhojas = 0;
}

