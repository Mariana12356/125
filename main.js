var noseX = 50
var noseY = 50
var diferenca = 50

function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(540, 100)
    video = createCapture(VIDEO) 
    video.size(500, 500)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function preload(){

}

function draw(){
    background("#ffa9b8")
    fill("#ffdfe4")
    stroke("#b04758")
    square(noseX, noseY, diferenca)
}

function modelLoaded(){
    console.log("modelo carregado")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.X
        noseY = results[0].pose.nose.Y
        leftWristX = results[0].pose.leftWrist.X
        rigthWristX = results[0].pose.rigthWrist.X
        diferenca = floor(rigthWristX - leftWristX)
    }
}
