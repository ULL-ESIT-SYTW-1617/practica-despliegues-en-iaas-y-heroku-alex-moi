# Sistemas y Tecnologías Web. Despliegue en IaaS y Heroku.

## Introducción

En esta práctica, comenzaremos a utilizar **GitBook**, un sistema que nos permite crear nuestros propios books de una manera sencilla. Además utilizaremos otras herramientas como **NodeJS**, **Gulp** o **npm**, realizando unos pequeños tutoriales y breves explicaciones sobre cada herramienta.

## Enlaces importantes
*  [Despligue gh-pages Tareas Iniciales SYTW](https://ull-esit-sytw-1617.github.io/practica-despliegues-en-iaas-y-heroku-alex-moi/)
*  [Despliegue en gitbook](https://alu0100767421.gitbooks.io/practica-despliegues-en-iaas-y-heroku-alex-moi/content/)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi)
*  [Descripción de la práctica](https://crguezl.github.io/ull-esit-1617/practicas/practicagitbook.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)
*  [App Heroku](https://gitbook-alex-moi-nitesh.herokuapp.com/)
*  [Despliegue en el IaaS](http://10.6.128.129:8080)

#Instalación servidor Iaas

Para disponer del book en el servidor del **IaaS**, debemos de seguir los siguientes pasos:

*  Debemos crear una carpeta donde queremos tener el book
*  Debemos crear dos ficheros:
* Fichero **package.json** con el siguiente contenido

```
{
  "name": "ServidorIaas",
  "version": "1.0.0",
  "description": "Servidor para publicar books",
  "main": "iaas.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node iaas.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.14.0"
  }
}
```

* Fichero **iaas.js** que será nuestro servidor express

```
var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/gh-pages/'));

app.listen(app.get('port'), function() {
  console.log('Servidor en funcionamiento en el puerto 8080');
});

```

* Ejecutamos ```npm install``` para instalar las dependencias
* Luego creamos una carpeta con el nombre **gh-pages**. 
* En la carpeta **gh-pages** debemos ejecutar lo siguiente:
    `git init` 
    ` git remote add -f origin -t gh-pages git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git`
* Con eso tendremos en afiliada la rama gh-pages del repositorio, con que solo tendremos los archivos necesarios de nuestro book.

Unas vez hecho estos pasos, podremos hacer un `git pull` y luego ejecutar nuestro servidor `node iaas.js` y acceder a la dirección **direccion_ip_máquina:8080**

### SSH  keys
Podremos conectarnos a la máquina del iaas, siempre y cuando tengamos configurados la [vpn de la ULL](http://www.ull.es/stic/tag/vpn/), y poder configurar un alias para conectarnos más rápidamente por **ssh**.
Para ello crearemos en `~/.ssh` un fichero `config` con el siguiente contenido:
```
Host sytw
	HostName dir_ip_máquina
	User usuario
```

Así podremos realizar
`shh sytw "cd /<ruta_de_nuestro_book>/gh_pages"`
`"git pull"`
y tendremos actualizados nuestro book.

#Instalación App de Heroku
* Para desplegar una aplicación node.js en heroku es necesario crearla una cuenta o iniciar sesión.
* Descarga la herramienta Heroku Toolbelt para poder utilizar la línea de comandos (CLI) de heroku.
* Luego de la instalación desde la terminal ejecutar:

`$ heroku login`

* Te solicitará las credenciales de tu cuenta.
* Es necesario que agregemos en el proyecto la referencia del repositorio de heroku.

`$ heroku git:remote -a heroku-project-name`

* Donde heroku-project-name es el nombre del proyecto en heroku.
* Con estos simples cambios en tu proyecto ya puedes hacer el despliegue.
* Batará con agregar los cambios y hacer commit al repositorio.
 
```
$ git add .
$ git commit -m "Nuevos cambios"`
$ git push heroku master
```

##Notas:
* Es necesario que el push sea de la rama master, si el código que deseamos desplegar esta en otra rama,
por ejemplo develop es necesario ejecutar el comando: git push heroku develop:master.

* Si no has creado el proyecto en heroku desde la web entonces ejecuta el comando: heroku create
--http-git y ya no será necesario el comando heroku git:remote -a heroku-project-name.


## Autores

* Alexander Cole Mora  | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)
* Nitesh Gul Ramnani | [Página Personal](http://alu0100814651.github.io/blog/)

![Universidad de La Laguna](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-alex-moi/blob/master/images/logotipo-principal.png?raw=true)
