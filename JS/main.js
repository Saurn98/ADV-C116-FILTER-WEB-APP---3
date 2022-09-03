let x;
let y;

function preload(){
    mousTache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    createCanvas(screen.width / 3.5, screen.height / 2.5)

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, screen.width / 3.5, screen.height / 2.5)
    image(mousTache, x - 130, y - 85, 50, 30)
}

function modelLoaded() {
    console.log("PoseNet is initalized")
}

function gotPoses(results){
    if (results.length > 0){
        // console.log(results)
        // console.log(results[0].pose.nose.x)  
        // console.log(results[0].pose.nose.y)  
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
    } 
}

function saveImage(){
    save('your moutache is cool.png')
}
