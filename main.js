document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearIt;

function tempConvert() {

    var celsius = 
    document.getElementById("celsius").value;
    var fahrenheit =
     document.getElementById("fahrenheit").value;

    if (celsius != "") {
        fahrenheit = (parseFloat(celsius) - 32) / 1.8;
    }
    else {
        celsius = (parseFloat(fahrenheit) * 1.8) + 32;
    }
    document.getElementById('celsius').value =
parseFloat(celsius).toFixed(1);
    document.getElementById('fahrenheit').value =
 parseFloat(fahrenheit).toFixed(1); 
}
function clearIt() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
}


