
//function是一个作用域的基本单元
(function(){

    var fun1 = function(s,b){
        console.log(this.mykey+s+b);
    }

    var fun2 = function(s,b){
        console.log(s+b);
    }

    if(true){
        var obj = {mykey:'value',mykey2:'dd',
    myfunc:function(){
        return 'ddd'
    }};
    }

    //call and apply 只是临时的
    // fun1.call(obj,'fuck')
    // fun1.apply(obj,[1,2])

    //bind永久指定函数附着对象
    var anofun1 = fun1.bind(obj);
    anofun1(1,2)//value12

    //partial 函数包装
    var oneArgfun1 = fun2.bind(this,2);
    oneArgfun1(3);//5

    //构造函数
    var myConstructor = function(){
        this.num = 5;
    }
    console.log('构造函数：',myConstructor.num);
    var obj1 = new myConstructor();
    obj1.num=4
    console.log("constructor:",obj1.num);

    //为对象指定原型
    //非标准方式：使用__proto__
    var myObj = {
        myString:"hello world"
    }
    var myPrototype = {
        myNumber:5,
        myFunc:function(){
            return this.myString.toUpperCase();
        }
    }
    myObj.__proto__ = myPrototype;
    console.log("非标准方式指定原型",myObj.myFunc())
    //标准方式：1 Object.create
    var myObj1 = Object.create(myPrototype);
    console.log('标准方式1指定原型：',myObj1.myNumber);
    //标准方式：2 构造函数有一个属性是prototype，但它**不是**构造函数本身的原型，是使用new创建出的新对象的原型
    myConstructor.prototype = {
        myNumber:5,
        getMyNumber:function(){
            return this.myNumber;
        }
    }
    var myObj2 = new myConstructor();
    console.log('标准方式2',myObj2.getMyNumber())


    
})()


