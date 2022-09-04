var obj1 = { name: "Person 1", age:5};
var obj2 = { age:5, name: "Person 1"};




let result = "";
for(let key in obj1){
    if(obj1[key]=== obj2[key]){
        result = "obj1 and obj2 both are SAME.";
        continue;
    }else{
        result = "obj1 and obj2 both are NOT SAME.";
        break;
    }
}

console.log("Result : ", result);