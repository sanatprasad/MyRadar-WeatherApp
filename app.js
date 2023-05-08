console.log("Welcome to My Weather App");
const apikey="863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(){

    var city=document.getElementById("a").value;
    const response=fetch(apiUrl+city+`&appid=${apikey}`);
    var data=(await response).json();
    
    data.then(function(data){
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector("#temperature").innerHTML=data.main.temp;
        document.querySelector("#wind-speed").innerHTML=data.wind.speed;
    })  
    
}

// document.querySelector(".btn button").addEventListener(onclick(checkWeather(document.getElementById("a").value)))


// document.querySelector(".btn button").addEventListener("click",()=>{

//     checkWeather(document.getElementById("a").value);
// })

