const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

module.exports = app;
