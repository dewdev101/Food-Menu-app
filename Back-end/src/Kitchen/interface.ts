import * as t from "io-ts";

export const  AddCategoryCodec = t.type({
  category:t.string
})

export interface IAddCategory extends t.TypeOf<typeof AddCategoryCodec> {}

export interface IAddMenu{
  name: string;
  image: string;
  price: number;
  categoryId: number;
}

export interface IGetCategories{};

export interface IDeleteCategories{};