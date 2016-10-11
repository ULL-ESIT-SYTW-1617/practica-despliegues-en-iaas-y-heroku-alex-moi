# Gulp
 **Gulp.js** es un sistema de construcción que nos permite automatizar tareas comunes con el fin de facilitarnos su ejecución sin hacerlo manualmente.

Nos permite reducir código JavaScript, recargar el navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Gulp.js está construído con **Javascript**, funciona sobre **Node.js** y es **Open Source**, así que su código fuente lo puedes encontrar en [github](https://github.com/gulpjs).

Gulp.js utiliza el módulo **Stream** de Node.js, lo cual lo hace más rápido para construir. También usa el método **pipe()**, este método obtiene todos los datos de un Stream legible(readable) y lo escribe en el destino que le indiquemos ó de lo contrario lo entrega o sirve hacia otro pipe.

Para instalarlo, debemos utilizar **npm**:

> npm install -g gulp

Todas las tareas que se quieran realizar, deberán estar en el fichero **gulpfile.js** en la raíz del proyecto.