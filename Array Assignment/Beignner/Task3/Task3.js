var Num2 = [4, 5, 2, 7, 8, 9];
var Remove_element = 8;
var indextoremove = Num2.indexOf(Remove_element);
if (indextoremove !== -1) {
    Num2.splice(indextoremove, 1);
}
console.log("Array after delete one element", Num2);
