function fetchAndDisplayImage() {
    const query = document.getElementById('imageUrlInput').value;
    const imageDisplay = document.getElementById('imageDisplay');

    if (query) {
        // Mengambil data dari API Lolhuman
        fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=wikenn&query=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.result) {
                    imageDisplay.src = data.result;  // Mengisi src dengan URL gambar
                    imageDisplay.style.display = 'block';  // Menampilkan gambar
                } else {
                    alert('Tidak ada hasil ditemukan untuk pencarian ini.');
                    imageDisplay.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat memproses permintaan.');
            });
    } else {
        alert('Masukkan kata kunci untuk pencarian.');
        imageDisplay.style.display = 'none';
    }
}
