import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { TarefasController } from "../controllers";

const router = Router();


router.get('/', (_, res) => {
  return res.send('olá dev!');
});


router.post('/tarefas', TarefasController.createBoryValidador,
  TarefasController.createValidation,
  TarefasController.create);


export { router };