# 🌐 Mini Project — Form Pendaftaran Workshop (JavaScript DOM)

Proyek web interaktif ini dikembangkan untuk memenuhi tugas **Mini Project — Form Pendaftaran Workshop** pada Modul Praktikum Pemrograman Web (Pertemuan 7). Proyek ini memanfaatkan manipulasi **Document Object Model (DOM)**, penanganan *event*, serta validasi formulir sisi klien (*client-side validation*).

---

## 🎯 Fitur & Persyaratan Mini Project

Sesuai dengan spesifikasi tugas modul praktikum, proyek ini mengimplementasikan:

1. **Validasi Input Formulir**:
   * **Nama Lengkap**: Memastikan kolom nama tidak boleh kosong.
   * **Email**: Validasi format email menggunakan ekspresi reguler (*Regex*).
   * **Usia**: Memastikan input berupa angka bulat dalam rentang 17–100 tahun.
   * **Pilihan Sesi**: Memastikan pengguna memilih sesi workshop (*Sesi 1: Pagi* atau *Sesi 2: Siang*).

2. **Penghitung Karakter Live (*Real-Time Character Counter*)**:
   * Menghitung dan menampilkan jumlah karakter dari input nama secara langsung saat pengguna mengetik menggunakan event `input`.

3. **Umpan Balik Pesan Interaktif**:
   * Menampilkan **pesan kesalahan (warna merah)** jika terdapat input yang belum sesuai.
   * Menampilkan **pesan sukses (warna hijau)** jika seluruh data berhasil divalidasi.

4. **Tombol Reset / Hapus Input**:
   * Tombol untuk mengosongkan seluruh kolom masukan formulir dan membersihkan pesan validasi yang tampil di layar.

5. **Aplikasi Fitur Pendukung (Daftar Tugas / To-Do List)**:
   * Fitur interaktif tambahan untuk menambah tugas, menangani pesan input kosong, serta menandai status tugas selesai (*strikethrough*).

6. **Event Listener Terintegrasi**:
   * Menggunakan `addEventListener()` untuk menangani *event* `submit`, `input`, `click`, dan `reset`.

---

## 📂 Struktur Berkas Proyek

Proyek disusun ke dalam tiga berkas terpisah (*Separation of Concerns*):

```text
📁 mini-project-workshop/
 ┣ 📜 index.html   # Struktur elemen HTML & elemen form pendaftaran
 ┣ 📜 style.css    # Penataan gaya visual & kelas status CSS
 ┗ 📜 script.js    # Logika manipulasi DOM, validasi, dan event listener
```

---

## ⚙️ Cara Menjalankan Proyek

1. Simpan berkas `index.html`, `style.css`, dan `script.js` dalam satu folder yang sama.
2. Buka berkas `index.html` menggunakan peramban web (*web browser*) seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge.
3. Anda dapat langsung menguji pengisian form, validasi sesi, penghitung karakter, serta fitur daftar tugas.