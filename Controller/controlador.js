const modelo = require ("../Model/Pais.js");

//PAIS
exports.getAll = (req,res) =>{
	console.log(req.body.nombre);
	modelo.getAll((err,data)=>{
		if(err)
			res.status(500).send({mensaje:"No se pudo obtener los datos"});
		else (res).send(data);
	});

};


exports.crearNuevoPais =(req,res)=>{
	const nuevoPais = new modelo({
    nombre: req.body.nombre,
    moneda: req.body.moneda,
    superficie: req.body.superficie,
    idioma: req.body.idioma,
    nroHabitantes: req.body.nroHabitantes,

});
modelo.crearNuevoPais(nuevoPais,(error,data)=>{
	if(error){
			res.status(500).send({mensaje:"Ocurrio un error al crear el Pais"});
		}else{ 
			res.send(data);
	
		}
	});
}

exports.eliminarUnPais = (req,res)=>{
	
    modelo.eliminarUnPais(req.body.nombre,(error,data)=>{
            if (error) {
                res.status(500).send({mensaje:"Ocurrio un error al eliminar el Pais"});
    
            }else{
                res.send(data);
            }
        });
    }

exports.actualizarUnPais = (req,res) =>{
        const nombrePais = req.body.nombre;
        const editarPais = new modelo(req.body);
      
    modelo.actualizarUnPais(nombrePais,editarPais, (error, data) =>{
      
          if (error){
            if(error.kind == 'not_found'){
              res.status(400).send({mensaje:"No se encontro el pais"});
            }else{
              res.status(500).send({mensaje:"Error al crear editar pais"});
            }
          }else{
            res.send(data);
          }
        });
      };



//PROVINCIA      
exports.crearNuevaProvincia =(req,res)=>{
	const nuevaProvincia = new modelo({
    nombre: req.body.nombre,
    nroCantones: req.body.nroCantones,
    superficie: req.body.superficie,
    region: req.body.region,
    idPais: req.body.idPais,

});
modelo.crearNuevaProvincia(nuevaProvincia,(error,data)=>{
	if(error){
			res.status(500).send({mensaje:"Ocurrio un error al crear la Provincia"});
		}else{ 
			res.send(data);
	
		}
	});
}

exports.eliminarUnaProvincia = (req,res)=>{
	
    modelo.eliminarUnaProvincia(req.body.nombre,(error,data)=>{
            if (error) {
                res.status(500).send({mensaje:"Ocurrio un error al eliminar el Provincia"});
    
            }else{
                res.send(data);
            }
        });
    }

exports.actualizarUnaProvincia = (req,res) =>{
        const nombreProvincia = req.body.nombre;
        const editarProvincia = new modelo(req.body);
      
    modelo.actualizarUnaProvincia(nombreProvincia,editarProvincia, (error, data) =>{
      
          if (error){
            if(error.kind == 'not_found'){
              res.status(400).send({mensaje:"No se encontro el Provincia"});
            }else{
              res.status(500).send({mensaje:"Error al crear editar Provincia"});
            }
          }else{
            res.send(data);
          }
        });
      };
