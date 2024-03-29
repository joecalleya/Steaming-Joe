

const url = 'http://192.168.1.41:8080/';

// request options
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
const getData = (url, options) => {

    fetch(url + 'status',options)
    .then(response => response.json())
    .then(data => {
        // response is handled
        console.log(data)
        document.getElementById("icon__temp").innerText = data.temperature;
        document.getElementById("icon__fan").innerText = isFanActiveText(data.isFanActive);
        document.getElementById("icon__light").innerText = isLightActiveText(data.isLightActive);
        document.getElementById("icon__heat").innerText = isHeattActiveText(data.isHeatActive);
    }
        )
    .catch(error =>
        {
        //error is handled
        console.log(error)
        }
        )
}
    getData(url,options)

    const toggleFan = () => {
        console.log("toggleFan & refresh")
        fetch(url + 'fan')
        getData(url,options)

    }
    const toggleHeat = () => {
        console.log("toggleHeat & refresh")
        fetch(url + 'heat')
        getData(url,options)

    }  
    const toggleLight = () => {
        console.log("toggleLight & refresh")
        fetch(url + 'light')
        getData(url,options)

    }  
     const isFanActiveText = (isFanActive) => {
        if (isFanActive) {return "Fan On"}
        else {return "Fan Off"}
    }
    const isLightActiveText = (isLightActive) => {
        if (isLightActive) {return "Light On"}
        else {return "Light Off"}
    }
    const isHeattActiveText = (isHeatActive) => {
        if (isHeatActive) {return "Battery Heat On"}
        else {return "Battery Heat Off"}
    }