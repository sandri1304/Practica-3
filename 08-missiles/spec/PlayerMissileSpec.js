describe("PlayerMissile", function() {

	var canvas, ctx;

    beforeEach(function(){
<<<<<<< HEAD
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });
	
	it("PlayerMissile.draw()", function() {
	
		SpriteSheet = {
   				map :{missile: { sx: 0, sy:30, w: 2, h: 10, frames: 1 }},
  				draw: function() {}
=======
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();

    });

	it("PlayerMissile.draw()", function() {

		SpriteSheet = {
    		map :{missile: { sx: 0, sy:30, w: 2, h: 10, frames: 1 }},
  			draw: function() {}
>>>>>>> ramaprototipo7
		};

       missil = new PlayerMissile(1,5);
      
       spyOn(SpriteSheet, "draw");
      
       missil.draw(ctx);

       expect(SpriteSheet.draw).toHaveBeenCalled();

	});
<<<<<<< HEAD
	

	it ("PlayerMissile.Step()", function(){
	
		SpriteSheet = {
   				map :{missile: { sx: 0, sy:30, w: 2, h: 10, frames: 1 }},
  				step: function() {}
		};
		missil = new PlayerMissile(1,5);
		
		missil.board={remove: function (){} };
		
=======


	it ("PlayerMissile.Step()", function(){

		SpriteSheet = {
    		map :{missile: { sx: 0, sy:30, w: 2, h: 10, frames: 1 }},
   			step: function() {}
		};
		missil = new PlayerMissile(1,5);

		missil.board={remove: function (){} };

>>>>>>> ramaprototipo7
      
       spyOn(missil.board, "remove");
      
       missil.step(0.2);
      
       expect(missil.board.remove).toHaveBeenCalled();
<<<<<<< HEAD
   	});

});

=======
    });

});






>>>>>>> ramaprototipo7
/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo

*/
