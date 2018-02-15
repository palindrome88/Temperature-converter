// Object literal with getter and setter accessor properties.

let globalTemp = {

    count : 0,
    currentTemp: "fahrenheit", // customizable when called
    temperature: 0,
    get currentTemp() {
        console.log("The temp is" );
        return this.currentTemp;
    },
    
    set currentTemp(value, temp) {
        currentTemp: value;
        temperature: temp;
        count++;

        console.log("Current name is %d", value);
        
        if (temp === "fahrenheit" && count > 1){
            //put the math here
        }

        if (temp === "celsius" && count > 1){
            //put the math here
        }
    }

}

function toCelsius () {
    globalTemp.currentTemp = "celsius";
    globalTemp.temperature = convertTemp;
}

function toFahrenheit () {

    globalTemp.currentTemp = "fahrenheit";
    globalTemp.temperature = convertTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var convertTemp = document.getElementById("temp-to-convert").innerText;
var fahrenheit = document.getElementById("temp-fah").checked;
var celsius = document.getElementById("temp-cel").;


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    
    
    console.log("event", clickEvent);
    if (fahrenheit === true ){ // if checked
        toFahrenheit();
    }
    if (celsius === true){ // if checked
        toCelsius();
    }


}
// If enter is pressed...

function EnterEvent(event)  {
    if (event.which == 13 || event.keyCode == 13) {
        if (fahrenheit === true ){ // if checked
            toFahrenheit();
        }
        if (celsius === true){ // if checked
            toCelsius();
        }
        return false;
    }
    return true;
};
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);