// Your code here
 class Polygon{
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
       return this.array.reduce((total,array) => total + array ,0); 
    }
    
 }

 class Triangle extends Polygon{
     get isvalid(){
        if(this.countSides === 3){
            const [side1,side2,side3] = this.array
            return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
        }
        return false;
     }
 }

 class Square extends Polygon{
    get isvalid(){
        if(this.countSides === 4){
            const [side1,side2,side3,side4] = this.array
            return side1=== side2 && side2=== side3 && side3===side4;
        }
        return false;
    }

    get area(){
        if (this.countSides === 4 ){
            const [side] = this.array
            return side * side
        }
    }
 }
 
 const polygon = new Polygon([3,4,5])
//  console.log(polygon.countsides);
// console.log(polygon.perimeter)
// console.log(polygon.isvalid)

//  const triangle = new Triangle([3,4,5])
// console.log(triangle.countsides);
// console.log(triangle.perimeter)
// console.log(triangle.isvalid)

// const square = new Square([3,4,5,6])
// console.log(square.perimeter)
// console.log(square.isvalid)
// console.log(square.area)

// const invalid = new Triangle([1,2,3])
// console.log(invalid.isvalid)

