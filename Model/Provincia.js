const mysql = require("../BaseDeDatos/db.js");
const provincia = function (Provincia){

	this.nombre =Provincia.nombre;
	this.nroCantones= Provincia.nroCantones;
	this.superficie=Provincia.superficie;
	this.region=Provincia.region;
	this.idPais=Provincia.region;
};

provincia.getAll=result =>{
	mysql.query("SELECT * FROM provincia", (err, res) => {
		if (err) {
			console.log(error, "error consulta");
			result(null, error);
			return;
		}
		//console.log(res);		
		result(null, res);
	});
};

provincia.crearNuevaProvincia= (nuevaProvincia, result) => {

	mysql.query("INSERT INTO provincia SET ?", nuevaProvincia, (error, res) => {

		if (error) {
			console.log(error, "error al crear el provincia");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
};

provincia.eliminarUnaProvincia = (eliminarProvincia, result) => {

	mysql.query("DELETE FROM pais WHERE nombre = ?", eliminarProvincia, (error, res) => {
		if (error) {
			console.log(error, "error al eliminar el provincia seleccionado");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
}
provincia.actualizarUnaProvincia = (nombre, actualizarUnaProvincia, result) => {

	mysql.query("UPDATE pais set nombre=? , nroCantones =? superficie = ? , region = ?, idPais =? WHERE nombre = ? ",

		[actualizarUnaProvincia.nombre, actualizarUnaProvincia.nroCantones, actualizarUnaProvincia.superficie,
        actualizarUnaProvincia.region, actualizarUnaProvincia.idPais, idadmin], (error, res) => {

			if (error) {
				console.log(error, "error al actualizar  el provincia seleccionado");
				result(null, error);
				return;
			}
			else {
				if (res.affectedRows == 0) {
					result({ kind: "not_found" }, null);
				}
				else {
					result(null, res)
				}
		}
	});
};


provincia.obtenerSuperficie=result =>{
	mysql.query("SELECT idpais FROM provincia where superficie >?", superficie (err, res) => {
		if (err) {
			console.log(error, "error consulta");
			result(null, error);
			return;
		}
		//console.log(res);		
		result(null, res);
	});
};

module.exports = provincia;
