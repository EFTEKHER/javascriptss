class MyClass{
    hello()
    {
        console.log("Hello from MyClass");
    }
}
class MyClass1{
  static  hello()
    {
        console.log("Hello from MyClass1");
    }
}
var obj=new MyClass();
obj.hello();

// var obj1=new MyClass1();
// obj1.hello();

MyClass1.hello();