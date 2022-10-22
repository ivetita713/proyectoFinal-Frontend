## Funcion comenzar
La función "comenzar" extrae los cuadros div y los almacena en variables para después
editar su propiedad "display" y asi al momento de dar click en el botón "Jugar!" de HTML
se oculte la pantalla de bienvenida y se muestre la pantalla de juego, ésto gracias a 
la propiedad de display que puede ser cambiada de "none" (No se ve) a "block" (Si se ve).

Basicamente decimos:

1.-Guarda en la variable "Y" lo que tenga el ID de "bienvenida" (En éste caso es nuestra pantalla de bienvenida).
2.-Guarda en la variable "X" lo que tenga el ID de "juego" (En éste caso es nuestra pantalla de juego).
3.-Cambia la propiedad display de mi pantalla de bienvenida a "none" para ocultarla.
4.-Cambia la propiedad display de mi pantalla de juego a "block" para mostrarla.
5.-Guarda en la variable "Z" lo que tenga el ID de "nombre" (En éste caso es el valor de nuestro "Input"
   en la pantalla de bienvenida, en otras palabras, el nombre que escribimos al comenzar el juego).
6.-Buscamos el elemento con ID de "parrafo" y con nuestra propiedad "innerHTML" ingresamos un valor
   desde JavaScript a HTML, en nuestro caso será nuestro parrafo de saludo en la pantalla de juego,
   aquí mismo le damos el valor que queremos y será la concatenación de un string "Hola" y nuestra variable z
   dandole a entender al navegador que escriba "Hola [Nombre de usuario]" que se vería como "Hola María", "Hola Karina"
   en nuestro parrafo ubicado en la pantalla de juego.

## Funcion responder 
1.-Guarda en la variable "Y" lo que tenga el ID de "juego" (En éste caso es nuestra pantalla de juego).
2.-Guarda en la variable "X" lo que tenga el ID de "resultados" (En éste caso es nuestra pantalla de resultados).
3.-Cambia la propiedad display de mi pantalla de juego a "none" para ocultarla.
4.-Cambia la propiedad display de mi pantalla de resultados a "block" para mostrarla.
Llamamos a la función "respuestas" para que realice la verificación de las respuestas
de nuestro usuario para definir si son correctas o incorrectas, para mas información
de como funciona, revisarlo debajo de esa misma función.

## funcion respuestas
La función "respuestas" extrae los valores de los formularios HTML buscando su ID y los guarda
en variables para después poder hacer comparaciones y verificar que sean las respuestas correctas
por medio de los condicionales "if", "else if" y "else".

De manera mas simplificada decimos:

1.-Busca en el HTML los elementos que tengan los ID "form1", "form2" y "form3", que en éste caso 
   son nuestros 3 formularios y guarda cada uno en su respectiva variable.
2.-De cada formulario extrae la respuesta que eligió nuestro usuario y guardala en una variable diferente,
   (Cabe aclarar que usamos la propiedad "name" de cada formulario para no confundirnos y porque es necesario).
3.-Usamos los condicionales "if", "else if" y "else" para realizar comparaciones de valores y le decimos al navegador
   que reemplace el elemento con tal ID en cada caso diferente, leído de otra manera sería como 
   "Si la respuesta del formulario 1 es Tom Cruise, entonces busca el parrafo que tiene ID "r1" y escribe 
   "Tom Cruise (Correcto)", si no es esa, entonces revisa si la respuesta del formulario 1 es Brad Pitt y si es
   esa, busca el parrafo que tiene ID "r1" y escribe "Brad Pitt (Incorrecto)", si no fueron las 2 anteriores, 
   entonces por descarte nos queda que la respuesta del formulario 1 fue Zac Efron, asi que ni lo compruebes,
   solamente busca el parrafo que tiene ID "r1" y escribe "Zac Efron (Incorrecto)"".
   Ésta misma lógica se sigue para la comprobación de los otros 2 formularios.
   