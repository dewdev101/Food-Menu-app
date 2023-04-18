import { addCategory, addMenu } from "./resolve";

// describe("addCategory", () => {
//   test("should add a category",async()=>{
//     const category = "ทอด";
//     const result = await addCategory({
//       category: category,
//     })
//     console.log("result",result);
//     expect(result.category.length>0).toBe(true);
//   })
// })

describe("addMenu", ()=>{
  test("should add menu",async()=>{
    const menu = {
      name: "แกงส้มชะอมกุ้ง",
      image:"https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
      price:150,
      categoryId: 1
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