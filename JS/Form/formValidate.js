function disp(input,tag)
{
	if(tag=='fname')
		document.getElementById("span1").innerHTML=input;
	if(tag=='lname')
		document.getElementById("span2").innerHTML=input;
	if(tag=='sid')
		document.getElementById("span3").innerHTML=input;
	if(tag=='email')
		document.getElementById("span4").innerHTML=input;
	if(tag=='phone')
		document.getElementById("span5").innerHTML=input;
	if(tag=='date')
	{
		//alert(input)
		document.getElementById("span6").innerHTML=input;
		document.getElementById("span6").style.fontSize="15px";
	}
	if(tag=='majorInput')
	{
		document.getElementById("span7").innerHTML=input;
		document.getElementById("span7").style.fontSize="15px";
	}
	if(tag=='male')
		document.getElementById("span8").innerHTML=input;
	if(tag=='female')
		document.getElementById("span8").innerHTML=input;
	if(tag=='hobbies1')
	{
		if(!document.getElementById("span9").innerHTML.includes(input))
			document.getElementById("span9").innerHTML+=input+"<br>";
		else
			document.getElementById("span9").innerHTML=document.getElementById("span9").innerHTML.replace(input+'<br>','')
	}
	if(tag=='hobbies2')
	{
		if(!document.getElementById("span9").innerHTML.includes(input))
			document.getElementById("span9").innerHTML+=input+"<br>";
		else
			document.getElementById("span9").innerHTML=document.getElementById("span9").innerHTML.replace(input+'<br>','')
	}
	if(tag=='hobbies3')
	{
		if(!document.getElementById("span9").innerHTML.includes(input))
			document.getElementById("span9").innerHTML+=input+"<br>";
		else
			document.getElementById("span9").innerHTML=document.getElementById("span9").innerHTML.replace(input+'<br>','')
	}
	if(tag=='hobbies4')
	{
		if(!document.getElementById("span9").innerHTML.includes(input))
			document.getElementById("span9").innerHTML+=input+"<br>";
		else
			document.getElementById("span9").innerHTML=document.getElementById("span9").innerHTML.replace(input+'<br>','')
	}
	if(tag=='hobbies5')
	{
		if(!document.getElementById("span9").innerHTML.includes(input))
			document.getElementById("span9").innerHTML+=input+"<br>";
		else
			document.getElementById("span9").innerHTML=document.getElementById("span9").innerHTML.replace(input+'<br>','')
	}
}

//Populating Country, State and City.
function addOption(select,text,value){
	var tagObj=document.createElement("option");
	tagObj.text=text;
	tagObj.value=value;
	select.options.add(tagObj);
}

function selectCountry(){
	var country=["Select","India","USA","Canada","China"];
	addOption(document.getElementById("selCountry"),country[0],"");
	for(i=1;i<country.length;i++)
		addOption(document.getElementById("selCountry"),country[i],country[i]);
}

function selectState(){
	var indianStates=["AP","AR","AS","BI","CH","GOA","GJ","HR","HP","JK","JR","KR","KL","MP","MN","MG","NL","OR","PJ","RJ","TN","TG","TR","UP","UK","WB"];
	var usaStates =["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
	var canadaStates=["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"];
	var chinaStates=["AH","BJ","CQ","FJ","GS","GD","GX","GZ","HA","HEB","HEL","HEN","HK","HUB","HUN","NM","JS","JX","JL","LN","AO","NX","QH","SAA","SD","SHG","SAX","SC","TWN","TJ","XZG","XJ","YN","ZJ"];
	
	document.getElementById("selState").options.length=1;
	
	if(document.getElementById("selCountry").value=="")
	{
		document.getElementById("selState").style.display="none";
		document.getElementById("selCity").style.display="none";
	}
	else
	{
		document.getElementById("selState").style.display="";
	}
	
	if(document.getElementById("selCountry").value=="India")
	{
		document.getElementById("selCity").style.display="none";
		for(i=0;i<indianStates.length;i++)
		addOption(document.getElementById("selState"),indianStates[i],indianStates[i]);
	}
	
	if(document.getElementById("selCountry").value=="USA")
	{
		document.getElementById("selCity").style.display="none";
		for(i=0;i<usaStates.length;i++)
		addOption(document.getElementById("selState"),usaStates[i],usaStates[i]);
		
	}
	
	if(document.getElementById("selCountry").value=="Canada")
	{
		document.getElementById("selCity").style.display="none";
		for(i=0;i<canadaStates.length;i++)
		addOption(document.getElementById("selState"),canadaStates[i],canadaStates[i]);
		
	}
	
	if(document.getElementById("selCountry").value=="China")
	{
		document.getElementById("selCity").style.display="none";
		for(i=0;i<chinaStates.length;i++)
		addOption(document.getElementById("selState"),chinaStates[i],chinaStates[i]);
	}
}


function selectCity(){
	
	var apCities=["Amaravathi","Guntur","Nellore","Ongole","Tirupathi","Vijayawada","Vizag"];
	var tsCities=["Adilabad","Hyderabad","Secundrabad","Warangal"];
	var txCities=["Austin","Dallas","Katy","Lubbock","San Antonio"];
	var caCities=["Los Angeles","San Diego","San Fransico","San Jose"];
	
	document.getElementById("selCity").options.length=1;
	
	if(document.getElementById("selState").value=="")
	{
		document.getElementById("selCity").style.display="none";
	}
	else
	{
		document.getElementById("selCity").style.display="";
	}

	
	if(document.getElementById("selCountry").value=="India" && document.getElementById("selState").value=='AP')
	{
		for(i=0;i<apCities.length;i++)
		addOption(document.getElementById("selCity"),apCities[i],apCities[i]);
	}
	
	if(document.getElementById("selCountry").value=="India" && document.getElementById("selState").value=='TG')
	{
		for(i=0;i<tsCities.length;i++)
		addOption(document.getElementById("selCity"),tsCities[i],tsCities[i]);
	}
	
	if(document.getElementById("selCountry").value=="USA" && document.getElementById("selState").value=='CA')
	{
		for(i=0;i<caCities.length;i++)
		addOption(document.getElementById("selCity"),caCities[i],caCities[i]);
	}
	
	if(document.getElementById("selCountry").value=="USA" && document.getElementById("selState").value=='TX')
	{
		for(i=0;i<txCities.length;i++)
		addOption(document.getElementById("selCity"),txCities[i],txCities[i]);
	}
	
}