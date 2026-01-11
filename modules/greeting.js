// Module untuk fungsi-fungsi sapaan

function sayHello(nama) {
    return `Halo, ${nama}! Selamat datang di program JavaScript modular.`;
}

function sayGoodbye(nama) {
    return `Sampai jumpa, ${nama}! Terima kasih sudah belajar.`;
}

function greetByTime(nama) {
    const jam = new Date().getHours();
    
    if (jam < 12) {
        return `Selamat pagi, ${nama}!`;
    } else if (jam < 18) {
        return `Selamat siang, ${nama}!`;
    } else {
        return `Selamat malam, ${nama}!`;
    }
}

// Export fungsi agar bisa dipakai di file lain
module.exports = {
    sayHello,
    sayGoodbye,
    greetByTime
};