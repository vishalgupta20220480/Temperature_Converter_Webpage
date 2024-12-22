function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
  
    if (isNaN(temp)) {
      document.getElementById("result").textContent = "Please enter a valid number!";
      return;
    }
  
    let convertedTemp;
    if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
      convertedTemp = (temp * 9/5) + 32;
    } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
      convertedTemp = temp + 273.15;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
      convertedTemp = (temp - 32) * 5/9;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
      convertedTemp = (temp - 32) * 5/9 + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
      convertedTemp = temp - 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
      convertedTemp = (temp - 273.15) * 9/5 + 32;
    } else {
      convertedTemp = temp;
    }
  
    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${outputUnit}`;
  }
  