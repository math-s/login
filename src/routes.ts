import express from 'express';

const routes = express.Router();

routes.get('/api', (request, response) => {
  return response.send("Esta é minha api :)");
});

routes.get('/api/:id', (request, response) => {
  return response.send("id " + request.params.id + "\n")
});

export default routes;
