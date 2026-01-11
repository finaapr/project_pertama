// Module untuk operasi matematika

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        return "Error: Tidak bisa dibagi dengan 0!";
    }
    return a / b;
}

function pangkat(a, b) {
    return Math.pow(a, b);
}

function hitungLuasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

// Export semua fungsi
module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    hitungLuasLingkaran
};