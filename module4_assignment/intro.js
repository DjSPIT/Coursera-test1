
//New Object Syntax
var company = new Object();
company.name = "Facebook"; 
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.logoColor = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
var stockName  = "Stock of company";
company[stockName] = 110;

console.log("Stock price is: " + company[stockName]);


//Object Literal
//Better way to execute this:

var facebook = { //Object
	name: "Facebook",
	ceo: { //variable inside the object
		firstName: "Mark",
		logoColor: "blue"
	}, //end of variable
	"Stock of company ": 110
}; //end of Object
console.log(facebook.ceo.firstName);


//Functions
function mult(x,y){ //nothing more but an object
	return x*y;
}
mult.version = "v.1.0.0";
console.log(mult.version);
//Function factory
function makemult(mult){ //function which creates a multiplier
	var myFunc = function(x){//function which does the operation
		return mult * x;
	};
	return myFunc;
}

var multby3 = makemult(3); //Reference to the function we made
console.log(multby3(10));
var doubleAll = makemult(2);
console.log(doubleAll(100));

//Passing functions as arguments
function doOperation(x, operation){ //this function describes the operation to be made on the variable
	return operation(x);
}
var result = doOperation(5,multby3);
console.log(result);
result = doOperation(6,doubleAll);
console.log(result);


//Object Literals
var literalCircle = {
	radius : 10,

	getArea: function(){
		var self = this;
		console.log(this);

		var increaseRadius = function(){
			self.radius = 20;

		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea());

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function(){
	return Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(20);
console.log(myCircle.getArea());



//Arrays
var array = new Array();
array[0] = "Dhananjay";
array[1] = 2;
array[2] = function(name){
	console.log("Hello " + name);
};
array[3]  = {course : "HTML CSS and JavaScript"};
console.log(array);
console.log(array[1]);
array[2]("DJ");
array[2](array[0]);
console.log(array[3].course);

//Short-hand Arrays
var names = ["Dhananjay", "Abhay", "Joshi"];
console.log(names);
names[100] = "Jim"; //Issue with JavaSscript for loop
for(var i=0;i<names.length; i++ ){
	console.log("Hello " + names[i]);
}


var names = ["Dhananjay", "Abhay", "Joshi"];
var myObj ={
	name: "Dhananjay",
	course: "HTML,CSS,JavaScript",
	platform: "Coursera",
};

for(var prop in myObj){
	console.log(prop + ":" + myObj[prop]);
}

names.greeting = "Hi!";
for (var name in names) {
	console.log("Hello " + names.greeting[name]);//greeting behaves as the array variables
}

//Closures
function makeMult(mult){

	function b(){
		console.log("The multiplier is: " + mult);
	}
	b();

	//This just returns the function
	return(
		function (x){
			return mult * x;
		}
	);
}

var doubleAll = makeMult(2); 
console.log(doubleAll(10));//Its own executable environment

//Module 4 Assignment starts here-->
