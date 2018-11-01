var Queue = function() {
    this.items = [];
};

Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};

Queue.prototype.dequeue = function() {
    return this.items.shift();
};

Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};


var doBFS = function(graph, source) {

    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {

      bfsInfo[i] = {
          distance: null,
          predecessor: null };

    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    while (!queue.isEmpty()) {
        var vertex = queue.dequeue();
        
        for(var j = 0; j < graph[vertex].length; j += 1) {
            var neighbor = graph[vertex][j];
            
            if(bfsInfo[vertex].neighbor === null) {
                neighbor.distance = bfsInfo[vertex].distance + 1;
                neighbor.predecessor = bfsInfo[vertex];
                queue.enqueue(neighbor);
            }
        }
    }
    
    return bfsInfo;

};


var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];

var bfsInfo = doBFS(adjList, 3);

console.log('bfsInfo', bfsInfo);
