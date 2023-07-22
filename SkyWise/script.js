const apiKey = "2896990aad4d18144aff586d83e2e616";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#locationtext");
const searchBtn = document.querySelector("#searchbtn");
const weathericon =document.querySelector(".weather-icon")
const havatema = document.querySelector(".temabg")
const arkaplan = document.getElementById("bg");
const weatheraction = document.getElementById("weatheraction")


async function checkWeather(city){
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if(response.status==404 || searchBox.value==""){
    document.querySelector(".error").style.display = "block";
   }
   else{
    document.querySelector(".error").style.display = "none";
    document.querySelector(".temabg").style.display = "block";
    eylemegecir();

    var data = await response.json();

    console.log(data);

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

   

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
        
    }
    else if(data.weather[0].main == "Clear"){
      
        weathericon.src = "images/clear.png";
          
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rains.png";
        havatema.style.backgroundImage = "url('images/temarain.png')";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
        havatema.style.backgroundImage = "url('images/temarain.png')";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/MistNew.png";
        havatema.style.backgroundImage = "url('images/temamist.png')";
    }
    else if(data.weather[0].main == "Snow"){

        weathericon.src = "images/snow.png";
        havatema.style.backgroundImage = "url('images/temasnow.png')";
    }

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

const generalcard = document.getElementById("generalcard")
const card1img = document.getElementById("card1img")
const card2img = document.getElementById("card2img")
const card3img = document.getElementById("card3img")
const card4img = document.getElementById("card4img")

const cardtext1= document.getElementById("cardtext1") 
const cardtext2= document.getElementById("cardtext2")
const cardtext3= document.getElementById("cardtext3")
const cardtext4= document.getElementById("cardtext4")

const cardtitle1 = document.getElementById("cardtitle1")
const cardtitle2 = document.getElementById("cardtitle2")
const cardtitle3 = document.getElementById("cardtitle3")
const cardtitle4 = document.getElementById("cardtitle4")

const snowgradientDegeri = "linear-gradient( 45deg,#ffffff 30% ,#ffffff 90%)";
const sungradientDegeri = "linear-gradient(45deg,#28a052 30% ,#006be6 90%)";
const raingradientDegeri = "linear-gradient(45deg,#c2c2c2 1%,#395772)";

const rainweathergradient = "linear-gradient(45deg,#d0d0d0 1%,#2b4869)"
const sunweathergradient="linear-gradient(45deg,#3abe69 1%,#145fb5)";
const snowweathergradient="linear-gradient(45deg,#ffffff 1%,#ffffff)";
const mistweathergradient="linear-gradient(180deg,#939393 10%,#b7b7b7a9)";
const iceweathergradient= "linear-gradient(45deg,#2b6389,#dadada)";


   setTimeout(() => {

      if(data.main.temp <=10 && data.weather[0].main == "Snow"){
        cardtitle1.innerHTML="Hot chocolate"; cardtext1.innerHTML="In this cold weather, you can drink a delicious hot chocolate.";
        cardtitle2.innerHTML="Discover new places"; cardtext2.innerHTML="You can see wonderful views. Be careful do not get sick";
        cardtitle3.innerHTML="You can take a walk"; cardtext3.innerHTML="You can go for a walk. Don't forget to dress warmly.";
        cardtitle4.innerHTML="Ohh! a snowball"; cardtext4.innerHTML="Be careful not to hit the snowball on the head";
        generalcard.style.display="block";
        card1img.src="images/SicakCikolata.png", card2img.src="images/KisGezi.png", card3img.src="images/KisYürüyüs.png", card4img.src="images/KarTop.png";
        arkaplan.style.backgroundImage=snowgradientDegeri;
        havatema.style.backgroundImage = "url('images/temasnow.png')";
        weatheraction.style.backgroundImage=rainweathergradient;
      }
      
      if(data.weather[0].main == "Rain"){
        cardtitle1.innerHTML="Umbrella"; cardtext1.innerHTML="Don't forget to take an umbrella or you will get wet.";
        cardtitle2.innerHTML="Have fun with your friends"; cardtext2.innerHTML="You can spend time at home. Play games with your friends.";
        cardtitle3.innerHTML="Read a book"; cardtext3.innerHTML="You can read a book. It can relax you";
        cardtitle4.innerHTML="Listen to the sound"; cardtext4.innerHTML="You can listen to music. This is very nice in rainy weather";
        generalcard.style.display="block";
        card1img.src="images/SemsiyeAl.png", card2img.src="images/EvdeZaman.png", card3img.src="images/KitapOkumak.png", card4img.src="images/MuzikDinlemek.png";
        arkaplan.style.backgroundImage=raingradientDegeri;
        havatema.style.backgroundImage = "url('images/temarain.png')";
        weatheraction.style.backgroundImage=rainweathergradient;
      }

      if(data.weather[0].main == "Drizzle"){
        cardtitle1.innerHTML="Umbrella"; cardtext1.innerHTML="Don't forget to take an umbrella or you will get wet.";
        cardtitle2.innerHTML="Have fun with your friends"; cardtext2.innerHTML="You can spend time at home. Play games with your friends.";
        cardtitle3.innerHTML="Read a book"; cardtext3.innerHTML="You can read a book. It can relax you";
        cardtitle4.innerHTML="Listen to the sound"; cardtext4.innerHTML="You can listen to music. This is very nice in drizzle weather";
        generalcard.style.display="block";
        card1img.src="images/SemsiyeAl.png", card2img.src="images/EvdeZaman.png", card3img.src="images/KitapOkumak.png", card4img.src="images/MuzikDinlemek.png";
        arkaplan.style.backgroundImage=raingradientDegeri;
        havatema.style.backgroundImage = "url('images/temarain.png')";
        weatheraction.style.backgroundImage=rainweathergradient;
      }

      if(data.weather[0].main == "Mist"){
        cardtitle1.innerHTML="Be Careful"; cardtext1.innerHTML="If there is mist, you must be careful. Watch out for cars.";
        cardtitle2.innerHTML="You can do sports"; cardtext2.innerHTML="You can do sports for your healty.";
        cardtitle3.innerHTML="Computer Games"; cardtext3.innerHTML="You can play computer games with your best friends.";
        cardtitle4.innerHTML="Listen to the sound"; cardtext4.innerHTML="You can listen to music. This is very nice in foggy weather.";
        generalcard.style.display="block";
        card1img.src="images/AraclaraDikkat.png", card2img.src="images/SporYapmak.png", card3img.src="images/VideoOyunu.png", card4img.src="images/MuzikDinlemek.png";
        arkaplan.style.backgroundImage=raingradientDegeri;
        havatema.style.backgroundImage = "url('images/temamist.png')";
        weatheraction.style.backgroundImage=mistweathergradient;
      }

      if(data.main.temp <=10 && data.weather[0].main == "Clouds" || data.main.temp <=10 && data.weather[0].main == "Clear" ||data.main.temp <=10 && data.weather[0].main == "Mist" || data.main.temp <=10 && data.weather[0].main == "Drizzle" || data.main.temp <=11 && data.weather[0].main == "Rain"){
        cardtitle1.innerHTML="Wear thick"; cardtext1.innerHTML="Dress warmly. The weather is cold right now";
        cardtitle2.innerHTML="Pull the quilt"; cardtext2.innerHTML="Pull your blanket over you. Pay attention to this at night.";
        cardtitle3.innerHTML="A delicious coffee"; cardtext3.innerHTML="In cold weather, you can consume a coffee or hot drinks.";
        cardtitle4.innerHTML="Warm up the car"; cardtext4.innerHTML="Warm up the car. The engine should run a little.";
        generalcard.style.display="block";
        card1img.src="images/Usumek.png", card2img.src="images/UstunuOrtmek.png", card3img.src="images/KahveIcmek.png", card4img.src="images/AracIsindirma.png";
        arkaplan.style.backgroundImage=iceweathergradient;
        havatema.style.backgroundImage = iceweathergradient;
        weatheraction.style.backgroundImage=iceweathergradient;
      }

      if(data.main.temp >=15 && data.weather[0].main == "Clouds" || data.main.temp >=15 && data.weather[0].main == "Clear"){
        cardtitle1.innerHTML="A beautiful beach"; cardtext1.innerHTML="You can go to a beautiful beach. Enjoy your sunbathing.";
        cardtitle2.innerHTML="Step on the pedals"; cardtext2.innerHTML="How about cycling with your friends?";
        cardtitle3.innerHTML="A pleasant picnic"; cardtext3.innerHTML="You can go on a picnic with your family or friend.";
        cardtitle4.innerHTML="Great Ice Cream"; cardtext4.innerHTML="You can eat ice cream in this hot weather.";
        generalcard.style.display="block";
        card1img.src="images/Plaj.jpg", card2img.src="images/Bisiklet.png", card3img.src="images/Picnic.png", card4img.src="images/IceCream.png";
        havatema.style.backgroundImage = "url('images/temasun.png')";
        weatheraction.style.backgroundImage=sunweathergradient;
        arkaplan.style.backgroundImage=sungradientDegeri;
       
      }
      
      
   }, 500); 

   }
      
}

