$(document).ready(function(){

//let's create arrays
var ElSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var EstadosUnidos = [
	{display: "Florida", value: "Florida" }];
	
var Honduras = [
	{display: "Francisco Morazán", value: "Francisco Morazán" }];

var Mexico = [
	{display: "Distrito Federal", value: "Distrito Federal" }];

//Departamentos
var SanSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var Florida = [
	{display: "Miami-Dade", value: "Miami-Dade" }];
	
var FranciscoMorazan = [
	{display: "Distrito Central", value: "Distrito Central" }];

var DistritoFederal = [
	{display: "Distrito Federal", value: "Distrito Federal" }];

//Ciudad
var SanSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var MiamiDade = [
	{display: "Miami", value: "Miami" }];
	
var DistritoCentral = [
	{display: "Tegucigalpa", value: "Tegucigalpa" }];

var DistritoFederal = [
	{display: "Ciudad de México", value: "Ciudad de México" }];


//If parent option is changed
$("#IDA_Pais").change(function() {
		var parent = $(this).val(); //get option value from parent 
		$(".elemento_hijo").remove();
		switch(parent){ //using switch compare selected option and populate child
			  case 'El Salvador':
			 	listP(ElSalvador);
				break;
			  case 'Estados Unidos':
			 	listP(EstadosUnidos);
				break;				
			  case 'Honduras':
			 	listP(Honduras);
				break;	
			  case 'México':
			 	listP(Mexico);
				break;	
			default: //default child option is blank
				$("#IDA_Departamento").html('');	 
				break;
		   }
});

//function to populate child select box
function listP(array_list)
{
	$("#IDA_Departamento").html(""); //reset child options
	$(array_list).each(function (i) { //populate child options 
		$("#IDA_Departamento").append("<option>Por favor seleccione</option>");
		$("#IDA_Departamento").append("<option value=\""+array_list[i].value+"\" class=\"elemento_hijo\">"+array_list[i].display+"</option>");
	});
}


//**************Departamento******************
//If parent option is changed
$("#IDA_Departamento").change(function() {
		var parentD = $(this).val(); //get option value from parent 
		
		switch(parentD){ //using switch compare selected option and populate child
			  case 'San Salvador':
			 	listD(SanSalvador);
				break;
			  case 'Florida':
			 	listD(Florida);
				break;				
			  case 'Francisco Morazán':
			 	listD(FranciscoMorazan);
				break;	
			  case 'Distrito Federal':
			 	listD(DistritoFederal);
				break;	
			default: //default child option is blank
				$("#IDA_Municipio").html('');	 
				break;
		   }
});

//function to populate child select box
function listD(array_listD)
{
	$("#IDA_Municipio").html(""); //reset child options
	$(array_listD).each(function (i) { //populate child options 
		$("#IDA_Municipio").append("<option>Por favor seleccione</option>");
		$("#IDA_Municipio").append("<option value=\""+array_listD[i].value+"\" class=\"elemento_hijo\">"+array_listD[i].display+"</option>");
	});
}

//**************Ciudad******************
//If parent option is changed
$("#IDA_Municipio").change(function() {
		var parentM = $(this).val(); //get option value from parent 
		
		switch(parentM){ //using switch compare selected option and populate child
			  case 'San Salvador':
			 	listM(SanSalvador);
				break;
			  case 'Miami-Dade':
			 	listM(MiamiDade);
				break;				
			  case 'Distrito Central':
			 	listM(DistritoCentral);
				break;	
			  case 'Distrito Federal':
			 	listM(DistritoFederal);
				break;	
			default: //default child option is blank
				$("#IDA_Ciudad").html('');	 
				break;
		   }
});





//function to populate child select box
function listM(array_listM)
{
	$("#IDA_Ciudad").html(""); //reset child options
	$(array_listM).each(function (i) { //populate child options 
		$("#IDA_Ciudad").append("<option>Por favor seleccione</option>");
		$("#IDA_Ciudad").append("<option value=\""+array_listM[i].value+"\" class=\"elemento_hijo\">"+array_listM[i].display+"</option>");
	});
}
});