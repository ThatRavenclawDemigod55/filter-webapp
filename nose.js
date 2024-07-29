noseX = 0 ;
noseY = 0 ; 

function preload() {
  clown_nose = loadImage("https://i.postimg.cc/0jxyBQFJ/clown-nose.png")
}

function setup() {
    canvas = createCanvas(300,300) ;
    canvas.position(600, 460);
    video = createCapture(VIDEO)
    video.size(300,300) ;
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on ('pose', gotPoses) ;
}

function draw() {
    image (video, 0, 0, 300, 300) ;
    image (clown_nose, noseX - 15, noseY - 15, 30, 30)
}

function takeSnapshot() {
    save("filterImage") ;
}

function modelLoaded() {
    console.log("PoseNet is Initialised") ;
}

function gotPoses(results) {
  if(results.length > 0) {
    noseX = results[0].pose.nose.x ; 
    noseY = results[0].pose.nose.y ; 
    console.log(results) ;
    console.log("nose x = " + results[0].pose.nose.x) ;
    console.log("nose y = " + results[0].pose.nose.y) ;
  }
}

function back() {
    window.location = "start page.html" ;
}