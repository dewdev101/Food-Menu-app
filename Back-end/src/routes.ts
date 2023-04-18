import { addCategoryhandler, deleteCategoriesHandler, getCategoriesHandler } from "./Kitchen/handler";

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
];