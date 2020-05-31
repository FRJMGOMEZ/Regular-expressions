

let input = document.querySelector('#input-check');
let button = document.querySelector('#btn-check');


 /* MODIFICADORES:

  g - busca globalmente, no solo el primer match

  i - case-insensitive

  [] - cuando queramos encontrar cualquiera de la letras, digitos simbolos que queramos encontrar, podemos aplicar rangos (A-Z o 0-9 )

  ^ - indica negativo. Busca todas las coincidencias que no hagan match con el contenido de la cadena por ejemplo  ( [^A-B])

 */

 /* METACARACTERES 
 
 . - queremos buscar cualquier caracter, por ejemplo (/h./) queremos buscar cualquier tipo de h que vaya seguido cualquier caracter

 \d - queremos encontrar un dígito (/\d/).

 \D - queremos buscar todo lo que no sea un dígito (/\D/) .

 \w - buscaremos aquellos caracteres que no sean símbolos  (/\w/). 

 \W - buscaremos aquellos caracteres que sean símbolos (no abecedario ni digitos)
 
 
 */

///NÚMEROS//
    //Rango//
    let regExp1 = /[0-9]/
    //Rango + cantidad de digitos //
    let regExp2 = /[0-9]{3}/
    //Rango + cantidad de digitos (consecutivos)//
    let regExp3 = /[0-9]{3}/g

///STRINGS///    
    // coicidencia simple //
    let regExp4 = /sol/   /* /sol/g */
    // búsqueda de espacios sin cadenas en blanco, búsqueda al inicio (^), búsqueda al fin ($) , espacio en blanco ([\s])  //
    let regExp5 = /^[\s]*(.*?)[\s]*$/
    // detectar y filtrar etiquetas html //
    let regExp6 = /<([a-z0-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/
    // validación de color hexadecimal //
    let regExp7 = /\B#(?:[a-f0-9A-F]{6}|[a-f0-9A-F]{3})\b/
    // validación correo electrónico (que sean .com o .es) ///
    let regExp8 = /\b[\w.!#&$*+\/=?{|}]+@[\w-]+(?:\.[com es]+)+\b/
    // validación de un nombre de usuario //
    let regExp9 = /^[A-Za-z0-9_-]{3,16}$/
    // validar password. 1 mayúscula, 1 minúscula, 1 número y caracter especial //
    let regExp10 = /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\w.!#&$*+\/=?{|}_-`"%Ç¨:.]))^.*/

  
button.addEventListener('click',()=>{

    let value = input.value;

    let rgxp = regExp4;

    if(value.match(rgxp)){

        console.log(value.match(rgxp))
    }
})




