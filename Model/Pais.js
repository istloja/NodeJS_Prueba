const mysql = require("../BaseDeDatos/db.js")
const pais = function (Pais) {
	this.nombre = Pais.nombre;
	this.moneda = Pais.moneda;
	this.superficie = Pais.superficie;
	this.idioma = Pais.idioma;
	this.nroHabitantes = Pais.nroHabitantes;
	
};

pais.getAll = result => {

	mysql.query("SELECT * FROM pais", (err, res) => {
		if (err) {
			console.log(error, "error consulta");
			result(null, error);
			return;
		}
		//console.log(res);		
		result(null, res);
	});
};


pais.crearNuevoPais = (nuevoPais, result) => {

	mysql.query("INSERT INTO pais SET ?", nuevoPais, (error, res) => {

		if (error) {
			console.log(error, "error al crear el pais");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
};

pais.eliminarUnPais = (eliminarPais, result) => {

	mysql.query("DELETE FROM pais WHERE nombre = ?", eliminarPais, (error, res) => {
		if (error) {
			console.log(error, "error al eliminar el pais seleccionado");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
}
pais.actualizarUnPais = (nombre, actualizarUnAdmin, result) => {

	mysql.query("UPDATE pais set nombre=? , moneda =? superficie = ? , idioma = ?, nroHabitantes =? WHERE nombre = ? ",

		[actualizarUnPais.nombre, actualizarUnPais.moneda, actualizarPais.superficie,
		actualizarUnPais.idioma, actualizarunPais.nroHabitantes, idadmin], (error, res) => {

			if (error) {
				console.log(error, "error al actualizar  el pais seleccionado");
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




module.exports = pais;