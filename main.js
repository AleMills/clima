
//Api obtenida de openweathermap.org
const api = {
    key: "f2f2ad9b70414a2214ab2bd6af76af03",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

const form = document.getElementById("form");
const search = document.getElementById("search");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const range = document.getElementById("range");
const date = document.getElementById("date");
const weather = document.getElementById("weather");
const img = document.getElementById("img-temp")
const card = document.getElementById("card")


//Funcion para convertir a celcius
const toCelcius = (kelvin) => Math.round(kelvin - 273.15)


//Funcion que hace la llamada a la API openweathermap
const searchQuery = async (search) => {
    try {
        const response = await fetch(`${api.url}?q=${search}&lang=es&appid=${api.key}`)
        const data = await response.json();
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        console.log(data);
        console.log(search);
        


        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelcius(data.main.temp)}°C`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelcius(data.main.temp_min)}°C - ${toCelcius(data.main.temp_max)}°C`;
        img.src = iconUrl;
        card.style.visibility = "visible"

    } catch (error) {
        console.log(error);
        
    }
};


//Funcion que previene y envia el formulario
const onSubmit = (e) => {
    e.preventDefault()
    searchQuery(search.value)
};



//Se añade un Listener al formulario
form.addEventListener("submit", onSubmit, true);