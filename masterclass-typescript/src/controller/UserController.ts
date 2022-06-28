import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { nome: 'Samuel', idade: 21 },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create (req: Request, res:Response){
    const emailService = new EmailService();

    emailService.sendMail({to:{name: 'Samuel Alves', email: 'samuel@gmail.com'},message: {subject:'Bem-vindo ao sistema', body:'Seja bem-vindo'}})
    
    res.send()
  }
};
