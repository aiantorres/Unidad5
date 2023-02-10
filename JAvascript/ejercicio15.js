class Square{
    constructor (side){
        this.perimeter = side*4;
        this.area = side*side;
        this.showSide = function(){
            console.log('Hola')
        }
    };
    
};
const pequeño = new Square(2);
console.log(pequeño)