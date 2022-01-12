export interface Mountain {
    name:string,
    height: number,
}

const mountains: Mountain[] = [
    { name: "Kilimanjaro", height:19341},
    {name: "Everest", height:29029},
    {name: "Denali", height:20310}

];

export function findNameOfTallestMountain (array:Mountain[]): string {
    let tallestMountainName: string = "";
    let tallestMountainHeight: number = 0;
    for ( let i=0;  i < array.length; i++){
        if (array[i].height > tallestMountainHeight){
            tallestMountainName = array[i].name;
            tallestMountainHeight =array[i].height;

        }
    }
    

    return tallestMountainName;
}

const tallestMountainResult: string = findNameOfTallestMountain(mountains);
console.log(tallestMountainResult)

module.exports = mountains