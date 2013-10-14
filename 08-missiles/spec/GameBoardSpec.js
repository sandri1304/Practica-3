describe("GameBoard", function(){
    var canvas, ctx;

    beforeEach(function(){
<<<<<<< HEAD
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();
=======
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
>>>>>>> ramaprototipo7

    });

	it("GameBoard.add()", function(){
<<<<<<< HEAD
	
=======

>>>>>>> ramaprototipo7
		var board = new GameBoard();
		spyOn(board, "add");
		board.add(new PlayerShip());
		var gb=5;
		obj=board.add(gb);
<<<<<<< HEAD
		
=======

>>>>>>> ramaprototipo7
		expect(board.objects[0]).toEqual(obj);
		expect(board.add).toHaveBeenCalled();
	});

	it ("GameBoard.Remove()", function(){
		var board = new GameBoard();

		objeto = board.add(new PlayerShip());
		board.resetRemoved();
		board.remove(objeto);
		board.finalizeRemoved();
		expect(board.objects[0]).toEqual(undefined);
	});

	it ("GameBoard.step()",function(){

		var board = new GameBoard();
		//spyOn(board, "step");
		//board.step(new PlayerShip());
<<<<<<< HEAD
		
=======

>>>>>>> ramaprototipo7
		var dum = {step: function () {}}
		spyOn(dum, "step");
		objeto=board.add(dum);
		board.step(ctx);
		expect(dum.step).toHaveBeenCalled();
<<<<<<< HEAD
		
		//waits(100);
		
		//runs(function(){
			//expect(board.step).toHaveBeenCalled();
		//});
=======

		//waits(100);

			//runs(function(){
		//expect(board.step).toHaveBeenCalled();

>>>>>>> ramaprototipo7
	});

	it ("GameBoard.draw()",function(){

		var board = new GameBoard();
<<<<<<< HEAD
		
=======

>>>>>>> ramaprototipo7
		var dum ={draw: function(){}}
		spyOn(dum, "draw");
		objeto:board.add(dum);
		board.draw(ctx);
		expect(dum.draw).toHaveBeenCalled();
<<<<<<< HEAD
	 });
	
	 it("gameBoard.iterate()",function(){
		var board = new GameBoard();
		
		var obje = new function(){
			this.iterate= function(){};
		};
		
=======
	});

	it("gameBoard.iterate()",function(){
		var board = new GameBoard();

		var obje = new function(){
			this.iterate= function(){};
		};

>>>>>>> ramaprototipo7
		var obj1 = new function(){
			this.iterate= function(){};
		};
		spyOn(obje,"iterate");
		spyOn(obj1,"iterate");
<<<<<<< HEAD
		
=======

>>>>>>> ramaprototipo7
		board.add(obje);
		board.add(obj1);
		board.iterate('iterate');
		_.each(board.objects, function(element,index,list){expect(element.iterate).toHaveBeenCalled()});
<<<<<<< HEAD
		});
	
	it ("GameBoard.Overlap()",function(){
	
=======
	});

	it ("GameBoard.Overlap()",function(){

>>>>>>> ramaprototipo7
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
<<<<<<< HEAD
		
		var objeto1=new objet;
		var objeto2 = new objet;
		var objeto3 = new objet1;
		
		board.add(objeto1);
		board.add(objeto2);
		board.add(objeto3);
		
		expect(board.overlap(objeto1,objeto2)).toEqual(true);
		expect(board.overlap(objeto1,objeto3)).toEqual(false);	
	});
	
=======

		var objeto1=new objet;
		var objeto2 = new objet;
		var objeto3 = new objet1;

		board.add(objeto1);
		board.add(objeto2);
		board.add(objeto3);

		expect(board.overlap(objeto1,objeto2)).toEqual(true);
		expect(board.overlap(objeto1,objeto3)).toEqual(false);	
	});

>>>>>>> ramaprototipo7
	it ("GameBoard.collide()",function(){
		var board = new GameBoard();
		var objet=function(){
			this.x=6;
			this.y=7;
			this.h=2;
			this.w=2;
		};
<<<<<<< HEAD
		
		var obj1 = new objet;
		var obj2 = new objet; 
		
=======

		var obj1 = new objet;
		var obj2 = new objet;

>>>>>>> ramaprototipo7
		objeto1=board.add(obj1);
		objeto2=board.add(obj2);

		expect(board.collide(objeto1)).toBe(objeto2);
	});

});




<<<<<<< HEAD
=======






>>>>>>> ramaprototipo7
/*


En el anterior prototipo, el objeto Game permite gestionar una pila de
tableros (boards). Los tres campos de estrellas, la pantalla de inicio
y el sprite de la nave del jugador se añaden como tableros
independientes para que Game pueda ejecutar sus métodos step() y
draw() periódicamente desde su método loop(). Sin embargo los tableros
no pueden interaccionar entre sí. Resulta difícil con esta
arquitectura pensar en cómo podría por ejemplo detectarse la colisión
de una nave enemiga con la nave del jugador, o cómo podría detectarse
si un disparo de colisiona con una nave.

Este es precisamente el requisito que se ha identificado para este
prototipo: gestionar la interacción entre los elementos del
juego. Piensa en esta clase como un tablero de juegos de mesa, sobre
el que se disponen los elementos del juego (fichas, cartas, etc.). En
este caso serán naves enemigas, nave del jugador y disparos los
elementos del juego. Para Game, GameBoard será un tablero más, por lo
que deberá ofrecer los métodos step() y draw(), y será responsable de
mostrar todos los objetos que contenga cuando Game llame a estos
métodos.



Especificación: GameBoard debe

- mantener una colección de objetos a la que se pueden añadir y de la
  que se pueden eliminar sprites

- interacción con Game: cuando reciba los métodos step() y draw() debe
  ocuparse de que se ejecuten estos métodos en todos los objetos que
  contenga.

- debe detectar la colisión entre objetos. Querremos que los disparos
  de la nave del jugador detecten cuándo colisionan con una nave
  enemiga, que una nave enemiga detecte si colisiona con la nave del
  jugador, que un disparo de la nave enemiga detecte si colisiona con
  la nave del jugador,... necesitamos saber de qué tipo es cada objeto.


*/
