// JavaScript Document
var tabInicial = 1;
$(document).on("ready", main);

function main(){
	$(".tabs a").on("click", abrirTab);
	$(".tabContent").eq(tabInicial-1).fadeIn();
	$(".tabs a").eq(tabInicial-1).addClass("tabActual");
}
function abrirTab(){
	$(".tabContent").hide();
	$(".tabs a").removeClass("tabActual");
	$(".tabContent").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	return false;
}

var tabInicial2 = 1
$(document).on("ready", main2);

function main2(){
	$(".tabs2 a").on("click", abrirTab2);
	$(".tabContent2").eq(tabInicial2-1).fadeIn();
	$(".tabs2 a").eq(tabInicial2-1).addClass("tabActual");
}
function abrirTab2(){
	$(".tabContent2").hide();
	$(".tabs2 a").removeClass("tabActual");
	$(".tabContent2").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	return false;
}
var tabInicial3 = 1
$(document).on("ready", main3);

function main3(){
	$(".tabs3 a").on("click", abrirTab3);
	$(".tabContent3").eq(tabInicial3-1).fadeIn();
	$(".tabs3 a").eq(tabInicial3-1).addClass("tabActual");
}
function abrirTab3(){
	$(".tabContent3").hide();
	$(".tabs3 a").removeClass("tabActual");
	$(".tabContent3").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	return false;
}

