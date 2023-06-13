const search = document.getElementById("SearchBtn");
const inputfield = document.getElementById("inputfield");
const cityoutput = document.getElementById("cityoutput");
const temperature = document.getElementById("temperature");
// console.log(inputfield);
const gettemp = async (event) => {
    event.preventDefault();
    let inputVal = inputfield.value;
    // console.log(inputVal);
    if (inputVal === "") {
        cityoutput.innerText = "Plz write city name";
    } 
    else {
        try {
            let url =  `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=31ce1f704337b3a6b7dbca193f8a8694`;
            const response = await fetch(url);
            // console.log(response);
            const data =await response.json();
            const arrData = [data];
            console.log(arrData[0].main.temp);
            temperature.innerText = arrData[0].main.temp;
            cityoutput.innerText = `${arrData[0].name} | ${arrData[0].sys.country}`;
            } 
            catch(error){
                cityoutput.innerText = "Plz enter city name properly";
        }
        
    }
};
search.addEventListener("click",gettemp);


