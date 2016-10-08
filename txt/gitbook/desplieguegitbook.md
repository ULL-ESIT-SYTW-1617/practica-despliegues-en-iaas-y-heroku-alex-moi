### Modificar la documentación
Para modificar la documentación solo hay que añadir o modificar uno de los fichero .md existentes dentro de la carpeta doc del proyecto, puedes consultar la sintasis desde [Markdown Guide](https://guides.github.com/features/mastering-markdown/)

Puedes descargar el editor de GitBook para tu sistema operativo desde https://github.com/GitbookIO/editor-legacy/releases una vez instalada solo tienes que abrir la carpeta doc del proyecto con la app.



### Actualizar documentación

Para facilitar la integración con GitBook se ha preparado los scripts generate-gitbook y deploy-gitbook que realiza lo siguiente:

* Generan paginas html
* Publica el contenido del gitbook en la ghpagues


Por los que si tienes instalado GitBook y gulp en tu equipo según lo explicado anteriormente puedes ejecutar el siguiente comando para construir el gitbook

````
gulp build
````

Puedes publicarlo

````
gulp deploy
````