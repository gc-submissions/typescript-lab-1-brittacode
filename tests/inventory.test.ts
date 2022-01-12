import { calcInventoryValue } from "../src/inventory";

describe("calcInventoryValue", () => {
  test("three products", () => {
    const value: number = calcInventoryValue([
      {name: "motor", price: 10.00, quantity: 10},
    {name: "sensor", price: 12.50, quantity: 4},
     {name: "LED", price: 1.00, quantity: 20}
    ]);
    expect(value).toBe(75);
  });
  test("two products", () => {
    const value: number = calcInventoryValue([
      {name: "motor", price: 10.00, quantity: 10},
      {name: "sensor", price: 12.50, quantity: 4},
    ]);
    expect(value).toBe(90);
  });
  test("one product", () => {
    const value: number = calcInventoryValue([
       {name: "LED", price: 1.00, quantity: 20} 
    ]);
    expect(value).toBe(240);
  });
  test("zero products", () => {
    const value: number = calcInventoryValue([]);
    expect(value).toBe(0);
  });
});