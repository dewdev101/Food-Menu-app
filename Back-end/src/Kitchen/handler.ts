import { Request, Response } from "express";
import { addCategory, deleteCategories, getCategories } from "./resolve";

export const addCategoryhandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  const result = await addCategory(body);
  return res.status(200).json(result);
};
export const getCategoriesHandler = async(req: Request, res: Response)=>{
  const body = req?.body;
  const result = await getCategories(body);
  return res.status(200).json(result);
};
export const deleteCategoriesHandler = async(req: Request, res: Response)=>{
  const body = req?.body;
  const result = await deleteCategories(body);
  return res.status(200).json(result);
};

