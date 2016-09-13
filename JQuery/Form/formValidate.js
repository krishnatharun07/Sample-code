$(document).ready(function(){
	$("#fname").keyup(function(){
		$("#span1").text($("#fname").val());
	});
	$("#lname").keyup(function(){
		$("#span2").text($("#lname").val());
	});
	$("#sid").change(function(){
		$("#span3").text($("#sid").val());
	});
	$("#email").keyup(function(){
		$("#span4").text($("#email").val());
	});
	$("#phone").keyup(function(){
		$("#span5").text($("#phone").val());
	});
	$("#date").change(function(){
		$("#span6").text($("#date").val());
		$("#span6").css({fontSize:'15px'});
	});
	$("#majorInput").change(function(){
		$("#span7").text($("#majorInput").val());
	});
	$("#male").click(function(){
		$("#span8").text($("#male").val());
	});
	$("#female").change(function(){
		$("#span8").text($("#female").val());
	});
	
	
	$("#hobbies1").click(function(){
		var x=$("#hobbies1").val();
		if(!$("#span9").text().includes("cooking"))
		{
			$("#span9").append(x+"<br>");	
		}
		else
			$("#span9").html($("#span9").html().replace("cooking<br>",''));
		//alert(!$("#span9").text().includes("cooking"));
	});
	$("#hobbies2").click(function(){
		var x=$("#hobbies2").val();
		if(!$("#span9").text().includes("sports"))
			$("#span9").append(x+"<br>");
		else
			$("#span9").html($("#span9").html().replace("sports<br>",''));
	});
	$("#hobbies3").click(function(){
		var x=$("#hobbies3").val();
		if(!$("#span9").text().includes("music"))
			$("#span9").append(x+"<br>");
		else
			$("#span9").html($("#span9").html().replace("music<br>",''));
	});
	$("#hobbies4").click(function(){
		var x=$("#hobbies4").val();
		if(!$("#span9").text().includes("reading"))
			$("#span9").append(x+"<br>");
		else
			$("#span9").html($("#span9").html().replace("reading<br>",''));
	});
	$("#hobbies5").click(function(){
		var x=$("#hobbies5").val();
		if(!$("#span9").text().includes("writing"))
			$("#span9").append(x+"<br>");
		else
			$("#span9").html($("#span9").html().replace("writing<br>",''));
	});
	
	//Populating Country, State and City.
	
	addCountry=function(value){
		$("#selCountry").append($('<option></option>').val(value).html(value));
	}
	addState=function(value){
		$("#selState").append($('<option></option>').val(value).html(value));
	}
	addCity=function(value){
		$("#selCity").append($('<option></option>').val(value).html(value));
	}
	
	
	selectCountry=function(){
		var country=["Select","India","USA","Canada","China"];
		for(i=0;i<country.length;i++)
			addCountry(country[i]);
	}
	
	selectState=function(){
		var indianStates=["AP","AR","AS","BI","CH","GOA","GJ","HR","HP","JK","JR","KR","KL","MP","MN","MG","NL","OR","PJ","RJ","TN","TG","TR","UP","UK","WB"];
		var usaStates =["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
		var canadaStates=["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"];
		var chinaStates=["AH","BJ","CQ","FJ","GS","GD","GX","GZ","HA","HEB","HEL","HEN","HK","HUB","HUN","NM","JS","JX","JL","LN","AO","NX","QH","SAA","SD","SHG","SAX","SC","TWN","TJ","XZG","XJ","YN","ZJ"];
		//alert($("#selState").get(0));
		$("#selState").get(0).options.length=1;
		if($("#selCountry").val()=='Select')
		{
			$("#selState").css({display:'none'});
			$("#selCity").css({display:'none'});
		}
		else
		{
			$("#selState").css({display:''});
		}
		if($("#selCountry").val()=='India')
		{
			$("#selCity").css({display:'none'});
			for(var i=0;i<indianStates.length;i++)
				addState(indianStates[i]);
		}
		if($("#selCountry").val()=='USA')
		{
			$("#selCity").css({display:'none'});
			for(var i=0;i<usaStates.length;i++)
				addState(usaStates[i]);
		}
		if($("#selCountry").val()=='Canada')
		{
			$("#selCity").css({display:'none'});
			for(var i=0;i<canadaStates.length;i++)
				addState(canadaStates[i]);
		}
		if($("#selCountry").val()=='China')
		{
			$("#selCity").css({display:'none'});
			for(var i=0;i<chinaStates.length;i++)
				addState(chinaStates[i]);
		}
	}
	
	selCity=function(){
		var apCities=["Amaravathi","Guntur","Nellore","Ongole","Tirupathi","Vijayawada","Vizag"];
		var tsCities=["Adilabad","Hyderabad","Secundrabad","Warangal"];
		var txCities=["Austin","Dallas","Katy","Lubbock","San Antonio"];
		var caCities=["Los Angeles","San Diego","San Fransico","San Jose"];
		
		$("#selCity").get(0).options.length=1;
		
		if($("#selState").val()=='')
		{
			$("#selCity").css({display:'none'});
		}
		else
		{
			$("#selCity").css({display:''});
		}
		
		if($("#selState").val()=='AP')
		{
			for(var i=0;i<apCities.length;i++)
				addCity(apCities[i]);
		}
		if($("#selState").val()=='TS')
		{
			for(var i=0;i<tsCities.length;i++)
				addCity(tsCities[i]);
		}
		if($("#selState").val()=='TX')
		{
			for(var i=0;i<txCities.length;i++)
				addCity(txCities[i]);
		}
		if($("#selState").val()=='CA')
		{
			for(var i=0;i<caCities.length;i++)
				addCity(caCities[i]);
		}
		
	}
	
	$("#selCountry").change(function(){
		//alert($("#selCountry").val());
		selectState();
	});
	$("#selState").change(function(){
		selCity();
	});
});