function converteTempo() {
    var selecedTimerF = document.getElementById('timerF').value;
    var selecedTimerS = document.getElementById('timerS').value;
    var tempoSelecionada = document.getElementById('valor').value;
    var valor = parseFloat(tempoSelecionada);
    switch (selecedTimerF) {
        case 'segundos':
            switch (selecedTimerS) {
                case 'minutos':
                    var convertido = valor / 60;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "segundo(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " minuto(s).";
                    break;
                case 'horas':
                    var convertido = valor / 3600;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "segundo(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " hora(s).";
                    break;
                case 'dias':
                    var convertido = valor / 86400;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "segundo(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " dia(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione uma tempo";
                    break;
            }
            break;
        case 'minutos':
            switch (selecedTimerS) {
                case 'segundos':
                    var convertido = valor * 60;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "minuto(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " segundo(s).";
                    break;
                case 'horas':
                    var convertido = valor / 60;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "minuto(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " hora(s).";
                    break;
                case 'dias':
                    var convertido = valor / 1440;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "minuto(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " dia(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione uma tempo";
                    break;
            }
            break;
        case 'horas':
            switch (selecedTimerS) {
                case 'segundos':
                    var convertido = valor * 3600;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "hora(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " segundo(s).";
                    break;
                case 'minutos':
                    var convertido = valor * 60;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "hora(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " minuto(s).";
                    break;
                case 'dias':
                    var convertido = valor / 24;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "hora(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " dia(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione uma tempo";
                    break;
            }
            break;
        case 'dias':
            switch (selecedTimerS) {
                case 'segundos':
                    var convertido = valor * 86400;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "dia(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " segundo(s).";
                    break;
                case 'minutos':
                    var convertido = valor * 1440;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "dia(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " minuto(s).";
                    break;
                case 'horas':
                    var convertido = valor * 24;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "dia(s) em " + selecedTimerS + " é de: " + convertido.toFixed(1) + " Hora(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione uma tempo";
                    break;
            }
            break;
        default:
            var valorConvertido = document.getElementById("valorConvertido");
            valorConvertido.innerHTML = "Por favor selecione uma tempo";
            break;
    }

}

/* --------------------------------------------------FIM-------------------------------------------------------- */
/* ---------------------------------------------INICIO CONVERSOR------------------------------------------------ */
/* -----------------------------------------------Temperatura--------------------------------------------------- */

function converterTemperatura() {
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
                var convertido = valor - 273.15;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "ºC";

            } else if (selecedWeatherS == 'fahrenheit') {
                var convertido = (((valor - 273.15) / 5) * 9) + 32;
                var valorConvertido = document.getElementById("valorConvertido");
                valorConvertido.innerHTML = "O valor em " + selecedWeatherS + " é de: " + convertido.toFixed(2) + "ºF";

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