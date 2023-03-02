import { Request, Response, NextFunction } from "express";
import Joi from 'joi';

interface registerRequest extends Request {
    body: {
      id: string;
      fullname: string;
      password: string;
      email: string;
      isAdmin: Boolean;
    };
  }

export const validator =
  (schema: Joi.ObjectSchema) => (req: registerRequest, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    next();
  };