function eylemegecir(){

   const windowWidth = window.innerWidth;

    const isSmallScreen1 = windowWidth < 1186; const isSmallScreen2 = windowWidth < 981; const isSmallScreen3 = windowWidth < 904;
    const isSmallScreen4 = windowWidth < 1076; const isSmallScreen5 = windowWidth < 417;  const isSmallScreen6 = windowWidth < 1921; const isSmallScreen7 = windowWidth < 1148;     
    const isSmallScreen0 = windowWidth < 3086;
   


    const weatherapp= document.getElementById("weatheraction");
    weatherapp.style.marginTop="100px";
    weatherapp.style.height="550px";
    

    const durumlar = document.getElementById("durumlar");
    setTimeout(() => {
        durumlar.style.display="block";
    }, 500);

    const logoaction = document.getElementById("logo");
    
    logoaction.style.width="340px";
    logoaction.style.marginLeft="2%";
    logoaction.style.marginTop="3%";

    arkaplan.style.height="70vh";
    arkaplan.style.marginTop="213px";

    if(isSmallScreen6){
      arkaplan.style.height = "80vh"
    }
    else{

    }

    if(isSmallScreen7){
      arkaplan.style.position= "absolute";
      logoaction.style.position="absolute";
    }
    else{

    }

   

    if (isSmallScreen1) {
    logoaction.style.width="300px";
    logoaction.style.marginLeft="1%";
    logoaction.style.marginTop="2%";
    arkaplan.style.height="70vh";
    arkaplan.style.marginTop="213px";
    } 
    else if(isSmallScreen2) {
    logoaction.style.width="340px";
    logoaction.style.marginLeft="32%";
    logoaction.style.marginTop="-3%";
    arkaplan.style.height="70vh";
    arkaplan.style.marginTop="213px";
    }
    else if(isSmallScreen4){
      arkaplan.style.height = "2000px"
    }
    else if(isSmallScreen0){
      arkaplan.style.height = "81vh"
      
    }
    
    if(isSmallScreen5){
      logoaction.style.width="300px";
    logoaction.style.marginLeft="10%";
    logoaction.style.marginTop="-4%";
    arkaplan.style.height="2000px";
    arkaplan.style.marginTop="213px";
    weatheraction.style.height="1000px";
    
    }
    else{

    }
    

    
  }
  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    
})
