class MyClass {
    fn = () => {
        // 在类中定义的箭头函数，this永远都指向实例对象
        console.log(this);
    }
    fn2(){
        const fn3 = () => {
            //这个是在方法中定义的，不是在类中定义的
            console.log(this,`===============`);
        }
        fn3()
    }
}

let a = new MyClass()
// a.fn()  //MyClass { fn: [Function: fn] }
// a.fn2()  //MyClass { fn: [Function: fn] }
let c = a.fn
c() //MyClass { fn: [Function: fn] } 因为类中的方法是在严格模式下运行的
let b = a.fn2
b() //undefined 
