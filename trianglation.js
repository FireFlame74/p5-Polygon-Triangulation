
class Vertex {

    constructor(vector) {
        this.Connections = [];
        this.x = vector[0];
        this.y = vector[1];
    }
}

class Polygon{

    constructor(vertices){
        this.Vertices = undefined;
        if(vertices == undefined){
            vertices = [];
        }

        this.Vertices = vertices;
    } 

    pointChainToVertices(points){

        let oldVertex = new Vertex([points[0].x, points[0].y]);
        

        for (let index = 1; index < points.length; index++) {
            const element = points[index];

            let vertex = new Vertex([element.x,element.y]);
            console.log(vertex);
            oldVertex.Connections.push(vertex);
            vertex.Connections.push(oldVertex);
            if(index==1){
                this.Vertices.push(oldVertex);
            }
            if(index==points.length-1){
                this.Vertices[0].Connections.push(vertex);
            }
            oldVertex = vertex;
            this.Vertices.push(vertex);
        }

        this.Vertices[this.Vertices.length-1].Connections.push([points[0].x,points[0].y]);
        return this;
    }

}

