import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface Itarefa {
  tarefa: string;
}


const bodyValidarion: yup.ObjectSchema<Itarefa> = yup.object().shape({
  tarefa: yup.string().required().min(3),
});



export const create = async (req: Request<{}, {}, Itarefa>, res: Response) => {
  let validateData: Itarefa | undefined = undefined;

  try {
    await bodyValidarion.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      }
    });
  }

  console.log(validateData);

  return res.send('create!');
};

