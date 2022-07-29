

// Declare variables
const URI = 'https://restcountries.com/v3.1/all'
var countries

// Define functions
function get_countries(cb1,cb2){
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.status==200 && this.readyState==4){
            var responseObject = JSON.parse(this.responseText)
            cb1(responseObject)
            cb2(responseObject)
        }
    }
    xhttp.open("GET",URI)
    xhttp.send()
}
function make_countries_dropdown(data){
    // window.localStorage.setItem('countries',data)
    var optionList = []
    data.forEach(element => {
        optionList.push(`<option>${element.name.common}</option>`)
    })
    $("#countries").html(optionList.sort())
}
function populate_country_data(data){
    var selectedCountry = data.filter((item) => {return item.name.common=='Greece'})
    // console.log(selectedCountry.name)
    // $("#result-country").text(selectedCountry.name)
    // $("#result-continent").text(selectedCountry.continent)
    // $("#result-capital").text(selectedCountry.capital)
    // $("#result-population").text(selectedCountry.population)
    // $("#result-area").text(selectedCountry.area)
    // $("#result-currency").text(selectedCountry.flag)
}

// Main
$("#countries").on({
    click:function(){
        console.log('clicked')
        get_countries(make_countries_dropdown,populate_country_data)

    },
    // mouseover
    change:function(){
        console.log('changed')
        // console.log(window.localStorage.getItem('countries'))
        // console.log(window.localStorage.getItem('countries').filter((item)=>item.name.common=='Greece'))
    }
})