let arbol = new BinaryTree();

const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', () => {
  let cod = document.getElementById('txtCod').value;
  let nom = document.getElementById('txtNom').value;
  let pre = document.getElementById('txtPre').value;
  let can = document.getElementById('txtCan').value;
  let prod = new Producto(nom, cod, pre, can);
  arbol.agregar(prod);

  let detalles = document.getElementById('detalles');
  detalles.innerHTML += '<p>Se agrego producto: ' + nom + '</p>';
})

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () =>{
  let cod = document.getElementById('txtCod').value;
  let resultado = arbol.busca(cod);
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>Se encontro:</h3>' + resultado ;
  else
    detalles.innerHTML += '<p>No existe el producto<p>';
})

const btnInorder = document.getElementById('btnInorder');
btnInorder.addEventListener('click', () => {
  let resultado = arbol.inOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>InOrder</h3>' + resultado;
  else
    detalles.innerHTML += '<p>No existen productos</p>'
});

const btnPreorder = document.getElementById('btnPreorder');
btnPreorder.addEventListener('click', () =>{
  let resultado = arbol.preOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>PreOrder</h3>' + resultado;
  else
    detalles.innerHTML += '<p>No existen productos</p>'
});

const btnPostorder = document.getElementById('btnPostorder');
btnPostorder.addEventListener('click', () =>{
  let resultado = arbol.postOrder();
  let detalles = document.getElementById('detalles');
  if (resultado != "")
    detalles.innerHTML += '<h3>PosOrder</h3>' + resultado;
  else
    detalles.innerHTML += '<p>No existen productos</p>'
});

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', () => {
  document.getElementById('detalles').innerHTML = '';
});