function preLoad(){

//useless rn

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

    image(video, 200, 150, 300, 300);

}


function modelLoaded(){

    console.log("model loaded yey");
    
    }
    
    function gotPoses(results){
    
    if(results.length > 0){
    
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " +results[0].pose.nose.y);
    
    }
    
    }
    
    function takePic(){
    
    save('hahasoukokugobrrr.jpg')
    
    }