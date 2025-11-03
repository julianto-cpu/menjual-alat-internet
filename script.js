// script.js

// **PENTING:** Ganti dengan Nomor WhatsApp Anda yang sebenarnya
const nomorWA = "6283175995601"; // Contoh: Ganti "6281234567890"

function pesanProduk(Etalase, hargaProduk) {
    // Format harga menjadi mata uang Rupiah
    const hargaFormatted = hargaProduk.toLocaleString('id-ID');
    
    // Teks pesan yang sudah terisi otomatis (menghilangkan kebingungan)
    const pesan = "Halo, saya ingin pesan produk:\n\n*{Nomor Produk}:* ${namaProduk}\n*Harga:* Rp ${hargaFormatted}\n\nMohon diinfokan total biaya dan proses pembayarannya. Terima kasih!";
    
    // Encode teks pesan agar aman di URL
    const pesanEncoded = encodeURIComponent(pesan);
    
    // Buat URL WhatsApp
    const urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
    
    // Buka link di tab baru
    window.open(urlWA, '_blank');
}