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


function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error)
    }
      else{
          console.log(result)
          document.getElementById("result_emotion_name").innerHTML=result[0].label;
          document.getElementById("result_emotion_name2").innerHTML=result[1].label;
          prediction1=result[0].label;
          prediction2=result[1].label;
          speak();
          if{result[0].label=="Happy"}
          {
              document.getElementById("update_emoji").innerHTML="&#128522";
          }
          if{result[0].label=="Sad"}
          {
              document.getElementById("update_emoji").innerHTML="&#128546";
          }
          if{result[0].label=="Angry"}
          {
              document.getElementById("update_emoji").innerHTML="&#128545";
          }
          if{result[1].label=="Happy"}
          {
              document.getElementById("update_emoji2").innerHTML="&#128522";
          }
          if{result[1].label=="Sad"}
          {
              document.getElementById("update_emoji2").innerHTML="&#128546";
          }
          if{result[1].label=="Angry"}
          {
              document.getElementById("update_emoji2").innerHTML="&#128545";
          }
      }
}

