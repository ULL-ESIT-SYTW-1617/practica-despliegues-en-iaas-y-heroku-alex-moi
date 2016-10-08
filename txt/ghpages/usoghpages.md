# Github Pages

Tenemos dos formas de hacer uso de las gh-pages de github:

 1. Mediante el uso de la rama gh-pages:
- Crear una nueva rama denominada "gh-pages"
- Colocarse en la rama gh-pages
- Añadir los cambios del proyecto en esta rama.
 
 2. Mediante la creacion de un sitio de usuario o de Organización
- **Crear un repositorio**
Dirígete a GitHub y crear un nuevo repositorio llamado username.github.io, donde username es su nombre de usuario (o nombre de la organización) en GitHub.

- **Clonar el repositorio**
Vaya a la carpeta donde desea almacenar su proyecto, y clone el nuevo repositorio

- **Añadir cambios**
Entre en la carpeta del proyecto y añada un archivo index.html

- **Subir cambios**
Confirme los cambios y subalos al repositorio mediante un 
````
$ git push -u origin master
````

- **Comprobar funcionamiento**
Acceda desde su navegado al enlace http://username.github.io, sustituyendo username por su nombre de usuario.