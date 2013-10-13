describe("GameBoard", function(){
    var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });

	it("GameBoard.add()", function(){
	
		var board = new GameBoard();
		spyOn(board, "add");
		board.add(new PlayerShip());
		var gb=5;
		obj=board.add(gb);
		
		expect(board.objects[0]).toEqual(obj);
		expect(board.add).toHaveBeenCalled();
	});
	
	it ("GameBoard.Remove()", function(){
		var board = new GameBoard();
		
		spyOn(board, "remove");
		spyOn(board,"resetRemoved");
		spyOn(board, "finalizeRemoved");
		
		board.add(new PlayerShip());
		
		board.remove(new PlayerShip());
		board.resetRemoved(new PlayerShip());
		board.finalizeRemoved(new PlayerShip());
		
		expect(board.remove).toHaveBeenCalled();
		expect(board.resetRemoved).toHaveBeenCalled();
		expect(board.finalizeRemoved).toHaveBeenCalled();
		//expect(board.objects[0]).toEqual(undefined);
	
	});
	

	it ("GameBoard.step()",function(){

		var board = new GameBoard();
		spyOn(board, "step");
		board.step(new PlayerShip());
		
		waits(100);
		
		runs(function(){
			expect(board.step).toHaveBeenCalled();
		});

	
	});
	

	
	it ("GameBoard.draw()",function(){

		var board = new GameBoard();
		spyOn(board, "draw");
		board.draw(new PlayerShip());
		
		waits(100);
		
		runs(function(){
			expect(board.draw).toHaveBeenCalled();
		});
		
	 });
	 
	 it("gameBoard.iterate()",function(){
		var board = new GameBoard();
		
		var obje = new function(){
			this.iterate= function(){};
		};
		
		var obj1 = new function(){
			this.iterate= function(){};
		};
		spyOn(obje,"iterate");
		spyOn(obj1,"iterate");
		
		board.add(obje);
		board.add(obj1);
		board.iterate('iterate');
		_.each(board.objects, function(element,index,list){expect(element.iterate).toHaveBeenCalled()});
		
		
		});
	
	
	it ("GameBoard.Overlap()",function(){
	
		var board = new GameBoard();
		
		var objet=function(){
			this.x=2;
			this.y=3;
			this.h=4;
			this.w=5;
		};
		
		var objet1=function(){
			this.x=8;
			this.y=8;
			this.h=1;
			this.w=1;
		};
		
		var objeto1=new objet;
		var objeto2 = new objet;
		var objeto3 = new objet1;
		
		//spyOn(board, "overlap");
		board.add(objeto1);
		board.add(objeto2);
		board.add(objeto3);
		
	
		expect(board.overlap(objeto1,objeto2)).toEqual(true);
		expect(board.overlap(objeto1,objeto3)).toEqual(false);	
	
	});
	/*
	it ("GameBoard.Collide()",function(){
		
		var board = new GameBoard();
	
		var objet=function(){
			this.x=2;
			this.y=3;
			this.h=4;
			this.w=5;
		};
		
		var objet1=function(){
			this.x=8;
			this.y=8;
			this.h=1;
			this.w=1;
		};
		
		var objeto1=new objet;
		var objeto2 = new objet;
		var objeto3 = new objet1;
		
		board.add(objeto1);
		board.add(objeto2);
		board.add(objeto3);
	});
*/
	it(GameBoard.dectect(),function(){
		var board = new GameBoard();
		
		var objet=function(){
			this.x=8;
			this.y=8;
			this.h=1;
			this.w=1;
		};
		
		var objet1=function(){
			this.x=2;
			this.y=2;
			this.h=1;
			this.w=1;
		};
		
		var objeto1 = new objet;
		var objeto2 = new objet1;
		
		board.add(objeto1);
		board.add(objeto2);
		board.detect(objeto1);
		
		expect(board.objects[1]).toEqual(objeto1);
		
		)};
		
});

/*

  En el anterior prototipo (06-player), el objeto Game permite
  gestionar una colección de tableros (boards). Los tres campos de
  estrellas, la pantalla de inicio, y el sprite de la nave del
  jugador, se añaden como tableros independientes para que Game pueda
  ejecutar sus métodos step() y draw() periódicamente desde su método
  loop(). Sin embargo los objetos que muestran los tableros no pueden
  interaccionar entre sí. Aunque se añadiesen nuevos tableros para los
  misiles y para los enemigos, resulta difícil con esta arquitectura
  pensar en cómo podría por ejemplo detectarse la colisión de una nave
  enemiga con la nave del jugador, o cómo podría detectarse si un
  misil disparado por la nave del usuario ha colisionado con una nave
  enemiga.


  Requisitos:

  Este es precisamente el requisito que se ha identificado para este
  prototipo: diseñar e implementar un mecanismo que permita gestionar
  la interacción entre los elementos del juego. Para ello se diseñará
  la clase GameBoard. Piensa en esta clase como un tablero de un juego
  de mesa, sobre el que se disponen los elementos del juego (fichas,
  cartas, etc.). En Alien Invasion los elementos del juego serán las
  naves enemigas, la nave del jugador y los misiles. Para el objeto
  Game, GameBoard será un board más, por lo que deberá ofrecer los
  métodos step() y draw(), siendo responsable de mostrar todos los
  objetos que contenga cuando Game llame a estos métodos.

  Este prototipo no añade funcionalidad nueva a la que ofrecía el
  prototipo 06.


  Especificación: GameBoard debe

  - mantener una colección a la que se pueden añadir y de la que se
    pueden eliminar sprites como nave enemiga, misil, nave del
    jugador, explosión, etc.

  - interacción con Game: cuando Game llame a los métodos step() y
    draw() de un GameBoard que haya sido añadido como un board a Game,
    GameBoard debe ocuparse de que se ejecuten los métodos step() y
    draw() de todos los objetos que contenga

  - debe ofrecer la posibilidad de detectar la colisión entre
    objetos. Un objeto sprite almacenado en GameBoard debe poder
    detectar si ha colisionado con otro objeto del mismo
    GameBoard. Los misiles disparados por la nave del jugador deberán
    poder detectar gracias a esta funcionalidad ofrecida por GameBoard
    cuándo han colisionado con una nave enemiga; una nave enemiga debe
    poder detectar si ha colisionado con la nave del jugador; un misil
    disparado por la nave enemiga debe poder detectar si ha
    colisionado con la nave del jugador. Para ello es necesario que se
    pueda identificar de qué tipo es cada objeto sprite almacenado en
    el tablero de juegos, pues cada objeto sólo quiere comprobar si ha
    colisionado con objetos de cierto tipo, no con todos los objetos.

*/

