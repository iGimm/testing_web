// JavaScript Document
$(document).on("ready", main);

function main(){
	$("#menu a").on("click", irA);
	$(window).scroll(scrollMenu);
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-130
		}, 800);
		
		return false;
}
function scrollMenu(){
	var secciones = [$("#inicio").offset().top,$("#empresa").offset().top,$("#quien").offset().top,$("#servicios").offset().top,$("#contacto").offset().top,$("body").height()];
	
	if($(this).scrollTop()> secciones[0]-140 && $(this).scrollTop()< secciones[1]-140){
		$("#menu a").eq(0).removeClass("logo2");
	
	}else{
			$("#menu a").eq(0).addClass("logo2");
		}
	if($(this).scrollTop()> secciones[1]-140 && $(this).scrollTop()< secciones[2]-140){
		$("#menu a").eq(1).addClass("seleccionado");
	
	}else{
			$("#menu a").eq(1).removeClass("seleccionado");
		}
	if($(this).scrollTop()> secciones[2]-140 && $(this).scrollTop()< secciones[3]-140){
		$("#menu a").eq(2).addClass("seleccionado");
	
	}else{
			$("#menu a").eq(2).removeClass("seleccionado");
		}
	if($(this).scrollTop()> secciones[3]-140 && $(this).scrollTop()< secciones[4]-140){
		$("#menu a").eq(3).addClass("seleccionado");
	
	}else{
			$("#menu a").eq(3).removeClass("seleccionado");
		}
		
	if($(this).scrollTop()> secciones[4]-140 && $(this).scrollTop()< secciones[5]-140){
		$("#menu a").eq(4).addClass("seleccionado");
	
	}else{
			$("#menu a").eq(4).removeClass("seleccionado");
		}
	
	
}