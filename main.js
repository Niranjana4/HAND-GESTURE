prediction1="";

Webcam.set({
    width: 340,
    height: 300,
    image_format:'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wZBQYbI4T/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model is loaded")
}

function speak()
{
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is"+prediction1;
    var utterthis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}