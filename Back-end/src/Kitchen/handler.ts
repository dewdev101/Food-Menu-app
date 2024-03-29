import { Request, Response } from "express";
import {
  addCategory,
  createOrder,
  deleteCategories,
  deleteMenu,
  deleteOrderItems,
  deleteOrders,
  getCategories,
  getMenu,
  getOrderByTableId,
  getOrders,
  updateOrders,
} from "./resolve";
import {
  AddCategoryCodec,
  DeleteMenuCodec,
  ICreateOrderCodec,
  IDeleteOrderItemsCodec,
  IGetOrderByTableIdCOdec,
  IUpdateOrderCodec,
} from "./interface";

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = await getMenu(body);
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addCategoryhandler = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (AddCategoryCodec.decode(body)._tag === "Right") {
      const result = await addCategory(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate addCategory");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = await getCategories(body);
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = await deleteCategories(body);
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteMenuHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (DeleteMenuCodec.decode(body)._tag === "Right") {
      const result = await deleteMenu(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate deleteMenu");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getOrderByTableIdHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (IGetOrderByTableIdCOdec.decode(body)._tag === "Right") {
      const result = await getOrderByTableId(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate getOrderByTableIdHandler");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createOrderHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (ICreateOrderCodec.decode(body)._tag === "Right") {
      const result = await createOrder(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate createOrderHandler");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getOrderHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = await getOrders(body);
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateOrdersHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (IUpdateOrderCodec.decode(body)._tag === "Right") {
      const result = await updateOrders(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate updateOrdersHandler");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteOrdersHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (IUpdateOrderCodec.decode(body)._tag === "Right") {
      const result = await deleteOrders(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate deleteOrdersHandler");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteOrderItemsHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    if (IDeleteOrderItemsCodec.decode(body)._tag === "Right") {
      const result = await deleteOrderItems(body);
      return res.status(200).json(result);
    } else {
      res.status(500).send("Error to validate deleteOrderItemsHandler");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
