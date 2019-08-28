$(document).ready(function () {

	var altura = $('.header').offset().top;

	$(window).on('scroll', function(){
		if($(window).scrollTop() >= altura){
			$('.header').addClass('header-sombra');
		}else{
			$('.header').removeClass('header-sombra');
		}
	})



// comienzo para la funcion del slider ===========================================

	var imgItems = $('.cont-image li').length; //numero de slider
	var imgPos = 1;

	//agregando la paginacion
	for(i = 1; i <= imgItems; i++){
		$('.cont-slider-2').append('<div class="pagination"></div>');
	}

	$('.cont-image li').hide();
	$('.cont-image li:first').show();


	//FUNCIONES
	$('.cont-slider-2 div').click(pagination);
	$('.flecha-2').click(nextSlider);
	$('.flecha-1').click(prevSlider);
	
	//EJECUTANDO FUNCIONES 
	function pagination(){
		var paginationPos = $(this).index() + 1;
		console.log(paginationPos);
	
		$('.cont-image li').hide();
		$('.cont-image li:nth-child('+ paginationPos +')').fadeIn();

		//dandole estilo a la paginaccion seleccionada
		$('.cont-slider-2 div').css({'background-color': '#2B2B2B'});
		$(this).css({'background-color': "#8ECC6C"});
	}

	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}

		$('.cont-slider-2 div').css({'background-color': '#2B2B2B'});
		$('.cont-slider-2 div:nth-child('+ imgPos +')').css({'background-color': "#8ECC6C"});

		$('.cont-image li').hide();
		$('.cont-image li:nth-child('+ imgPos +')').fadeIn();
	}

	function prevSlider(){
		if(imgPos <= 1){
			imgPos = imgItems;
		}else{
			imgPos--;
		}

		$('.cont-slider-2 div').css({'background-color': '#2B2B2B'});
		$('.cont-slider-2 div:nth-child('+ imgPos +')').css({'background-color': "#8ECC6C"});

		$('.cont-image li').hide();
		$('.cont-image li:nth-child('+ imgPos +')').fadeIn();
	}

	// $('.info-photoshop').hide();
	// $('.photoshop').hover(function(){
	// 	// if($('.info-photoshop').)
	// 	$('.info-photoshop').fadeIn();
	// })
});