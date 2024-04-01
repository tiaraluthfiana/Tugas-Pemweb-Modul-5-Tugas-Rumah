document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen textarea
    var textarea = document.getElementById('result');
    
    // Menambahkan event listener untuk menangkap input keyboard
    document.addEventListener('keydown', function (event) {
        var key = event.key;
        
        // Menangani input dari keyboard sesuai dengan tombol yang ditekan
        if (/[0-9\/\*\+\-\.\r\n]/.test(key)) {
            event.preventDefault(); // Menghentikan perilaku default dari tombol
            insert(key);
        } else if (key === 'Backspace') {
            event.preventDefault(); // Menghentikan perilaku default dari tombol
            hapus();
        } else if (key === 'Enter') {
            event.preventDefault(); // Menghentikan perilaku default dari tombol
            hasil();
        } else if (key === 'C' || key === 'c') {
            clean();
        }
    });
    
    // Fungsi untuk memasukkan karakter ke textarea
    function insert(character) {
        textarea.value += character;
    }
    
    // Fungsi untuk menghapus karakter terakhir dari textarea
    function hapus() {
        textarea.value = textarea.value.slice(0, -1);
    }
    
    // Fungsi untuk membersihkan textarea
    function clean() {
        textarea.value = '';
    }
    
    // Fungsi untuk mengevaluasi ekspresi matematika dalam textarea
    function hasil() {
        var result;
        try {
            result = eval(textarea.value);
        } catch (error) {
            result = 'Error';
        }
        textarea.value = result;
    }
});
