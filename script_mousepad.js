// Insert angka ke dalam textarea
function insert(num) {
    document.getElementById('result').value += num;
}

// Hitung hasil
function hasil() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = eval(result);
}

// Bersihkan textarea
function clean() {
    document.getElementById('result').value = '';
}

// Hapus satu karakter dari textarea
function hapus() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
}

// Script untuk menangani tombol-tombol yang ditekan pada kalkulator
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.calculator .buttons button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonValue = this.textContent;
            if (buttonValue === '=') {
                hasil();
            } else if (buttonValue === 'C') {
                clean();
            } else {
                insert(buttonValue);
            }
        });
    });
});
