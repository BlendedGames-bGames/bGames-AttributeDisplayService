const express = require("express");
const app = express();
var bodyParse =require('body-parser');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));


//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/AttributesConfig'))
app.use(require('./routes/PlayerConfig'))

//Starting the server
app.listen(3030, () => {
 console.log("El servidor está inicializado en el puerto 3030");
});