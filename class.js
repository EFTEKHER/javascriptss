class MyClass{
    Myfun()
    {
        console.log("Hello I am from function inside class"); 
    }
    MyFun1(){
        console.log("Hello I am from function inside class1");  
    }
    MyFun2()
    {
        console.log("Hello I am from function inside class2"); 

    }
    MyFun3(namee)
    {
        console.log(namee);
    }
}


var obj=new MyClass;
obj.MyFun1();
obj.MyFun2();
obj.MyFun3("Efte");
