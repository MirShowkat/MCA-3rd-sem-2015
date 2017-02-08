 /*function myFun(a,b){
	 alert("hello"+"sum"+(a+b));
	 
	 
 }
 var f=myFun;
 f(2,3);*/
 
 //var fun= new Function("a","b","alert('sum'+(a+b));");
 //fun(2,3);
 
 
 //(function(x,y){ alert("SUM "+(x+y));})(10,20);

/*var fun;
function f()
 {
	 var b=10;
	 alert("Inside f");
	 fun= function sum()
	 {
		 var a=20;
		 alert("Inside sum");
		 alert(b);
		 
	 } 	 
	 alert("Inside f");
	 return fun;
 }
 var newFun=f();
 newFun();
 */
 /*var fun =function (name){
	 return "Name ="+name;
	 
 }
 
 
 var fun = (a,b) => "Sum= "+(a+b);

 alert(fun(10,20));*/
 
 /*function fun(arg1,arg2,callback){
	 
	 alert("sum = "+(arg1+arg2));
	 callback(arg1,arg2);
	 
	 
 }
 fun(10,20,function(a,b){
	 alert("Callback Sum = "+(a+b));
	 
 });
 */
 
 
 
 
 
 
 //alert(b);
/*var ele = document.querySelector("h1 a");
alert(ele);
ele.style.color="RED";*/
var newLi= document.createElement("li");

var newEle= document.createElement("a");
newEle.textContent="Contact";
newLi.appendChild(newEle);

var parentEle= document.querySelector("nav ul");
//alert(parentEle);

parentEle.appendChild(newLi);

/*document.querySelector("Header .button").onclick=function(){
	alert("Hello");
}*/
function buttonClick(){
	alert("Hello");
}


var but= document.querySelector("Header .button");
but.addEventListener("click",buttonClick);


$(function(){
$("#userName").blur(function(){
	var userName = document.querySelector("#userName");
	var errorLabel=document.querySelector("#userNameErrorLabel");
	if(userName.value.match(/[^a-zA-Z0-9_]/)){
		errorLabel.textContent="Enter letters and numbers only(including _)";
			errorLabel.style.display="block";
			userName.parentElement.style.border="solid 1px red";
	}
	else{
		errorLabel.textContent="";
			errorLabel.style.display="none";
		userName.parentElement.style.border="solid 1px #ccc";
	}
	//alert(userName.value);
	
});

$("#email").blur(function(){
	var email = document.querySelector("#email");
	var errorLabel=document.querySelector("#emailErrorLabel");
if(!email.value.match(/[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)){
		errorLabel.textContent="Enter valid email address)";
			errorLabel.style.display="block";
			email.parentElement.style.border="solid 1px red";
	}
	else{
		errorLabel.textContent="";
			errorLabel.style.display="none";
		email.parentElement.style.border="solid 1px #ccc";
	}
	//alert(userName.value);
	
});



$("#password").blur(function(){
	var pass = document.querySelector("#password");
	var errorLabel=document.querySelector("#passwordErrorLabel");
	if(pass.value.length<6){
		errorLabel.textContent="password must be atleast 6 character long";
			errorLabel.style.display="block";
			pass.parentElement.style.border="solid 1px red";
		
		
	}
 else if(!pass.value.match(/[a-zA-Z]+[^a-zA-Z0-9]+[a-zA-Z0-9]*/)){
		errorLabel.textContent="password must contain atleast one special char and must start with a character)";
			errorLabel.style.display="block";
			pass.parentElement.style.border="solid 1px red";
	}
	else{
		errorLabel.textContent="";
			errorLabel.style.display="none";
		pass.parentElement.style.border="solid 1px #ccc";
	}
	//alert(userName.value);
	
});



});












 
