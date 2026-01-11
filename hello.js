// Program pertama saya!
console.log("Halo, Dunia!");
console.log("Nama saya: [Isi nama Anda]");

// Variabel
let umur = 20;
let nama = "Budi";

console.log("\nPerkenalan:");
console.log("Nama: " + nama);
console.log("Umur: " + umur + " tahun");

// Operasi matematika sederhana
let angka1 = 10;
let angka2 = 5;
let hasil = angka1 + angka2;

console.log("\nMatematika:");
console.log(angka1 + " + " + angka2 + " = " + hasil);
console.log(angka1 + " x " + angka2 + " = " + (angka1 * angka2));

// Kondisi if-else
console.log("\nCek umur:");
if (umur >= 17) {
    console.log(nama + " sudah boleh punya KTP!");
} else {
    console.log(nama + " belum boleh punya KTP.");
}

// Loop sederhana
console.log("\nHitung 1-5:");
for (let i = 1; i <= 5; i++) {
    console.log("Angka: " + i);
}