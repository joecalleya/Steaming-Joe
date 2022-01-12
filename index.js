

const url = 'http://192.168.1.41:8080/status';

// request options
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch(url,options)
.then(response => response.json())
.then(data => {
    // response is handled
    console.log(data)
    document.getElementById("icon__temp").innerText = data.temperature;
    document.getElementById("icon__fan").innerText = data.isFanActive;

    }
    )
    .catch(error =>
    {
    //error is handled
    console.log(error)

    }
    )

    const toggleFan = () => {
        fetch(url + 'fan')
    }