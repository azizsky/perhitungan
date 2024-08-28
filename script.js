document.getElementById('bahanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mengambil nilai input dari form
    let panjang = parseFloat(document.getElementById('panjang').value);
    let lebar = parseFloat(document.getElementById('lebar').value);
    let hargaPerCm2Input = document.getElementById('hargaLaminasi').value;
    let hargaPerCm2 = hargaPerCm2Input ? parseFloat(hargaPerCm2Input) : 0; // Menggunakan nilai default 0 jika input kosong
    let qtyLaminasi = parseInt(document.getElementById('qtyLaminasi').value);
    
    // Menghitung luas dalam cm²
    let luasCm2 = panjang * lebar;
    
    // Menghitung biaya laminasi
    let totalBiayaLaminasi = luasCm2 * hargaPerCm2 * qtyLaminasi;
    
    // Konversi luas ke px^2 dengan skala 1 cm = 3 px
    let panjangPx = panjang * 3;
    let lebarPx = lebar * 3;
    
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    
    // Atur ukuran canvas sesuai dengan panjang dan lebar yang diberikan
    canvas.width = panjangPx;
    canvas.height = lebarPx;
    
    // Membersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Menggambar kotak dengan garis horizontal dan vertikal
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(panjangPx, 0); // Garis horizontal bagian atas
    ctx.lineTo(panjangPx, lebarPx); // Garis vertikal kanan
    ctx.lineTo(0, lebarPx); // Garis horizontal bagian bawah
    ctx.lineTo(0, 0); // Garis vertikal kiri
    ctx.stroke();
    
    // Menampilkan hasil perhitungan
    let totalBiaya = document.getElementById('totalBiaya');
    totalBiaya.innerHTML = `Total biaya laminasi untuk ${luasCm2} cm² adalah Rp ${totalBiayaLaminasi.toLocaleString()}`;
});
