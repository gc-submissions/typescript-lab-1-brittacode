export interface Product {
    name: string;
    price: number;

}

const products: Product [] = [
   
{name: "iPad", price: 799},
{name: "TV", price: 1200},
{name: "Desk", price: 300}

 
]

export function calcAverageProductPrice (array:Product[])  {
    let total: number = 0;
    for (let i = 0; i < products.length; i++) {
        
        
    }
    return total
} 

calcAverageProductPrice(products);
module.exports = products