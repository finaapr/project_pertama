// Import semua module yang kita buat
const greeting = require('./modules/greeting');
const calculator = require('./modules/calculator');
const { User, validasiEmail } = require('./modules/user');

// ========== PROGRAM UTAMA ==========
console.log("=".repeat(50));
console.log("   PROGRAM JAVASCRIPT MODULAR");
console.log("=".repeat(50));

// 1. Menggunakan Module Greeting
console.log("\n--- 1. MODULE GREETING ---");
console.log(greeting.sayHello("Budi"));
console.log(greeting.greetByTime("Budi"));

// 2. Menggunakan Module Calculator
console.log("\n--- 2. MODULE CALCULATOR ---");
let angka1 = 15;
let angka2 = 3;

console.log(`${angka1} + ${angka2} = ${calculator.tambah(angka1, angka2)}`);
console.log(`${angka1} - ${angka2} = ${calculator.kurang(angka1, angka2)}`);
console.log(`${angka1} x ${angka2} = ${calculator.kali(angka1, angka2)}`);
console.log(`${angka1} / ${angka2} = ${calculator.bagi(angka1, angka2)}`);
console.log(`${angka1} pangkat ${angka2} = ${calculator.pangkat(angka1, angka2)}`);

let jariJari = 7;
console.log(`Luas lingkaran r=${jariJari} = ${calculator.hitungLuasLingkaran(jariJari).toFixed(2)}`);

// 3. Menggunakan Module User
console.log("\n--- 3. MODULE USER ---");

// Membuat object user baru
const user1 = new User("Budi Santoso", 20, "budi@email.com");
const user2 = new User("Siti Aminah", 16, "siti@email.com");

console.log(user1.tampilkanInfo());
console.log(`Apakah ${user1.nama} sudah dewasa? ${user1.cekDewasa() ? "Ya" : "Belum"}`);
console.log(`Email ${user1.email} valid? ${validasiEmail(user1.email) ? "Ya" : "Tidak"}`);

console.log("\n" + user2.tampilkanInfo());
console.log(`Apakah ${user2.nama} sudah dewasa? ${user2.cekDewasa() ? "Ya" : "Belum"}`);

// Tambah umur user
console.log("\n" + user2.tambahUmur());
console.log(`Sekarang apakah ${user2.nama} sudah dewasa? ${user2.cekDewasa() ? "Ya" : "Belum"}`);

// 4. Penutup
console.log("\n" + greeting.sayGoodbye("Budi"));
console.log("=".repeat(50));