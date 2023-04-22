import {
  addCategoryhandler,
  createOrderHandler,
  deleteCategoriesHandler,
  deleteMenuHandler,
  deleteOrdersHandler,
  getCategoriesHandler,
  getMenuHandler,
  getOrderByTableIdHandler,
  getOrderHandler,
  updateOrdersHandler,
} from "./Kitchen/handler";

export const AppRoutes = [
  {
    method: "post",
    path: "/myKitchen/addCategory",
    action: addCategoryhandler,
  },
  {
    method: "post",
    path: "/myKitchen/getCategories",
    action: getCategoriesHandler,
  },
  {
    method: "post",
    path: "/myKitchen/deleteCategories",
    action: deleteCategoriesHandler,
  },
  {
    method: "post",
    path: "/myKitchen/deleteMenu",
    action: deleteMenuHandler,
  },
  {
    method: "post",
    path: "/myKitchen/getMenu",
    action: getMenuHandler,
  },
  {
    method: "post",
    path: "/myKitchen/getOrderByTableId",
    action: getOrderByTableIdHandler,
  },
  {
    method: "post",
    path: "/myKitchen/createOrderHandler",
    action: createOrderHandler,
  },
  {
    method: "post",
    path: "/myKitchen/getOrders",
    action: getOrderHandler,
  },
  {
    method: "post",
    path: "/myKitchen/updateOrdersHandler",
    action: updateOrdersHandler,
  },
  {
    method: "post",
    path: "/myKitchen/deleteOrdersHandler",
    action: deleteOrdersHandler,
  },
];
