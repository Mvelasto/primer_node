// modules
const express = require('express');
const server = express();
const path = require('path');

// settings
server.set('port', 3000); //<- declara port = 4000
server.engine('html', require('ejs').renderFile);//<-files html que pueden usar formato ejs
server.set('views', path.join( __dirname + '/views'));//<-path.join para validar la ruta
server.set('view engine', 'ejs');

// middlewares

// routes
server.use(require('./routes'));//<-search automatic the file index in routes xD

//static files
// lo que hace el express.static es poner publica la carpeta public xD
server.use(express.static(path.join(__dirname, 'public')));

// listenings the server
server.listen(server.get('port'), () =>{
  console.log('server on port', server.get('port'));//<- dice q corre en port 4000
  console.log(path.join(__dirname, 'public'));
});
