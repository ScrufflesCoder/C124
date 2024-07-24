function setup() {
    video = createCapture(VIDEO);
    video.size(550, 400);

    canvas = createCanvas(550, 400);
    canvas.position(560, 70);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background('#00CED1');
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
