// Todas las palabras que tengan una logintud de 7 o mas letras
let mensaje1="1.-en internet se puede encontrar todo tipo de contenido";
let newMensaje1= mensaje1.match(/[a-z]{7,}/g," ");
console.log(newMensaje1);


//Expresiones Que NO Finalicen Con Una Vocal
let mensaje2="2.-en internet se puede encontrar todo tipo de contenido";
let newMensaje2= mensaje2.replace(/[^aeiou\s]\b/g,"*");
console.log(newMensaje2);


//Las Palabras que Inicien con "M" Donde la Segunda No Sea Vocal
let mensaje3="3.-puedes visitar mcdonals y comprar un mcburguer con mucho queso";
let newMensaje3= mensaje3.replace(/[m][^aeiou][a-z]{0,}/g," ");
console.log(newMensaje3);


//Eliminar Las Comillas y El Texto Adentro
let mensaje4="4.-en 'internet' se puede encontrar todo tipo de 'contenido'";
let newMensaje4= mensaje4.replace(/[''?][a-z]{0,}/g," ");
console.log(newMensaje4);


//Eliminar el IP
let mensaje5="5.-algunas computadoras utilizan el Ip 10.0.0.1 y no 35 53";
let newMensaje5= mensaje5.replace( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/g,"");
console.log(newMensaje5);;


//eliminar La Hora
let mensaje6="6.-Me Levanto alas 09:00:00 para desayunar";
let newMensaje6= mensaje6.replace( /(\d\W)?[00:00:00][0-9][0-9]{0,}/g,"");
console.log(newMensaje6)


//Eliminar el Numero Telefonico 
let mensaje7 = "7.-Mi Telefono es: 9851007064"; 
let newMensaje7 = mensaje7.replace(/[0-9]{10,20}/g, "*");
console.log(newMensaje7);

//Eliminar el Correo Electronico
let mensaje8="8.-Uso el correo leonardo.lozano.mena11@gmail.com para asuntos personales";
let newMensaje8= mensaje8.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g,"");
console.log(newMensaje8);


//eliminar el URL
let mensaje9 = "9.- https://www.facebook.com , Es una pagina para conocer gente nueva";
let newMensaje9 = mensaje9.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, "*");
console.log(newMensaje9)


//elimina un codigo postal
let mensaje10 = "10.-97780, 78 , 51  97740"; 
let newMensaje10 = mensaje10.replace(/[0-9]{5}/g, "*");
console.log(newMensaje10);