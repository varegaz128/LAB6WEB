// 1. Mengubah teks judul dan pesan pengantar
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Form Pendaftaran Workshop";
pesan.textContent = "Silakan lengkapi data diri dan pilih sesi Anda.";

// 2. Penghitung Karakter Live Input Nama
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = "Jumlah karakter: " + namaInput.value.length;
});

// 3. Validasi Form Pendaftaran Workshop (Nama, Email, Usia, dan Sesi)
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const sesi = document.getElementById("sesi").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Nama lengkap wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Masukkan format email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Usia harus berupa bilangan bulat antara 17–100 tahun.";
    } else if (sesi === "") {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Silakan pilih salah satu sesi workshop terlebih dahulu.";
    } else {
        pesanForm.style.color = "green";
        pesanForm.textContent = "Validasi berhasil! Pendaftaran untuk " + sesi + " berhasil diproses.";
        form.reset();
    }
});

// Tombol reset membersihkan pesan form
document.getElementById("tombolReset").addEventListener("click", function () {
    pesanForm.textContent = "";
});

// 4. Aplikasi Daftar Tugas (To-Do List) Pendukung
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }
    
    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    
    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });
    
    item.append(label, selesai);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});