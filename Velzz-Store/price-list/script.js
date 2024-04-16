const dataProduk = [
    {
        kode: "PUL5000",
        produk: "Pulsa Reguler 5.000",
        catatan: "Telkomsel",
        harga: 7000,
        hargaMember: 6000,
        hargaReseller: 7200,
        kategori: "pulsa"
    },
    {
        kode: "FF5",
        produk: "5 Diamond",
        catatan: "Free Fire",
        harga: 5000,
        hargaMember: 4000,
        hargaReseller: 4800,
        kategori: "game"
    },
    {
        kode: "FF12",
        produk: "12 Diamond",
        catatan: "Free Fire",
        harga: 10000,
        hargaMember: 8000,
        hargaReseller: 9600,
        kategori: "game"
    },
    // Tambahkan data produk lain disini...
];

const dataProdukElement = document.getElementById("data-produk");

function filterDataProduk() {
    const kategoriDipilih = document.getElementById("kategori").value;

    dataProdukElement.innerHTML = "";

    dataProduk.forEach(produk => {
        if (kategoriDipilih === "semua" || kategoriDipilih === produk.kategori) {
            const row = dataProdukElement.insertRow();
