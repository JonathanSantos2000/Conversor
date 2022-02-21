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
                    Conversor de peso
                </h1>
                <p class="page-subtitle">
                    Digite um valor a ser convertido.
                </p>
                <hr>
            </div>
            <div id="conversor">
                <input type="number" id="valor" size="2" placeholder="Insira o valor">
                <div class="conversor">
                    <div class="number1">
                        <select name="select" id="weightF">
                            <option value="">Selecionar</option>
                            <option value="gramas">Gramas</option>
                            <option value="quilos">Quilos</option>
                            <option value="libras">Libras</option>
                            <option value="toneladas">Toneladas</option>
                        </select>
                    </div>
                    <!-- sdasdasd -->
                    <div>
                        <h2>Para</h2>
                    </div>
                    <!-- saddasd -->
                    <div class="number2">
                        <select name="select" id="weightS">
                            <option value="">Selecionar</option>
                            <option value="gramas">Gramas</option>
                            <option value="quilos">Quilos</option>
                            <option value="libras">Libras</option>
                            <option value="toneladas">Toneladas</option>
                        </select>
                    </div>

                    <br>
                </div>
                <button type="submit" onclick="converteTempo()">Converter</button>
                <label for="valorConvertido" id="valorConvertido">O valor _____ em _____ é de:</label>
            </div>
        </div>
    </div>
    <?php
    include '../PHP/include/footer.php';
    ?>