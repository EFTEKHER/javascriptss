var myMap= new Map();

myMap.set("key1","Bangladesh");
myMap.set("key2","India");
myMap.set("key3","Pakistan");
myMap.set("key4","Sri Lanka");
myMap.set("key5", "Nepal");
myMap.set("key6", "Bhutan");
myMap.set("key7", "Maldives");

// console.log(myMap.values());
// console.log(myMap.keys());

for(let key of myMap.keys())
{
    console.log(key);
}
for(let value of myMap.values())
{
    console.log(value);
}
myMap.delete("key1");
console.log(myMap.size);
// myMap.clear();
if(myMap.has("key2"))
{
    console.log("Yes");
}
else{
    console.log("No")
}