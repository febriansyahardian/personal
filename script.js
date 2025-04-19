// Fungsi untuk menambahkan kelas 'fixed' pada header saat di-scroll
    window.onscroll = function() { 
        myFunction();
    };

    var header = document.querySelector("header");
    var sticky = header.offsetTop; // Jarak dari atas halaman

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky"); // Menambah kelas 'sticky' jika sudah discroll
        } else {
            header.classList.remove("sticky"); // Menghapus kelas 'sticky' jika di atas halaman
        }
    }




