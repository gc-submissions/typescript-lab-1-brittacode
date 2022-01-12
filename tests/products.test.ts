import { calcAverageProductPrice } from "../src/products";

describe("calculate the average price of the three items", () => {
  test("three products", () => {
    const value: number = calcAverageProductPrice([
      {name: "iPad", price: 799},
      {name: "TV", price: 1200},
      {name: "Desk", price: 300}

    ]);
    expect(value).toBe(7);
  });
  test("two products", () => {
    const value: number = calcAverageProductPrice([
      {name: "TV", price: 1200},
      {name: "Desk", price: 300}

    ]);
    expect(value).toBe(3.5);
  });
  test("one product", () => {
    const value: number = calcAverageProductPrice([
      { name: "desk", price: 120 }
    ]);
    expect(value).toBe(120);
  });
  test("zero products", () => {
    const value: number = calcAverageProductPrice([]);
    expect(value).toBe(0);
  });
});