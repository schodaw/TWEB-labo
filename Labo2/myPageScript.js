function Person() {};
function Toy() {};
function Cat() {
    this.legs = 4;
}

var hans = new Person();
hans.firstName = 'Hans';
hans.lastName = 'Liechti';
hans.zip = 1700;

var olivier = Object.create(hans);
olivier.firstName = 'Olivier';
olivier.zip = 1950;

var sacha = Object.create(olivier);
sacha.firstName = 'Sacha';
sacha.toy = new Toy();
sacha.toy.description = "playstation";

var stephan = Object.create(hans);
stephan.firstName = "Stephan";
stephan.walk = function() {
    console.log("I am walking");
};

var akebono = new Cat();
akebono.name = 'Akebono';

var visualGraph1 = new jsvis.VisualizationGraph();
visualGraph1.addJsObjectToGraph(akebono);
visualGraph1.create('graph1');


var visualGraph2 = new jsvis.VisualizationGraph();
visualGraph2.addJsObjectToGraph(hans);
visualGraph2.create('graph2');    

var visualGraph3 = new jsvis.VisualizationGraph();
visualGraph3.addJsObjectToGraph(sacha);
visualGraph3.addJsObjectToGraph(sacha.toy);
visualGraph3.addJsObjectToGraph(stephan);
visualGraph3.addJsObjectToGraph(akebono);
visualGraph3.create('graph3');