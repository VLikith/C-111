var prediction1="";
var prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
});
Webcam.attach("#camera");
function click(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML="<img id='img1' src='"+pic+"'>";
    });    
};
console.log("ml5version=", ml5.version);
var modelc=ml5.imageClassifier("", modelloaded);
function modelloaded(){
    console.log("Model has started.");
};
function speak(){
    var synth=window.speechSynthesis;
    var speakdata1="The first prediction is "+prediction1
    var speakdata2="The second prediction is "+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
