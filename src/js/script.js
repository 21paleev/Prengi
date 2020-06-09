$(document).ready(function () {
	//Слайдеры
	$('.promo__slider').slick({
		speed: 1200,
		adaptiveHeight: true,
		dots: true,
		draggable: true,

		prevArrow: '<button type="button" class="slick-prev"><img src="../src/img/promo/promo-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../src/img/promo/promo-right.png"></button>'
	});
	$('.represent__slider').slick({
		speed: 1200,
		adaptiveHeight: true,
		draggable: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../src/img/represent/sl-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../src/img/represent/sl-right.png"></button>'
	});
	//Модальные окна
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation').fadeOut('slow');
	});
	//Гамбургер


	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	//Валидация


	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа!")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	validateForms('#consultation');

	//Номер телефона

	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// Скролл
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});

	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.promo__menu'),
			menuItem = document.querySelectorAll('.promo__item'),
			hamburger = document.querySelector('.hamburger');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('promo__menu_active');
		});

		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('promo__menu_active');
			});
		});
	});



});





/* $('input[name=phone]').mask("+7 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	}); */