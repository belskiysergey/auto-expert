// Комплексный осмотр

$(document).ready( function() {
	$('div.btn').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400, 
			function() {
				$('#modal_examination_with_departure')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			}
		);

		$('menu').fadeOut(400);		
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_examination_with_departure')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
}); 


// Осмотр у нас в гараже

$(document).ready(function() {
	$('div.inspection_in_our_garage').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_inspection_in_our_garage')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_inspection_in_our_garage')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Заказать осмотр у нас в гараже

$(document).ready(function() {
	$('div.order_an_inspection_in_our_garage').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_order_an_inspection_in_our_garage')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_order_an_inspection_in_our_garage')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Осмотр с выездом мастера

$(document).ready( function() {
	$('div.departure_master').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_departure_master')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);

			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_departure_master')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Заказать осмотр с выездом мастера

$(document).ready( function() {
	$('div.order_an_inspection_with_departure').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_order_an_inspection_with_departure')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);

			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_order_an_inspection_with_departure')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Обоснованый торг

$(document).ready( function() {
	$('div.reasonable_bargaining').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_reasonable_bargaining').
					css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_reasonable_bargaining')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Заказать обоснованый торг

$(document).ready( function() {
	$('div.order_justified_bargaining').click( function(event) {
		$('#overlay').fadeIn(400, 
			function() {
				$('#modal_order_justified_bargaining')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			}
		);

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_order_justified_bargaining')
			.animate({opacity: 1, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});


// Задать вопрос

$(document).ready(function() { 
	$('.btn_question').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_question') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '25%'}, 200); 
		});

		$('menu').fadeOut(400);
	});
	
	$('#modal_close, #cancel, #overlay, #submit').click( function(){ 
		$('#modal_question')
			.animate({opacity: 0, top: '25%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);

		$('menu').fadeIn(400);
	});
});


// Заказать звонок

$(document).ready(function() {
	$('.request_call').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400,
			function() {
				$('#modal_request_call')
					.css('display', 'block')
					.animate({opacity: 1, top: '25%'}, 200);
			});

		$('menu').fadeOut(400);
	});

	$('#modal_close, #cancel, #overlay, #submit').click( function() {
		$('#modal_request_call')
			.animate({opacity: 0, top: '25%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);

		$('menu').fadeIn(400);
	});
});



