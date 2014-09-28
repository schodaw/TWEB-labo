function VisData() {
    this.nodes = [];
    this.edges = [];
};

// Add a javascript object to the internal graph logic
VisualGraph.prototype.addJsObjectToGraph = function(obj) {

}

// Visualize the internal graph logic using a DFS
VisualGraph.prototype.createVisualGraph = function(node) {
    var objId = this.getNextNodeId();
    this.visData.nodes.push(new VisNode(objId, node.name));

    // add properties
    for (i in node.properties) {
        this.visData.nodes.push();
        this.visData.edges.push();
    }

    // add inherited properties
    for (i in node.inheritedProperties) {
        this.visData.nodes.push();
        this.visData.edges.push();
    }

    // add children
    for (i in node.children) {
        this.visData.edges.push();
        this.createVisualGraph();
    }
    
        /*
    var nodes = [
            {id: 1, label: 'black node', group: 'objectNodes'},
        {id: 2, label: 'black node', group: 'ownPropertyNodes'},
        {id: 3, label: 'black node', group: 'inheritedPropertyNodes'},
          ];
          
              edges = [
      //prototypeEdges
        {from: 1, to: 2, width: 3, color: 'red', style: 'arrow-center', width:2},
      //propertyEdges
        {from: 1, to: 3, width: 1, color: 'green', style: 'line'},
      ];
        */

}
VisualGraph.prototype.create = function(DOMContainerID) {
    this.createVisualGraph(this.graph);
    var container = document.getElementById(DOMContainerID);
    var options = {
        nodes: {
          // default for all nodes
          shape: 'box',
        },
        groups: {
          objectNodes: {
            // defaults for nodes in this group
            color: {
                border: 'blue',
                background: 'lightblue',
            },
          },
          ownPropertyNodes: {
            color: {
                border: 'black',
                background: 'yellow',
            }
          },
          inheritedPropertyNodes: {
            color: {
                border: 'grey',
                background: 'lightgrey',
            },
          }
        }
    };
    var network = new vis.Network(container, this.visData, options);
} 

function Jsvis() {};
Jsvis.prototype.VisualizationGraph = function() {
    return new VisualGraph();
};

var jsvis = new Jsvis();