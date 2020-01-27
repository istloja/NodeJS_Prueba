const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


require("./routes.js")(app);

app.listen(4321,()=>{

	console.log("Servidor iniciado");
});
