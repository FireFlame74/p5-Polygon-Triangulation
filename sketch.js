let points = [];
let scale = 100;

function setup() {
    points = [
        createVector(0, -1),
        createVector(1, 0),
        createVector(0, 1),
        createVector(-1, 0)
    ];

    createCanvas(window.innerWidth, window.innerHeight);
    background(41, 47, 54);
}



function draw() {
    background(41, 47, 54);

    drawPoints();
function getCenterPosition(point) {
    return createVector(point.x * scale + window.innerWidth / 2, point.y * scale + window.innerHeight / 2);
}

function drawPoints() {
    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        noStroke();
        fill(255, 255, 255);
        let position = getCenterPosition(point);
        ellipse(position.x, position.y, 10, 10);
        textSize(14);
        text(index, position.x + 10, position.y - 10);
    }
}