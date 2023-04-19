import { addCategoryhandler, deleteCategoriesHandler, deleteMenuHandler, getCategoriesHandler, getMenuHandler } from "./Kitchen/handler";

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

];