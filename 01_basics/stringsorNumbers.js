let studentName = new String("Shoaib azam");
console.log(studentName); // Shoaib azam
 let anotherName=studentName;
anotherName=("zahir azam");
console.log(anotherName);
console.log(studentName.includes('khan'));

console.log(studentName);
console.log("the length of this string is:", studentName.length);
console.log("student name will be in uppercase:", studentName.toUpperCase());
console.log(studentName.lastIndexOf('h'));
console.log(studentName.charAt(3));


//------------------using double tick colons always uses these
const firstName="shoaib";  
const lastName ="azam" ;   
var fullName=`the concatination of both is: ${firstName} ${lastName} 2.`;
console.log(fullName);

const score=40;
const score1=new Number(40);
console.log(score);
console.log(score1);



//--------------------------------
let a; 	// undefined
a=10;// number type
typeof (a);//number
b="hello";  		    			   	  //string type
c={}; 		     					       		  //object type
d=[]; 	      						         	  	    //array type
e=()=>{return "function"}; 			        		    // function type
f=true; 				            				  		// boolean type
g=null; 				             								// null value
h=/[A-Z]/gi; 	           									     // regular expression
i=(x,y)=> x+ y;          										    	 // arrow functions
j=Symbol();              									        	 // symbol data types
k=new Date();// date object
l=[23,"abc",{name:"shoaib"}];// array with different datatypes
m={"name":"<NAME>","age":45} ;// object with key and values
n=undefined;// undefined variable
o=NaN;// Not A Number
p=Infinity;// Infinity
q=-Infinity;// -infinity
r="";// empty string
s=String("");//empty string converted to string datatype
t=Boolean("")// false
u=Number("")// NaN
v=BigInt("")// 0n

//---------------Numbers:--------------
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.round(Math.random()*10));