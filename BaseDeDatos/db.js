const mysql= require("mysql");//importar la configuracion
const Config= require("../Config/db.config.js");
const conexion = mysql.createConnection({
	host:Config.HOST,
	user: Config.USER,
	password: Config.PASSWORD,
	database: Config.BD
});
conexion.connect(error=>{
  if (error) throw error;
  console.log("conexion exitosa");
});
module.exports = conexion;