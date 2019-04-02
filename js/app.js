//la calculadora debe realizar el cuadrado de un numero

// 1. Recuperar la referencia del boton utilizando $
// 2. Agregar el evento click al boton
// 3. Crear la funcion para realizar el calculo 
// 4. El resultado se debe mostrar en el elemento indicado
//recupera el elemento
$("#btn1").click(function(ev){
	ev.preventDefault(); //evita que el formulario se envie al servidor
   //logica para resolver el problema
   //1. recuperar lo que ingreso el usuario y guardar en una variable
   //2. realizar el calculo y guardar en otra variable
let numingresado = $("#n1").val();
let result = Math.pow(numingresado,2);  //el objeto Math tiene varias funciones matematicas
//el objeto math tiene varias funciones matematicas
$(".res1").html(`${numingresado}<sup>2</sup> = ${result}`); 
$(".res1").css( "border","red solid 1px");

});

//segundo section 
$("#btn2").click(function(ev){
	ev.preventDefault();
let palabra = $("#palabra").val(); //se trajo lo que el usuario ingreso
console.log(palabra.length)
$(".res2").text(palabra.length);

})






















//funcion para calcular por separado 
function calcularprueba(){

}
