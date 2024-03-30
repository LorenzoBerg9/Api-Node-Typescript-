import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from 'yup';


type TValidation = (scheme: Schema<any>) => RequestHandler;
export const validation: TValidation = (scheme) => async (req, res, next) => {
  try {
    await scheme.validate(req.body, { abortEarly: false });
    return next(); /*exuta a segunda router da fila de router*/
  } catch (err) {
    const yupError = err as ValidationError;
    const errors: Record<string, string> = {};/*const para falidacao de varios erros*/

    yupError.inner.forEach(error => {  /*agrupa as mensagens de erro e joga para dentro do validation erro*/
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });
    return res.status(StatusCodes.BAD_REQUEST).json({ errors }); /*retorna os erros*/
  }
};