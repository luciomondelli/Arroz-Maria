window.addEventListener("scroll", function(){
    //Tomo el tamañano de la pantalla y la posición del div que contiene los elementos
    let tamañoPantalla = window.innerHeight/3.5;
    let posicion = this.document.getElementById("row").getBoundingClientRect().top;

    //Busco los elementos a los cuales les quiero aplicar el efecto de fadeIn
    let imagenProducto = this.document.getElementById("product");
    let circulo = this.document.getElementById("color-circle");
    let text = this.document.getElementById("heading1")

    //Cuado estoy lo suficientement cerca del div modifico la opacidad de los elementos
    if (posicion < tamañoPantalla){
        imagenProducto.style.transition = circulo.style.transition = "opacity 1s ease";
        text.style.transition = "opacity 2s ease";
        imagenProducto.style.opacity = text.style.opacity = circulo.style.opacity = "1"; 
    }
})