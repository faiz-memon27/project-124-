function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose Net Is Initialized")
}

function draw(){
    background('#808080');
}

function gotPoses(){
    if(results.lengths > 0);
    {
        console.log(results);
    }
}