import { PrismaClient } from "@prisma/client";
import {
  IAddCategory,
  IAddMenu,
  ICreateOrder,
  IDeleteCategories,
  IDeleteMenu,
  IDeleteOrderItems,
  IDeleteOrders,
  IGetCategories,
  IGetMenu,
  IGetOrderByTable,
  IGetOrders,
  IUpdateOrder,
} from "./interface";
export const prisma = new PrismaClient();

export const getMenu = async (args: IGetMenu) => {
  const result = await prisma.dewKitchenMenu.findMany({});
  return result;
};

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

export const getCategories = async (args: IGetCategories) => {
  const result = await prisma.dewKitchenCategory.findMany({});
  return result;
};

export const deleteCategories = async (args: IDeleteCategories) => {
  const result = await prisma.dewKitchenCategory.deleteMany({});
};

export const deleteMenu = async (args: IDeleteMenu) => {
  const result = await prisma.dewKitchenMenu.deleteMany({
    where: {
      id: args.id,
    },
  });
  return result;
};

export const getOrderByTableId = async (args: IGetOrderByTable) => {
  const result = await prisma.dewKitchenOrder.findMany({
    where: {
      tableId: args.tableId,
    },
    select: {
      tableId: true,
      status: true,
      id: true,
      items: {
        select: {
          id: true,
          menu: {
            select: {
              name: true,
              price: true,
              categoryName: true,
            },
          },
          menuId: true,
          quantity: true,
          totalPrice: true,
        },
      },
    },
  });
  return result;
};

export const createOrder = async (args: ICreateOrder) => {
  console.log("args", args);
  const result = await prisma.dewKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: args.items.map((r) => {
          return {
            quantity: r.quantity,
            totalPrice: r.totalPrice,
            menu: {
              connect: { id: r.menuId },
            },
          };
        }),
      },
    },
  });
  return result;
};

export const getOrders = async (args: IGetOrders) => {
  const result = await prisma.dewKitchenOrder.findMany({});
  return result;
};

export const updateOrders = async (args: IUpdateOrder) => {
  const result = await prisma.dewKitchenOrder.updateMany({
    where: {
      tableId: args.tableId,
    },
    data: {
      status: args.status,
    },
  });
  return result;
};

export const deleteOrders = async (args: IDeleteOrders) => {
  const result = await prisma.dewKitchenOrder.deleteMany({
    where: { status: args.status },
  });
  return result;
};

export const deleteOrderItems = async (args:IDeleteOrderItems)=>{
  console.log("args",args);
  const result = await prisma.dewOrderItem.deleteMany({
    where:{
      id:{
        in:args.id.map(r=>r)
      }
    }
  });
  return result;
}; 

export const deleteOrderItemsPayAlready = async(args: any) => {
  const result = await prisma.dewOrderItem.deleteMany({
    where:{orderId:null}
  });
  return result;
};