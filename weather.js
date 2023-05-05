
// target to the all elements from the html 
let input = document.querySelector('#search')
let searchBtn = document.querySelector('.searchBtn')
let results = document.querySelector('.entireresult')
let ClearValueInput = document.querySelector('.fa-xmark').addEventListener("click",ClearInputvalues)
document.body.style.backgroundImage = "url('weather.webp')"

window.addEventListener('DOMContentLoaded', fetchdata)
input.addEventListener('keyup',fetchdata)

function ClearInputvalues(){
    input.value = ""
    fetchdata()
}

input.addEventListener('keypress',(e)=>{
    if(e.key == "Enter"){
        fetchdata()
    }
})

async function fetchdata() {
    let Searchvalue = input.value
    let  apiURl = Searchvalue == ""? 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d155da8fa4a20d79453b73bd3ce86aff':`https://api.openweathermap.org/data/2.5/weather?q=${Searchvalue}&appid=d155da8fa4a20d79453b73bd3ce86aff`
    const response = await fetch(apiURl);
    if (response.status === 200) {
        const data = await response.json()
        if(data.name != Searchvalue){
            // alert("Not found")
            console.log("not the matched the inputs values");
        }
        // assigned a city name 
        let city = data.name

        // assigned  a temperature value
        let temp = Math.round(data.main.temp - 273.15)

        // assigned a weatherimages
        let image = data.weather[0].icon

        // assigned to that country 
        let country = data.sys.country

        // assigned to the pressure 
        let pressure = data.main.pressure

        // assigned the visibility
        let visibility = data.visibility

        // assigned the weather description
        let description = data.weather[0].main
        
        // assign the wind value 
        let wind = data.wind.speed

        // assing to a all values in the container 
        let showResult = `<p class = 'city'>${city}</p>
                <p class = 'country'>${country}</p>
                <p class = 'temperature'>${temp}°c</p>
                <img class = 'cloudImg' src =http://openweathermap.org/img/w/${image}.png><div class = 'footer'><div>
                <p class = 'description'>${description}</p>
                <p class = 'pressure'>Pressure: ${pressure}mb</p></div><div>
                <p class = 'visibility'>Visibility: ${visibility}</p>
                <p class = 'wind'>wind: ${wind}</p></div></div>`
        results.innerHTML = showResult
    }
    else {
        console.log("error");
    }
}
