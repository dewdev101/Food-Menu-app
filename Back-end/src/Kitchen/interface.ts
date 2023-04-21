import * as t from "io-ts";

export interface IGetMenu {}
export interface IGetCategories {}
export interface IDeleteCategories {}
export interface IGetOrders{}

export const AddCategoryCodec = t.type({
  category: t.string,
});
export interface IAddCategory extends t.TypeOf<typeof AddCategoryCodec> {}

export const IAddMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryId: t.number,
});
export interface IAddMenu extends t.TypeOf<typeof IAddMenuCodec> {}

export const DeleteMenuCodec = t.type({
  id: t.number,
});
export interface IDeleteMenu extends t.TypeOf<typeof DeleteMenuCodec> {}

export const IGetOrderByTableIdCOdec = t.type({
  tableId: t.number,
});
export interface IGetOrderByTable
  extends t.TypeOf<typeof IGetOrderByTableIdCOdec> {}

export const ICreateOrderCodec = t.type({
  tableId: t.number,
  items: t.array(
    t.type({
      quantity: t.number,
      totalPrice: t.number,
      menuId: t.number,
    })
  ),
});
export interface ICreateOrder extends t.TypeOf<typeof ICreateOrderCodec> {}

