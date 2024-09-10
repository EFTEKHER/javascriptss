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
    hello3(params)
    {
        console.log("Hello 3 Functions");
    }
    hello1(params)
    {
        console.log("cele Hello 1 Functions");

    }
}

var obj=new child();
obj.hello1();
obj.hello2();