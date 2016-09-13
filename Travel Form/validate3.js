function validate(){
	var title=document.getElementById("title").value;
	var titlepattern=/^[M]+[a-z]+[.]/;
	
	var fname=document.getElementById("fname").value;
	var fnamepattern=/^[a-zA-z]+$/;
	
	var initial=document.getElementById("initial").value;
	var initialpattern=/[A-Z]/;
	
	var lname=document.getElementById("lname").value;
	var lnamepattern=/^[a-zA-z]+$/;
	
	var email=document.getElementById("email").value;
	var emailpattern=/[a-z]+[a-z0-9\.\_]+[@]+[a-z]+[.]+[a-z]/;
	
	var phno=document.getElementById('phno').value;
	var phnopattern=/[0-9]{10}/;
	
	var airline=document.getElementById('airline').value;
	
	var dest=document.getElementById('dest').value;
	var destpattern=/^[a-zA-z]+$/;
	
	var ldate=document.getElementById('ldate').value;
	
	var rdate=document.getElementById('rdate').value;
	
	var ecost=document.getElementById('ecost').value;
	var ecostpattern=/[0-9]+$/;
	
	var purpose=document.getElementById('purpose').value;

	var carrental=document.getElementById('carrental').value;
	var carrentalpattern=/[0-9]+$/;
	
	var hotel=document.getElementById('hotel').value;
	var hotelpattern=/[0-9]+$/;
	
	var meals=document.getElementById('meals').value;
	var mealspattern=/[0-9]+$/;
	
	var meals=document.getElementById('meals').value;
	var mealspattern=/[0-9]+$/;
	
	var totalestimate=document.getElementById('totalestimate').value;
	
	var cash=document.getElementById('cash').checked;
	
	var credit=document.getElementById('credit').checked;
	
	var check=document.getElementById('check').checked;
	
	
	if(title.length==0)
	{
		//alert("Title cannot be empty");
		document.getElementById("error1").innerHTML="Title cannot be empty";
		document.getElementById("title").focus();
		return false;
	}
	if(!title.match(titlepattern))
	{
		//alert("Title can only be Mr.,Mrs. or Miss.");
		document.getElementById("error1").innerHTML="Title can only be Mr.,Mrs. or Miss.";
		document.getElementById("title").focus();
		return false;
	}
	
	if(fname.length==0)
	{
		//alert("First Name cannot be empty");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="First Name cannot be empty";
		document.getElementById("fname").focus();
		return false;
	}
	if(!fname.match(fnamepattern))
	{
		//alert("First Name cannot contain numbers or special characters");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="First Name cannot contain numbers or special characters";
		document.getElementById("fname").focus();
		return false;
	}
	
	if(initial.length!=0 && !initial.match(initialpattern))
	{
		//alert("Initial can only be one uppercase character");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="Initial can only be one uppercase character";
		document.getElementById("initial").focus();
		return false;
	}
	
	if(lname.length==0)
	{
		//alert("Last Name cannot be empty");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="Last Name cannot be empty";
		document.getElementById("lname").focus();
		return false;
	}
	if(!lname.match(lnamepattern))
	{
		//alert("Last Name cannot contain numbers or special characters");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="Last Name cannot contain numbers or special characters";
		document.getElementById("lname").focus();
		return false;
	}
	
	if(email.length==0)
	{
		//alert("Email cannot be empty");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="Email cannot be empty";
		document.getElementById("email").focus();
		return false;
	}
	if(!email.match(emailpattern))
	{
		//alert("Please enter a valid email");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="Please enter a valid email";
		document.getElementById("email").focus();
		return false;
	}
	
	if(phno.length==0)
	{
		//alert("Phone number cannot be empty");document.getElementById("error1").innerHTML="";
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="Phone number cannot be empty";
		document.getElementById("phno").focus();
		return false;
	}
	if(!phno.match(phnopattern))
	{
		//alert("Please enter a valid phone number");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="Please enter a valid phone number";
		document.getElementById("phno").focus();
		return false;
	}
	
	if(airline=='')
	{
		//alert("Please select an airline");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="Please select an airline";
		document.getElementById("airline").focus();
		return false;
	}
	
	if(dest.length==0)
	{
		//alert("Destination cannot be empty");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="Destination cannot be empty";
		document.getElementById("dest").focus();
		return false;
	}
	if(!dest.match(destpattern))
	{
		//alert("Please enter a valid destination");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="Please enter a valid destination";
		document.getElementById("dest").focus();
		return false;
	}
	
	if(ldate=='')
	{
		//alert('Please select the leave date');
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="Please select the leave date";
		document.getElementById('ldate').focus();
		return false;
	}
	
	if(rdate=='')
	{
		//alert('Please select the return date');
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="Please select the return date";
		document.getElementById('rdate').focus();
		return false;
	}
	
	if(ldate!='' && rdate!='')
	{
		if(rdate<ldate)
		{
			//alert('Return date cannot be before leave date');
			document.getElementById("error1").innerHTML="";
			document.getElementById("error2").innerHTML="";
			document.getElementById("error3").innerHTML="";
			document.getElementById("error4").innerHTML="";
			document.getElementById("error5").innerHTML="";
			document.getElementById("error6").innerHTML="";
			document.getElementById("error7").innerHTML="";
			document.getElementById("error8").innerHTML="";
			document.getElementById("error9").innerHTML="";
			document.getElementById("error10").innerHTML="Return date cannot be before leave date";
			document.getElementById('rdate');
			return false;
		}
	}
	
	if(ecost.length==0)
	{
		//alert("Please enter estimated cost");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="Please enter estimated cost";
		document.getElementById('ecost').focus();
		return false;
	}
	if(!ecost.match(ecostpattern))
	{
		//alert("Estimated cost should only be numbers");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="Estimated cost should only be numbers";
		document.getElementById('ecost').focus();
		return false;
	}
	
	if(purpose=='')
	{
		//alert("Plese enter your purpose of visit");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="Plese enter your purpose of visit";
		document.getElementById('purpose').focus();
		return false;
	}
	
	if(carrental.length==0)
	{
		//alert("Please enter carrental cost");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="Please enter carrental cost";
		document.getElementById('carrental').focus();
		return false;
	}
	if(!carrental.match(carrentalpattern))
	{
		//alert("carrental cost should only be numbers");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="carrental cost should only be numbers";
		document.getElementById('carrental').focus();
		return false;
	}
	
	if(hotel.length==0)
	{
		//alert("Please enter hotel cost");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="";
		document.getElementById("error14").innerHTML="Please enter hotel cost";
		document.getElementById('hotel').focus();
		return false;
	}
	if(!hotel.match(hotelpattern))
	{
		//alert("hotel cost should only be numbers");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="";
		document.getElementById("error14").innerHTML="hotel cost should only be numbers";
		document.getElementById('hotel').focus();
		return false;
	}
	
	if(meals.length==0)
	{
		//alert("Please enter meals cost");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="";
		document.getElementById("error14").innerHTML="";
		document.getElementById("error15").innerHTML="Please enter meals cost";
		document.getElementById('meals').focus();
		return false;
	}
	if(!meals.match(mealspattern))
	{
		//alert("meals cost should only be numbers");
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="";
		document.getElementById("error14").innerHTML="";
		document.getElementById("error15").innerHTML="meals cost should only be numbers";
		document.getElementById('meals').focus();
		return false;
	}
	
	if(carrental.length!=0 && hotel.length!=0 && meals.length!=0)
	{
	document.getElementById('totalestimate').value=parseFloat(carrental)+parseFloat(hotel)+parseFloat(meals);
	}
	
	if(cash==false && credit==false && check==false)
	{
		//alert('Please select atleast one payment method');
		document.getElementById("error1").innerHTML="";
		document.getElementById("error2").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error4").innerHTML="";
		document.getElementById("error5").innerHTML="";
		document.getElementById("error6").innerHTML="";
		document.getElementById("error7").innerHTML="";
		document.getElementById("error8").innerHTML="";
		document.getElementById("error9").innerHTML="";
		document.getElementById("error10").innerHTML="";
		document.getElementById("error11").innerHTML="";
		document.getElementById("error12").innerHTML="";
		document.getElementById("error13").innerHTML="";
		document.getElementById("error14").innerHTML="";
		document.getElementById("error15").innerHTML="";
		document.getElementById("error16").innerHTML="Please select a payment method";
		document.getElementById('cash').focus;
		return false;
	}
}

