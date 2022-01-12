import { Product } from "./products";


export interface InventoryItem {
    name: string,
    price: number,
    quantity: number,


}

const inventory: InventoryItem[] = [
     {name: "motor", price: 10.00, quantity: 10},
    {name: "sensor", price: 12.50, quantity: 4},
     {name: "LED", price: 1.00, quantity: 20}
]

export function  calcInventoryValue (array: InventoryItem[]) : number  {
    let total = 0;
    if (array){
         

    }
    return total 

}


console.log(calcInventoryValue(inventory))

module.exports = inventory
