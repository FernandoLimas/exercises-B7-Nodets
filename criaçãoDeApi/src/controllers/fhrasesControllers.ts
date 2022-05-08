import { Request, Response } from "express";
import { where } from "sequelize/types";
import { Fhrases } from "../models/fhrases";

export const getFhrases = async (req: Request, res: Response) => {
  const getAll = await Fhrases.findAll();
  res.status(200);
  res.json(getAll);
}

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getById = await Fhrases.findByPk(id);
  res.status(200);
  res.json(getById);
}

export const createFhrases = async (req: Request, res: Response) => {
  const { author, texto } = req.body;

  await Fhrases.create({author,texto});
  res.status(201);
  res.json('Creates successfull');
}

export const updadteFhrases = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { author, texto } = req.body;

  const getId = await Fhrases.findByPk(id); // para criar condição se o id não existir.

  if(!getId) return res.status(400).json('Author não encontrado.');

  await Fhrases.update({author, texto}, {where: {id}});

  res.status(200);
  res.json('Update successfull');
}

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Fhrases.destroy({where: {id}});

  res.status(200);
  res.json('Delete successfull');
}