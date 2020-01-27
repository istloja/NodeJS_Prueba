module.exports = app=>{
	
	const pais = require("./Controller/controlador.js");
    const provincia = require("./Controller/controlador.js");

    app.get("/obtenerPais",pais.getAll);
    app.get("/obtenerProvincia",provincia.getAll);

    app.post("/crearNuevoPais", pais.crearNuevoPais);
    app.post("/crearNuevaProvincia", provincia.crearNuevaProvincia);


    app.post("/eliminarUnPais", pais.eliminarUnPais);
    app.post("/eliminarUnaProvincia", provincia.eliminarUnaProvincia);


    app.post("/actualizarUnPais",pais.editarPais);
    app.post("/actualizarUnaProvincia",provincia.editarProvincia);

	
}