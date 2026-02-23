import express from "express";
import router from "./routes/router.js";

const server = express();
server.use(express.json());
server.use(router);

const PORT = 3001;
server.use("/api", router);

server.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
