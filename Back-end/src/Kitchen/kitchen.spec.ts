import { addCategory, addMenu, createOrder, deleteMenu, deleteOrderItems, deleteOrders, updateOrders } from "./resolve";

describe("addCategory", () => {
  test("should add a category", async () => {
    const category = "ทอด";
    const result = await addCategory({
      category: category,
    });
    console.log("result", result);
    expect(result.category.length > 0).toBe(true);
  });
});

describe("addMenu", () => {
  test("should add menu", async () => {
    const menu = {
      name: "ยอดฟักแม้วผัดหมูสับ",
      image: "https://i.ytimg.com/vi/6yM0oog1iDQ/maxresdefault.jpg",
      price: 130,
      categoryId: 3,
    };
    const result = await addMenu({
      name: menu.name,
      image: menu.image,
      price: menu.price,
      categoryId: menu.categoryId,
    });
    console.log("result", result);
    expect(result.name.length > 0).toBe(true);
  });
});

describe("deleteMenu", () => {
  test("deleteMenu", async () => {
    const deleteId = 9;
    const result = await deleteMenu({
      id: deleteId,
    });
    console.log("result", result);
    expect(result.count > 0).toBe(true);
  });
});

describe("createOrder", () => {
  test("create order", async () => {
    const tableId = 11;
    const items = [{ quantity: 4, totalPrice: 900, menuId: 5 }];

    const result = await createOrder({
      tableId: tableId,
      items: items,
    });
    console.log("result", result);
    expect(result.tableId > 0).toBe(true);
    expect(result.id > 0).toBe(true);
    expect(result.status.length > 0).toBe(true);
  });
});

describe("updateOrder", () => {
  test("update order", async() => {
    const tableId = 10
    const status = "ชำระเงินเรียบร้อย"
    const result = await updateOrders({
      tableId: tableId,
      status: status
    })
    console.log("result",result);
    expect(result.count>0).toBe(true);
})})

describe("deleteOrders",() =>{
  test("deleteOrders",async() =>{
    const status = "ชำระเงินเรียบร้อย"
    const result = await deleteOrders({
      status:status
    })
    console.log("result",result)
    expect(result.count>0).toBe(true);
  });
})

describe("deleteOrderItems",() =>{
  test("deleteOrdersItems",async() =>{
    // const id = [...Array(51).keys()].filter(r=>r>39)
    const id = [78,79]
    const result = await deleteOrderItems({
      id:id
    })
    console.log("result",result)
    expect(result.count>0).toBe(true);
  });
})