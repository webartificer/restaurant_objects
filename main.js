

function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name || "name unknown";
    this.calories = calories || "calories unknown";
    this.vegan = vegan || "vegan unknown";
    this.glutenFree = glutenFree || "glutan free unknown";
    this.citrusFree = citrusFree || "citrus free unknown";
}


var tortillaSoup = new FoodItem("Tortilla Soup", 350, false, false, true);
var fishTacos = new FoodItem("Tacos", 400, false, false, false);
var burritoBowl = new FoodItem("Burrito Bowl", 500, false, false, true);


FoodItem.prototype.toString = function () {

    return (this.name + "\n" + this.calories + "\n" + this.vegan + "\n" + this.glutenFree + "\n" + this.citrusFree);

};


console.log(tortillaSoup.toString());
console.log(fishTacos.toString());
console.log(burritoBowl.toString());


// class_name.prototype.method_name = function (first_argument) {
//     // body...
// };
