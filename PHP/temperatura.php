<?php
include '../PHP/include/header.php';
?>

<body>
  <div class="flex-conteiner">
    <div class="menu">
      <?php
      include '../PHP/include/menu.php';
      ?>
    </div>
    <div class="contorno">
      <div class="conteiner-cabecalho">
        <h1 class="page-title">
          Conversor de temperatura
        </h1>
        <p class="page-subtitle">
          Converta as temperaturas para Celsius, Fahrenheit ou Kelvin
        </p>
        <hr>
      </div>
      <div id="conversor">
        <input type="number" id="valor" size="2" placeholder="Insira o valor">
        <div class="conversor">
          <div class="number1">
            <select name="select" id="weatherF">
              <option value="">Selecionar</option>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </div>
          <!-- sdasdasd -->
          <div>
            <h2>Para</h2>
          </div>
          <!-- saddasd -->
          <div class="number2">
            <select name="select" id="weatherS">
              <option value="">Selecionar</option>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </div>

          <br>
        </div>
        <button type="submit" onclick="converterTemperatura()">Converter</button>
        <label for="valorConvertido" id="valorConvertido">O valor em _____ é de:</label>
      </div>
    </div>
  </div>
  <?php
  include '../PHP/include/footer.php';
  ?>