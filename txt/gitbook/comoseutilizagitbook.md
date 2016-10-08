# Instalación de GitBook

Para desinstalar e instalar gitbook se deben usar los siguientes comandos.

###### Desistalar GitBook con NPM

````
$ npm uninstall -g gitbook
````

###### Instalar versión de GitBook con NPM

```
$ npm install -g gitbook-cli
```

###### Instalación de Calibre

Se necesita tener instalada la app Calibre para poder generar la documentación en formato pdf.

* Descargar desde: http://code.calibre-ebook.com/dist/osx
* Instalar Calibre
* Añadir Calibre al PATH (puedes añadirlo a ~/.zshrc)

````
export PATH=$PATH:/Applications/calibre.app/Contents/MacOS
````

##### Añadir imágenes

Puedes añadirlas dentro de la carpeta resources. Añadir dentro de esta carpeta el fuente de la imagen por si es necesario modificarla.

Puedes añadir la imágenes con el siguiente código

```
![Image demo](resources/keep-calm-portada.jpg)
```

Si añades una nueva sección al documento recuerda que tienes que añadirla en el fichero ./doc/SUMMARY.md si no utilizas el editor de GitBook.