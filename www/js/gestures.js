// JavaScript Document
var app =
{
	InitApp: function()
	{
		this.InitBotones();
		this.InitFastClick();
		this.InitHammer();
	},
	
	InitBotones: function()
	{
		var botonClaro = document.querySelector('#idClaro');
		var botonOscuro = document.querySelector('#idOscuro');
		
		botonClaro.addEventListener('click', this.PutFondoClaro, false);
		botonOscuro.addEventListener('click', this.PutFondoOscuro, false);	
	},

	PutFondoClaro: function() 
	{ 
		document.body.className = 'Aclarado'; 
	},
	
	PutFondoOscuro: function() 
	{ 
		document.body.className = 'Oscurecido';
	},	

	InitFastClick: function()
	{
		FastClick.attach(document.body);		
	},
	
	InitHammer: function()
	{
		var zonaGestos = document.getElementById('idZonaGestos');
		zonaGestos.addEventListener ('webkitAnimationEnd', function (ev) { idZonaGestos.className= '';});
		
		var hammerTimeZonaGestos = new Hammer(zonaGestos);
		hammerTimeZonaGestos.get('pinch').set({enable:true});
		hammerTimeZonaGestos.get('rotate').set({enable:true});
		
		hammerTimeZonaGestos.on ('tap', function (ev) { idZonaGestos.className= 'tapPulsado';});
		hammerTimeZonaGestos.on ('doubletap', function (ev) { idZonaGestos.className= 'doubletapPulsado';});
		hammerTimeZonaGestos.on ('press', function (ev) { idZonaGestos.className= 'pressPulsado';});
		hammerTimeZonaGestos.on ('swipe',	function (ev) 
											{ 
												if (ev.direction == 4)
													idZonaGestos.className= 'swipeDerechoPulsado';
												else if (ev.direction == 2)
													idZonaGestos.className= 'swipeIzquierdoPulsado';
											});
		hammerTimeZonaGestos.on ('rotate',	function (ev) 
											{ 
												var margenActivacion= 25;
												if (ev.angle > margenActivacion)
													idZonaGestos.className= 'rotateDerechaPulsado';
												else if (ev.angle < -margenActivacion)
													idZonaGestos.className= 'rotateIzquierdaPulsado';
											});
	}
};


if('addEventListener' in document) 
{
	document.addEventListener('DOMContentLoaded', function(){app.InitApp();}, false);
}

