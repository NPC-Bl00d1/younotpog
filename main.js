
nose_x = 0;
nose_y = 0;

function preload(){

mustache = loadImage("mustache.png");

}

function setup(){

    canvas = createCanvas(700, 600);
    canvas.position(420, 250);
    
webcam = createCapture(VIDEO);
webcam.hide();

posenet = ml5.poseNet(webcam , modelLoaded);
posenet.on('pose' , gotPoses)

}

function draw(){

    image(webcam, 0, 0, 700, 600);
    
    image(mustache , nose_x - 10, nose_y + 29, 80 , 80);
    

}


function modelLoaded(){

    console.log("model loaded hooyey");
    
    }
    
    function gotPoses(results){
    
    if(results.length > 0){
    
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " +results[0].pose.nose.y);
    
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;

    }
    
    }
    
    function takePic(){
    
    save('hahasoukokugobrrr.jpg')
    
    }