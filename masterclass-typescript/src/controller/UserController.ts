import { Request, Response } from 'express';

const users = [
  { nome: 'Samuel', idade: 21 },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
