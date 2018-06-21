//1.基本类型声明，注意sentence后也要加类型
let names:string='typescript';
let version:number=2.7;
let sentence:string=`hello,I'm ${names},now my version is ${version}`;
console.log(sentence)
//2.数组声明
let arr1:number[]=[1,2,3];
let arr2:Array<number>=[4,5,6];
console.log(arr1+"----"+arr2);
//3.元组的声明，元组类型允许表示一个已知元素数量和类型的数组，各语速的类型不必相同
let x:[string,number]=['typescript',1];//
/*
   let let x:[string,number]=[1,'typescript'];
   类型和元祖元素不对应是错误的
*/
/*
当访问一个越界的元素，会使用联合类型替代
*/
x[3]="hello";
x[4]=2.7;
console.log(x);
console.log("---------")
//4.枚举。enum类型是对JavaScript标准数据类型的一个补充
enum Color{ Red,Green,Blue};
/*
    枚举型既可以读取内容也可以读取下标
*/
let c:Color=Color.Green;
console.log(c);
enum Color1{Orange=1,White=2,Blue=4};
let colorName:string=Color1[2];
console.log(colorName)
//5.Any
let list:any[]=[1,true,'free'];
list[1]=100;
console.log(list);
//Void 表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回类型是void
function warnUser():void{
    console.log("this function is back void")
}
warnUser();
/*
  声明一个void类型的变量没有什么大用，因为你只能为他赋予undefined和Null
*/
let unusable:void=undefined;
console.log(unusable)
//6.undefined,null
let u:undefined=undefined;
let n:null=null;
//7.Never 主要用于抛出异常的函数
function fail(message){
    throw new Error(message)
}
//8.类型断言  相当于其他语言里的类型转换，但不进行特殊的数据检查和解构，
//没有运行时的影响，只是在编译阶段起作用。typescript会假设你已经进行了
//必要的检查

let someValue:any="this is a string";
let strLength:number=(<string>someValue).length;
//let strLength:number=(someValue as string).length