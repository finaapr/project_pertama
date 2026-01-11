// Module untuk data dan fungsi user

class User {
    constructor(nama, umur, email) {
        this.nama = nama;
        this.umur = umur;
        this.email = email;
    }

    // Method untuk menampilkan info user
    tampilkanInfo() {
        return `
========== INFO USER ==========
Nama  : ${this.nama}
Umur  : ${this.umur} tahun
Email : ${this.email}
===============================
        `;
    }

    // Cek apakah sudah dewasa
    cekDewasa() {
        return this.umur >= 17;
    }

    // Update umur
    tambahUmur() {
        this.umur++;
        return `Selamat ulang tahun ${this.nama}! Umur sekarang: ${this.umur}`;
    }
}

// Fungsi untuk validasi email sederhana
function validasiEmail(email) {
    return email.includes('@') && email.includes('.');
}

// Export class dan fungsi
module.exports = {
    User,
    validasiEmail
};