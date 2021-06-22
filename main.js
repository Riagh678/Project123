function setup(){
video = createCaputure(VIDEO);
video.size(550, 500);
canvas.createCanvas(550, 550);
canvas.posisition(560, 75);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
background('#800080');
}
function modelLoaded(){
console.log('poseNet is initialized');
}
function gotPoses(results){
if(results.length>0){
console.log(reults);
}
}