const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
const { sinronizarBaseDeDatosSQL, sincronizarBaseDeDatosSQL } = require("./config/sql/sqlSync");

const app = express();

config();
sincronizarBaseDeDatosSQL();

app.use(bodyParser.json());
app.use("/", require("./app/routes"));

const port = process.env.PORT;
app.listen(port, () => console.log("Servidor iniciado en el puerto: " + port));
