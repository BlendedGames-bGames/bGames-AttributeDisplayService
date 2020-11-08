const express = require('express');
const router = express.Router();

var http = require('http');

var common = require('./extras');


// PARA ESTE MICROSERVICIO SE NECESITA INGRESAR LOS DATOS DE LA SIGUIENTE MANERA:
/* Ejemplo de Json del Body para el POST
    {
    "id_player": 2,
    "nameat": "Resistencia",
    "namecategory": "Físico",
    "data": 1,
    "data_type": "in.off",
    "input_source": "xlr8_podometer",
    "date_time": "2019-05-16 13:17:17"
    }
*/
router.get('/getAttributes/:id', (req,res,next)=>{
    var post_data = req.body;
    const{id}= req.params;
    var options = {
        host : 'apirestgetservice.herokuapp.com',
        path: ('/attributes/'+id),
        method: 'GET'
    };

    common.getJson(options,function(error,result){
        if(error){
            console.log("No hay resultado");//ACA ESTA EL RESULTADO
            res.json("Error");
        }
        else{
            console.log(result);//ACA ESTA EL RESULTADO
            res.json(result);
        }
    });

})

router.get('/getAttributes/bycategory/:id/:type', (req,res,next)=>{
    var post_data = req.body;
    const{id,type}= req.params;
    var options = {
        host : 'apirestgetservice.herokuapp.com',
        path: ('/attributes/bycategory/'+id+'/'+type),
        method: 'GET'
    };

    common.getJson(options,function(error,result){
        if(error){
            console.log("No hay resultado");//ACA ESTA EL RESULTADO
            res.json("Error");
        }
        else{
            console.log(result);//ACA ESTA EL RESULTADO
            res.json(result);
        }
    });

})


router.get('/getAttributes/byname/:id/:type', (req,res,next)=>{
    var post_data = req.body;
    const{id,type}= req.params;
    var options = {
        host : 'apirestgetservice.herokuapp.com',
        path: ('/attributes/byname/'+id+'/'+type),
        method: 'GET'
    };

    common.getJson(options,function(error,result){
        if(error){
            console.log("No hay resultado");//ACA ESTA EL RESULTADO
            res.json("Error");
        }
        else{
            console.log(result);//ACA ESTA EL RESULTADO
            res.json(result);
        }
    });

})


router.get('/getAttributesSummary/:id', (req,res,next)=>{
    var post_data = req.body;
    console.log('paso por aqui')
    const id= req.params.id;  
    console.log(id)
    var options = {
        host : 'apirestgetservice.herokuapp.com',
        path: ('/attributes/resume/'+id),
        method: 'GET'
    };
    common.getJson(options,function(error,result){
        if(error){
            console.log("Error in conection or invalid request");//ACA ESTA EL RESULTADO
            res.json("Error");
        }
        else{
            console.log(result);//ACA ESTA EL RESULTADO
            res.json(result);
        }
    });
    
})

router.get('/getAttributesSummary/:id/:type', (req,res,next)=>{
    var post_data = req.body;
    const{id,type}= req.params;
    var options = {
        host : 'apirestgetservice.herokuapp.com',
        path: ('/attributes/resume/'+id+'/'+type),
        method: 'GET'
    };
    common.getJson(options,function(error,result){
        if(error){
            console.log("No hay resultado");//ACA ESTA EL RESULTADO
            res.json("Error");
        }
        else{
            console.log(result);//ACA ESTA EL RESULTADO
            res.json(result);
        }
    });
    
})

module.exports = router;

