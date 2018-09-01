$(document).ready(function regi()
{
var uname=document.getElementById('uname').value;
var pass=document.getElementById('pass').value;
var repass=document.getElementById('repass').value;
var email=document.getElementById('email').value;
var gender=document.getElementById('gender').value;
var mob=document.getElementById('mob').value;
if(uname=="")
{
alert("enter the username");
$('#uname').focus();
return false;
}
if(pass == "")
{
alert("enter the password");
$('#pass').focus();
return false;
}
if(repass!=pass)
{
alert("enter the above password correctly");
$('#repass').focus();
return false;
}
if(gender == "")
{
alert("select the gender");
$('#gender').focus();
return false;
}
if(mob== "")
{
alert("Enter the Mobile Number");
$('#mob').focus();
return false;
}
if($('#check').is(checked))
{
alert("Form submission success");
}
else
{
alert("Form Submission Failure");
}
});