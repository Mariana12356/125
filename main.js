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
    base = loadImage('https://wepink.vtexassets.com/arquivos/ids/156682/base1000.png?v=638186538743200000')
}

function draw(){
    background("#ffa9b8")
    image(base,noseX,noseY,diferenca,diferenca)
    // fill("#ffdfe4")
    // stroke("#b04758")
    // //square(noseX, noseY, diferenca)
}

function modelLoaded(){
    console.log("modelo carregado")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        noseX = floor(noseX)
        noseY = floor(noseY)
        
        leftWristX = results[0].pose.leftWrist.x
        rigthWristX = results[0].pose.rightWrist.x
        
        diferenca = floor(leftWristX-rigthWristX)
        
    }
}
