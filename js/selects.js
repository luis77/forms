$(document).ready(function(){

//let's create arrays
var P_ElSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var P_EstadosUnidos = [
	{display: "Florida", value: "Florida" }];
	
var P_Honduras = [
	{display: "Francisco Morazán", value: "Francisco Morazán" }];

var P_Mexico = [
	{display: "Distrito Federal", value: "Distrito Federal" }];

//Departamentos
var D_SanSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var D_Florida = [
	{display: "Miami-Dade", value: "Miami-Dade" }];
	
var D_FranciscoMorazan = [
	{display: "Distrito Central", value: "Distrito Central" }];

var D_DistritoFederal = [
	{display: "Distrito Federal", value: "Distrito Federal" }];

//Ciudad
var M_SanSalvador = [
	{display: "San Salvador", value: "San Salvador" }];
	
var M_MiamiDade = [
	{display: "Miami", value: "Miami" }];
	
var M_DistritoCentral = [
	{display: "Tegucigalpa", value: "Tegucigalpa" }];

var M_DistritoFederal = [
	{display: "Ciudad de México", value: "Ciudad de México" }];


//If parent option is changed
$("#IDA_Pais, #DD_Pais").change(function() {
	var campo_select = event.target.id; //get option value from parent 

	var parent = $(this).val(); //get option value from parent 
	switch(parent){ //using switch compare selected option and populate child
	  case 'El Salvador':
	 	listP(P_ElSalvador, campo_select);
		break;
	  case 'Estados Unidos':
	 	listP(P_EstadosUnidos, campo_select);
		break;				
	  case 'Honduras':
	 	listP(P_Honduras, campo_select);
		break;	
	  case 'México':
	 	listP(P_Mexico, campo_select);
		break;	
	default: //default child option is blank 
		if (campo_select == "IDA_Pais"){
			$("#IDA_Departamento").html('');	 
		}else if (campo_select == "DD_Pais"){
			$("#DD_Departamento").html('');	 
		}
		break;
	}
});

//function to populate child select box
function listP(array_list, campo_select)
{
	if (campo_select == "IDA_Pais"){
		$(".IDA_elemento_hijo").remove();
		$("#IDA_Departamento").html(""); //reset child options
		$(array_list).each(function (i) { //populate child options 
			$("#IDA_Departamento").append("<option>Por favor seleccione</option>");
			$("#IDA_Departamento").append("<option value=\""+array_list[i].value+"\" class=\"IDA_elemento_hijo\">"+array_list[i].display+"</option>");
		});
	}else if (campo_select == "DD_Pais"){
		$(".DD_elemento_hijo").remove();
		$("#DD_Departamento").html(""); //reset child options
		$(array_list).each(function (i) { //populate child options 
			$("#DD_Departamento").append("<option>Por favor seleccione</option>");
			$("#DD_Departamento").append("<option value=\""+array_list[i].value+"\" class=\"DD_elemento_hijo\">"+array_list[i].display+"</option>");
		});
	}
}
//**************Departamento******************
//If parent option is changed
$("#IDA_Departamento, #DD_Departamento").change(function() {
	var parentD = $(this).val(); //get option value from parent 
	var campo_select = event.target.id; //get option value from parent 
	
	switch(parentD){ //using switch compare selected option and populate child
	  case 'San Salvador':
	 	listD(D_SanSalvador, campo_select);
		break;
	  case 'Florida':
	 	listD(D_Florida, campo_select);
		break;				
	  case 'Francisco Morazán':
	 	listD(D_FranciscoMorazan, campo_select);
		break;	
	  case 'Distrito Federal':
	 	listD(D_DistritoFederal, campo_select);
		break;	
	default: //default child option is blank
		if (campo_select == "IDA_Departamento"){
			$("#IDA_Municipio").html('');	 
		}else if (campo_select == "DD_Departamento"){
			$("#DD_Municipio").html('');	 
		}
		break;
	}
});

//function to populate child select box
function listD(array_listD, campo_select)
{
	if (campo_select == "IDA_Departamento"){
		$("#IDA_Municipio").html(""); //reset child options
		$(array_listD).each(function (i) { //populate child options 
			$("#IDA_Municipio").append("<option>Por favor seleccione</option>");
			$("#IDA_Municipio").append("<option value=\""+array_listD[i].value+"\" class=\"IDA_elemento_hijo\">"+array_listD[i].display+"</option>");
		});
	}else if (campo_select == "DD_Departamento"){
		$("#DD_Municipio").html(""); //reset child options
		$(array_listD).each(function (i) { //populate child options 
			$("#DD_Municipio").append("<option>Por favor seleccione</option>");
			$("#DD_Municipio").append("<option value=\""+array_listD[i].value+"\" class=\"DD_elemento_hijo\">"+array_listD[i].display+"</option>");
		});
	}
}

//**************Ciudad******************
//If parent option is changed
$("#IDA_Municipio, #DD_Municipio").change(function() {
	var parentM = $(this).val(); //get option value from parent 
	var campo_select = event.target.id; //get option value from parent 

	switch(parentM){ //using switch compare selected option and populate child
	  case 'San Salvador':
	 	listM(M_SanSalvador, campo_select);
		break;
	  case 'Miami-Dade':
	 	listM(M_MiamiDade, campo_select);
		break;				
	  case 'Distrito Central':
	 	listM(M_DistritoCentral, campo_select);
		break;	
	  case 'Distrito Federal':
	 	listM(M_DistritoFederal, campo_select);
		break;	
	default: //default child option is blank
		if (campo_select == "IDA_Municipio"){
			$("#IDA_Ciudad").html('');	 
		}else if (campo_select == "DD_Municipio"){
			$("#DD_Ciudad").html('');	 
		}
		break;
	}
});





//function to populate child select box
function listM(array_listM, campo_select)
{
	if (campo_select == "IDA_Municipio"){
		$("#IDA_Ciudad").html(""); //reset child options
		$(array_listM).each(function (i) { //populate child options 
			$("#IDA_Ciudad").append("<option>Por favor seleccione</option>");
			$("#IDA_Ciudad").append("<option value=\""+array_listM[i].value+"\" class=\"IDA_elemento_hijo\">"+array_listM[i].display+"</option>");
		});
	}else if (campo_select == "DD_Municipio"){
		$("#DD_Ciudad").html(""); //reset child options
		$(array_listM).each(function (i) { //populate child options 
			$("#DD_Ciudad").append("<option>Por favor seleccione</option>");
			$("#DD_Ciudad").append("<option value=\""+array_listM[i].value+"\" class=\"DD_elemento_hijo\">"+array_listM[i].display+"</option>");
		});
	}	

}
});