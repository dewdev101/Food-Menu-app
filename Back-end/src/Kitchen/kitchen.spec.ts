import { addCategory, addMenu, deleteMenu } from "./resolve";

describe("addCategory", () => {
  test("should add a category",async()=>{
    const category = "ทอด";
    const result = await addCategory({
      category: category,
    })
    console.log("result",result);
    expect(result.category.length>0).toBe(true);
  })
})

describe("addMenu", ()=>{
  test("should add menu",async()=>{
    const menu = {
      name: "ยอดฟักแม้วผัดหมูสับ",
      image:"https://i.ytimg.com/vi/6yM0oog1iDQ/maxresdefault.jpg",
      price:130,
      categoryId: 3
    };
    const result = await addMenu({
      name: menu.name,
      image: menu.image,
      price: menu.price,
      categoryId: menu.categoryId
    })
    console.log("result",result);
    expect(result.name.length>0).toBe(true);
  });
});

describe("deleteMenu",()=>{
  test("deleteMenu",async()=>{
    const deleteId = 9 
    const result = await deleteMenu({
      id: deleteId
    })
    console.log("result",result);
    expect(result.count>0).toBe(true)
  });
});