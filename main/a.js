$(document).ready(function login()
{
var a=3;
var name="montfort";
var opass="montfort@123"
var uname=document.getElementById('uname').value;
var pass=document.getElementById('pass').value;
if(uname=="")
{
alert("enter the username")
}
if(pass == "")
{
alert("enter the password")
}
if((uname==name)&&(pass==opass))
{
alert("Login success")
window.load("log.html");
}
else
{
alert("Login failure")
}
a--;
if(a==0)
{
document.getElementById('uname').innerHTML="false";
document.getElementById('pass').innerHTML="false";
document.getElementById('btn').innerHTML="false";
}
});