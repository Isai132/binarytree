class Producto {
  constructor(nombre, codigo, precio, cantidad){
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.hijoDerecho = null;
    this.hijoIzquierdo = null;
  }
  infoHtml() {
    return `<p>Codigo ${this.codigo} (${this.nombre}) $${this.precio} Existen: ${this.cantidad}</p>`;
  }
}
//se crea la clase arbol
class BinaryTree{
  constructor(){
    this.raiz = null;
  }
  //Es la funcion principal para agregar un elemento nuevo.
  agregar(nuevo){
    if (this.raiz == null)
      this.raiz = nuevo;
    else 
      this._agregate(nuevo, this.raiz);
  }
  //Es la funcion que se llama cuando la raiz/hijoX esta ocupado (es recursiva).
  _agregate(nuevo, nodox){
    if (nuevo.codigo < nodox.codigo)
      if (nodox.hijoIzquierdo == null) 
        nodox.hijoIzquierdo = nuevo;
      else this._agregate(nuevo, nodox.hijoIzquierdo);
    else 
      if (nodox.hijoDerecho == null)
        nodox.hijoDerecho = nuevo;
      else 
        this._agregate(nuevo, nodox.hijoDerecho);
  }
  //Funcion principal para inOrder.
  inOrder(){
    if (this.raiz == null)
      return "";
    else
      return this._inOrderRec(this.raiz);
  }
  //Funcion que se llama cuando existe un hijo derecho/izquierdo (es recursiva).
  _inOrderRec(nodox){
    let info = "";
    //analiza el lado Izquierdo.
    if (nodox.hijoIzquierdo != null)
      info += this._inOrderRec(nodox.hijoIzquierdo);
    //agrega el nodo.
    info += nodox.infoHtml();
    //analiza el lado Derecho.
    if (nodox.hijoDerecho != null)
      info += this._inOrderRec(nodox.hijoDerecho);
    return info;
  }
  
  preOrder(){
    if (this.raiz == null)
      return "";
    else 
      return this._preOrderRec(this.raiz);
  }
  _preOrderRec(nodox){
    let info = "";
    info += nodox.infoHtml();
    if (nodox.hijoIzquierdo != null)
      info += this._preOrderRec(nodox.hijoIzquierdo);
    if (nodox.hijoDerecho != null)
      info += this._preOrderRec(nodox.hijoDerecho);
    return info;
  }

  postOrder(){
    if (this.raiz == null)
      return "";
    else 
      return this._postOrderRec(this.raiz);
  }
  _postOrderRec(nodox){
    let info = "";
    if (nodox.hijoIzquierdo != null)
      info += this._postOrderRec(nodox.hijoIzquierdo);
    if (nodox.hijoDerecho != null)
      info += this._postOrderRec(nodox.hijoDerecho);
      info += nodox.infoHtml();
    return info;
  }

  busca(codigo){
    if (this.raiz == null)
      return "";
    else
      return this._buscar(codigo, this.raiz);

  }
  _buscar(codigo, nodox){
      if (codigo == nodox.codigo)
        return nodox.infoHtml();
      else if(nodox.hijoIzquierdo != null || nodox.hijoDerecho != null){
        if (codigo < nodox.codigo)
          return this._buscar(codigo, nodox.hijoIzquierdo);
        else
          return this._buscar(codigo, nodox.hijoDerecho);
      }
    else
      return "";
  }
}