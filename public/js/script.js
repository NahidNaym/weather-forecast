
let form = document.getElementById('form1')
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    // console.log(document.getElementById('address').value)
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const longtude = document.getElementById('longtude')
const label1 = document.getElementById('label1')

// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            label1.innerText = ""
            longtude.innerText =""
            latitude.innerText = ""
        }
        else {
            // setTimeout(() => {
            //     locationF.innerText = data.location;
            //    }, 00);
            locationF.innerText = data.location;
           setTimeout(() => {
            forecastF.innerText = data.forecast
           }, 500);
           setTimeout(() => {
            label1.innerText = data.label
            longtude.innerText = data.longitude
            latitude.innerText = data.latitude
            errorF.innerText =""
           },1000);
           
        }
    }
    catch(e){
        console.log(e)
    }
}