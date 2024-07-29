rightEyeX = 0 ;
rightEyeY = 0 ; 
leftEyeX = 0 ;
leftEyeY = 0 ;

function preload() {
  righteye = loadImage("https://i.ibb.co/wh8DqZJ/right-eye-removebg-preview.png")
  lefteye = loadImage("https://i.ibb.co/nn2JVmw/left-eye-removebg-preview.png")
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
    image (righteye, rightEyeX - 15, rightEyeY - 15, 30, 30)
    image (lefteye, leftEyeX - 15, leftEyeY - 15, 30, 30)
}

function takeSnapshot() {
    save("filterImage") ;
}

function modelLoaded() {
    console.log("PoseNet is Initialised") ;
}

function gotPoses(results) {
  if(results.length > 0) {
    rightEyeX = results[0].pose.rightEye.x ; 
    rightEyeY = results[0].pose.rightEye.y ; 
    console.log(results) ;
    console.log("right eye x = " + results[0].pose.rightEye.x) ;
    console.log("right eye y = " + results[0].pose.rightEye.y) ;

    leftEyeX = results[0].pose.leftEye.x ; 
    leftEyeY = results[0].pose.leftEye.y ; 
    console.log(results) ;
    console.log("left eye x = " + results[0].pose.leftEye.x) ;
    console.log("left eye y = " + results[0].pose.leftEye.y) ;
  }
}


function back() {
    window.location = "start page.html" ;
}