import * as t from "io-ts";

export interface IGetMenu{};

export const  AddCategoryCodec = t.type({
  category:t.string
})

export interface IAddCategory extends t.TypeOf<typeof AddCategoryCodec> {}

export const IAddMenuCodec=t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryId: t.number
})
export interface IAddMenu extends t.TypeOf<typeof IAddMenuCodec>{}

export interface IGetCategories{};

export interface IDeleteCategories{};

export const DeleteMenuCodec = t.type({
  id:t.number
});
export interface IDeleteMenu extends t.TypeOf<typeof DeleteMenuCodec>{}