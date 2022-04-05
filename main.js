mustacheX=0;
mustacheY=0;

function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200,170);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.mustache.x;
    noseY = results[0].pose.mustache.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle(mustacheX, mustacheY, 20);
}

function take_snapshot(){    
  save('https://i.postimg.cc/3x3QzSGq/m.png');
}
