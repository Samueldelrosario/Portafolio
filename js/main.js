$(document).ready(function () {

	var alturaName = $('.cont-name').height();
	var alturaProfesional = $('.cont-profesional').height() - 600;
	//torre roberto pastorizo

	$(window).on('scroll', function(){
		if($(window).scrollTop() >= alturaName){
			$('.header').addClass('header-sombra');
			$('.header').addClass('background-header')
		}else{
			$('.header').removeClass('header-sombra');
			$('.header').removeClass('background-header');
		}
	})

	$(window).on('scroll', function(){
		if($(window).scrollTop() >= (alturaName + alturaProfesional)){
			$('#object2').animate({
				opacity: 1,
			});
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

	$('.hamburger').click(function(){
		if($('.hamburger').hasClass('is-active')){
			$('.cuadro-blur').fadeIn();
			$('.header div ul').animate({
				right: '0'
			});

			$('.header-pages div ul').animate({
				right: '0'
			});

			$('.filter').addClass('filter-blur');

		}else{
			$('.cuadro-blur').fadeOut();
			$('.header div ul').animate({
				right: '-55%'
			});
			$('.header-pages div ul').animate({
				right: '-55%'
			});

			$('.filter').removeClass('filter-blur');
		}
	});

	$('.cuadro-blur').click(function(){
			$('.cuadro-blur').fadeOut();
			$('.header div ul').animate({
				right: '-55%'
			});
			$('.header-pages div ul').animate({
				right: '-55%'
			});
			$('.filter').removeClass('filter-blur');
			$('.hamburger').removeClass('is-active');
	});

	$('.header div ul li').click(function(){
		$('.cuadro-blur').fadeOut();
		$('.header div ul').animate({
			right: '-55%'
		});
		$('.filter').removeClass('filter-blur');
		$('.hamburger').removeClass('is-active');
});




});