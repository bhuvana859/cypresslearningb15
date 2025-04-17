
//operators
//1.concatination and coerstion
//2.modulous and arthmetic operstors
//3.incremental operators
//4.comparision operators
//5.logical operators
//6.asignment operators
//7.ternary operators
//8.conditional statements









//1.concatination and coerstion
//________________________________



//1.+
//2.-
//3.*
//4./
//5.%




// x = 10
// y = 20
// z= x+y
// console.log(z)


// x = 10
// y = "raju"
// z= x+y
// console.log(z)


// x = 10
// y = "10"
// z= x+y
// console.log(z)

// x = "10"
// y = "10"
// z= x+y
// console.log(z)


// x = 40
// y = 20
// z= x-y
// console.log(z)


// x = 40
// y = "20"
// z= x-y
// console.log(z)


// x = 40
// y = "chethu"
// z= x-y
// console.log(z)



//2.modulous and arthmetic operstors
//________________________________________



//1.+
//2.-
//3.*
//4./
//5.%


// value1 = 40
// value2= 20
// value3 = value1*value2
// console.log(value3)


// value1 = 40
// value2= 20
// value3 = value1+value2
// console.log(value3)


// value1 = "20"
// value2= "40"
// value3 = value1-value2
// console.log(value3)


// value1 = 40
// value2= 20
// value3 = value1/value2
// console.log(value3)


// value1 = 40
// value2= 20
// value3 = value1%value2
// console.log(value3)


// value1 = "40"
// value2= "20"
// value3 = value1-value2
// console.log(value3)



//3.incremental operators
//____________________________________


// incremental opertors will increse the values and descrease the values

// 1.++
// 2.--

//++

// num1 = 10
// num1++

// console.log(num1)


// --

// num1 = 10
// num1--

// console.log(num1)



//4.comparision operators
//________________________________


// comparision operatorrs will give true or false
//1.>
//2.<
//3.>=
//4.<=
//5.i

// and (==)and (===)

// console.log(3>7)


// console.log(3<7)


// console.log(3>=3)


// console.log(3<=3)


// console.log(3>=7)


// console.log(3<=7)


// and (==)and (===)


// console.log(2==2)


// console.log(2=="2")

// //1. == double equal will compare values only not data types

// console.log(2===2)

// console.log(2==="2")

// //2. === triple equal will compare values and data types as well



//5.logical operators
//__________________________

// true  true  true
// true false  false
//false true   true
//false true false
//false false false


//  && get
// ____________________


// true  true  true
// true false  true
//false true false
//false false false

// console.log(4<5)&& (4<5)
//           true    true   ans true



// console.log(4<5)&&(4>5)
// //          true   fals  ans true


// console.log(4>5)&&(6<7)
// //          false   true   ans  false


// console.log(6>7)&&(6>7)
// //          false  false   ans false


//  || get
//________________________

// 1   0   1
// 0   1   1
// 0   0   0
// 1   1   1 

// console.log(4<5)||(4==="4") 
//             true     false    ans true


// console.log(4>5)||(4=="4") 
//            false   true   ans false

 
// console.log(4<5)||(4=="4") 
//             true   true  ans true


// console.log(4>5)||(4==="4") 
//            false   false  ans false
  
//  in|| get if any one will be true answer will be true an any one will be false answe will be false

//not get
//_____________________

// 0  1
// 1  0
  
// console.log(3>5)
//            false  ans false 
// console.log(3<5)
//             true  ans true


//6.asignment operators
//________________________________

//1.=
//2.+=
//3.-=
//4.*=
//5./=
//6.%=

// num1=5
// num1 +=5

// console.log(num1)


// num1=5
// num1 -=5

// console.log(num1)


// num1=5
// num1 *=5

// console.log(num1)


// num1=5
// num1 /=5

// console.log(num1)


// num1=5
// num1 %=5

// console.log(num1)

//7.ternary operators
//________________________________


//syntax 
//  <condition>?<value1>:<value2>;

// stu1 = "chethan"
// stu2 = "bhuvana"

// finalstu = (3>6)? stu1 : stu2

// console.log(finalstu)



// stu1 = "chethan"
// stu2 = "bhuvana"

// finalstu = (3<6)? stu1 : stu2

//console.log(finalstu)

//in ternary operators first conditon will be true mens it will give value 1 is the answer if condition is dalse answer will be value 2 only



//8.conditional statements
//________________________________________

//1.if
//2.else
//3.else if
//4.switch

//conditional statements are

// it block of the code should be run based on the condition 
// if condtion is true it block code will be run 
// if condtion is false it block code will be not run


// conditional statement syntax

//1.if
//_______


//if (condition){

//100 lines of it block of the code

//}

//ex 1

// if (3==="3"){

//     console.log("this is js class")
// }
// here condition is false so code will be not run  ans   empty


//ex2                                                    
// if (3=="3"){

//     console.log("this is js class")
// }

// here condition is true so code will be  run     ANS this is js class


//1.if
// 2.else
//_______________________



//ex1
//  if (3==="3"){

//      console.log("this is js class")
// }
// else{

//     console.log("chethan")
//     console.log("bhuvana")

// }

// //
// //here is condition is false so code will be run ANS chethan
// //                                                   bhuvana


// if (3=="3"){

//     console.log("this is js class")
// }
// else{

//    console.log("drakshi")
//    console.log("raju")
//}

//here is condition is true so code will be run ANS is this is js class



// if (3>4){

// console.log("amp")
// }
// else{

//     console.log("bng")
    
//     console.log("Bang")
// }

//if 
//else if
//_____________________________

//ex1

// let marks = 100;

// if (marks >90 && marks<=100){

//     console.log("grade='A+'");
// }

// if(marks >80 && marks<=90)
// {
//        console.log("grade='A'");

// }
// if(marks >70 && marks<=80)
// {
//        console.log("grade='B'");
// }
// if(marks >60 && marks<=70)
// {
//        console.log("grade='C'");
// }
// if(marks >50 && marks<=60)
// {
//      console.log("grade='D'");

// }
// else{
//     (console.log("grade='fail'"));

// }


// let marks=46

// if (marks > 90 && marks <= 100) {
//     console.log("grade = 'A+'");
// }
// else if (marks > 80 && marks <= 90) {
//     console.log("grade = 'A'");
// }
// else if (marks > 70 && marks <= 80) {
//     console.log("grade = 'B'");
// }
// else if (marks > 60 && marks <= 70) {
//     console.log("grade = 'C'");
// }
// else if (marks > 50 && marks <= 60) {
//     console.log("grade = 'D'");
// }
// else {
//     console.log("grade = 'fail'");
// }


////4.switch

// let day;

// switch (new Date().getDay()){
// case 0:
// day="Sunday";
// break;
// case 1:
// day="Monday";
// break;
// case 2:
// day="Tuesday";
// break;
// case 3:
// day="Wednesday";
// break;
// case 4:
// day="Thursday";
// break;
// case 5:
// day="Friday";
// case 6:
// day="Saturday";
// default :
// day="Raju"
// }
// console.log(day);