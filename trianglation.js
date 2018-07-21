
class Vertex {
    constructor(x, y) {
        this.Connections = [];
        this.x = x;
        this.y = y;
    }

    constructor(vector) {
        this.Connections = [];
        this.x = vector[0];
        this.y = vector[1];
    }
}

class Polygon{
    constructor(){
        this.Vertices = [];
    }
    constructor(vertices){
        this.Vertices = vertices;
    }

}