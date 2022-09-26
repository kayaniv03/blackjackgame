console.log('hey there ');
//alert('this page can see your files of systen ') ; 
//var b = "i said hey there " ;
//var a = 99 ; 
//console.log(b);
////console.log(a ) ; 
//var genques = prompt('Why are you here ')
//document.getElementById('something written').innerHTML= genques ;
var x = 78 ; 
// increment x 
x++ ; 
console.log(x ) ;
// decrement x by 1  
x-- ; 
// print x int page 
console.log(x )  ; 
// multiply divide or remainder 
console.log(x/5 )  ; 
console.log(x*6)  ;
console.log(x%6) ; 
/* functions 
1. create the functions 

2. call the function 

*/
//create the function 
function func(name){
   
    var ans = 'hello ' + name  ; 
    console.log(ans  ) ; 
}
//var name  = prompt('what is your name ?') ; 
//func(name) ; 
//func() ; 
function sum( num1 , num2 ){
    var result = num1 + num2 ; 
    console.log(result) ; 
}
sum( '20' , '20') ; 
//String in javascript 
let fruit = 'mango,apple,cherry ,pineapple,grapes';
let morefruit = 'watermelon\npapaya' ;
console.log(morefruit)  ;
console.log(fruit.indexOf('mango')) ; 
console.log(fruit.slice(2 ,4)) ; 
console.log(fruit.replace('ang' ,'arg')) ;
console.log(fruit.toUpperCase(fruit)) ; 
console.log(fruit.toLowerCase(fruit)) ;
console.log(fruit.split(',')) ;
let fruits = ['banana ' , 'orange '  , 'cherry' , 'guava' ] ;
 fruitd = new Array('apple' ,'cherry ' , 'banana ') ;
console.log(fruits[3]) ; 
for(let i = 0 ; i < fruits.length ; i++)
{
    console.log(fruits[i]) ;
  

}
console.log( 'to string ' , fruits.toString() ) ;
console.log(fruits.join('-')) ; 
console.log(fruits.pop() , fruits) ;
console.log(fruits.push('apricot' ) , fruits ) ; 
fruits[fruits.length] = 'strawberry ' ; 
console.log(fruits) ; 
fruits.unshift('blackberry') ;// add first element in an array 
console.log(fruits ) ; 
let vegetables = ['potato' , 'green chili ' , 'tomato ' , 'brinjal '] ;
let allgroceries = fruits.concat(vegetables) ; 
console.log(allgroceries) ; 
console.log(allgroceries.reverse()) ;
let numbers = [ 1 , 9 , 5 , 8 , 3 , 56 , 765 , 89 ]  ; 
console.log(numbers.sort(function(a , b ){return a-b })) ; // return in ascending order ; 
console.log(numbers.sort(function(a , b ){return b - a })) ; // return in descending  order ; 
let emptyarray = new Array() ; 

for(let i = 0 ; i < 11 ; i++ )
{
    emptyarray.push(i ) ; 
}
console.log(emptyarray) ; 
let stranger = {first : 'Devon' ,
                last : 'Larrat ' ,
                age : 34  ,
                height : 167 ,
            strangerinfo(){
                return  this.first + '\n ' +  this.last +'\n '  +  this.age  + '\n ' + this.height  ; 
            }
             } ; 
console.log(stranger.first) ; 
console.log(stranger.last) ; 
stranger.age-- ; 
console.log(stranger.age ) ; 
console.log(stranger.strangerinfo()) ;







