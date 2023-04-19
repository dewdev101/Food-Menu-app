import { PrismaClient } from "@prisma/client";
import { IAddCategory, IAddMenu, IDeleteCategories, IDeleteMenu, IGetCategories } from "./interface";
export const prisma = new PrismaClient();

export const addCategory = async (args: IAddCategory) => {
  const result = await prisma.dewKitchenCategory.create({
    data: {
      category: args.category,
    },
  });
  return result;
};

export const addMenu = async (args: IAddMenu) => {
  const result = await prisma.dewKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      categoryKey: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });
  return result;
};

export const getCategories = async(args:IGetCategories)=>{
  const result = await prisma.dewKitchenCategory.findMany({});
  return result;
};

export const deleteCategories = async(args:IDeleteCategories)=>{
  const result = await prisma.dewKitchenCategory.deleteMany({});
};

export const deleteMenu = async(args:IDeleteMenu)=>{
  const result = await prisma.dewKitchenMenu.deleteMany({
    where: {
      id: args.id
    },
  });
  return result;
};