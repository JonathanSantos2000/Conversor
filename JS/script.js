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


/* --------------------------------------------------FIM-------------------------------------------------------- */
/* ---------------------------------------------INICIO CONVERSOR------------------------------------------------ */
/* --------------------------------------------------Peso------------------------------------------------------- */

function converterPeso() {
    var selecedweightF = document.getElementById('weightF').value;
    var selecedweightS = document.getElementById('weightS').value;
    var weightSelect = document.getElementById('valor').value;
    var valor = parseFloat(weightSelect);
    switch (selecedweightF) {
        case 'gramas':
            switch (selecedweightS) {
                case 'quilos':
                    var convertido = valor / 1000;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + " grama(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " quilo(s).";
                    break;
                case 'libras':
                    var convertido = valor / 454;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + "grama(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " libra(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione um peso";
                    break;
            }
            break;
        case 'quilos':
            switch (selecedweightS) {
                case 'gramas':
                    var convertido = valor * 1000;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + " quilo(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " grama(s).";
                    break;
                case 'libras':
                    var convertido = valor * 2.205;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + " quilo(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " libra(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione um peso";
                    break;
            }
            break;
        case 'libras':
            switch (selecedweightS) {
                case 'gramas':
                    var convertido = valor * 454;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + " libra(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " grama(s).";
                    break;
                case 'libras':
                    var convertido = valor / 2.205;
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "O valor " + valor + " quilo(s) em " + selecedweightS + " é de: " + convertido.toFixed(1) + " quilo(s).";
                    break;
                default:
                    var valorConvertido = document.getElementById("valorConvertido");
                    valorConvertido.innerHTML = "Por favor selecione um peso";
                    break;
            }
            break;

    }
}