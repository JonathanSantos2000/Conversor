function Converter() {
    var selecedWeatherF = document.getElementById('weatherF').value;
    var selecedWeatherS = document.getElementById('weatherS').value;
    var temperaturaSelecionada = document.getElementById('valor').value;
    var valor = parseFloat(temperaturaSelecionada);
    switch (selecedWeatherF) {
        case 'celsius':
            if (selecedWeatherS == 'fahrenheit') {
                var convertido = ((valor / 5) * 9) + 32;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido + "ºF";

            } else if (selecedWeatherS == 'kelvin') {
                var convertido = ((valor / 5) * 5) + 273.15;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido + "K";

            } else {
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "Por favor selecione uma temperatura";
            }
            break;
        case 'fahrenheit':
            if (selecedWeatherS == 'celsius') {
                var convertido = ((valor - 32) / 9) * 5;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "ºC";

            } else if (selecedWeatherS == 'kelvin') {
                var convertido = (((valor - 32) / 9) * 5) + 273.15;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "K";

            } else {
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "Por favor selecione uma temperatura";
            }
            break;
        case 'kelvin':
            if (selecedWeatherS == 'celsius') {
                var convertido = ((valor - 32) / 9) * 5;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "ºC";

            } else if (selecedWeatherS == 'fahrenheit') {
                var convertido = (((valor - 32) / 9) * 5) + 273.15;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "K";

            } else {
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "Por favor selecione uma temperatura";
            }
            break;
        default:
            var valorConvertido = document.getElementById("valorConvertido");
            valorConvertido.innerHTML = "Por favor selecione uma temperatura";
            break;
    }

}