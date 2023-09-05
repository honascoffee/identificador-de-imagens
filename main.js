Webcam.set({
  width:350,
  height:300,
  image_format:"png",
  png_quality:90
});

webcam= document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='resimg' class='img-responsive' src='"+data_uri+"'/>"
  });
};

console.log("versão ml5:",ml5.version);
classificador=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hYLaGC5s6/model.json",modelLoaded);
function modelLoaded(){
  console.log("modelo carregado");
};
function check(){
  img = document.getElementById("resimg");
  classificador.classify(img,classiresult);
};

function classiresult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(2);
  };
};