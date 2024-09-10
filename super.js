class parent{
    hello1(params)
    {
        console.log("Hello 1 Functions");

    }
    hello2(params)
    {
        console.log("Hello 2 Functions");
    }
}

class child extends parent{
   demo()
   {
    super.hello1();
    super.hello2();
   }
}

var obj=new child();
obj.demo();
