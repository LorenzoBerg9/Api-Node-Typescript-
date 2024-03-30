import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface Itarefa {
  tarefa: string;
}




const queryValidation: yup.ObjectSchema<Itarefa> = yup.object().shape({
  tarefa: yup.string().required().min(3),
});






export const createBoryValidador = validation(queryValidation);
export const createValidation = validation(queryValidation);




export const create = async (req: Request<{}, {}, Itarefa>, res: Response) => {
  console.log(req.body);

  return res.send('create!');
};

