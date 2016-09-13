function addOption(select,text,value){
	var tagObj=document.createElement("option");
	tagObj.text=text;
	tagObj.value=value;
	select.options.add(tagObj);
}

function selectCountry(){
	var country=["Country","India","USA","Canada","China"];
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
		document.getElementById("selState").style.visibility="hidden";
	}
	else
	{
		document.getElementById("selState").style.visibility="visible";
	}
	
	if(document.getElementById("selCountry").value=="India")
	{
	for(i=0;i<indianStates.length;i++)
		addOption(document.getElementById("selState"),indianStates[i],indianStates[i]);
	}
	
	if(document.getElementById("selCountry").value=="USA")
	{
		for(i=0;i<usaStates.length;i++)
		addOption(document.getElementById("selState"),usaStates[i],usaStates[i]);
		
	}
	
	if(document.getElementById("selCountry").value=="Canada")
	{
		for(i=0;i<canadaStates.length;i++)
		addOption(document.getElementById("selState"),canadaStates[i],canadaStates[i]);
		
	}
	
	if(document.getElementById("selCountry").value=="China")
	{
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
		document.getElementById("selCity").style.visibility="hidden";
	}
	else
	{
		document.getElementById("selCity").style.visibility="visible";
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