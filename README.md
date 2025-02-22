# Pendahuluan

## Latar Belakang

Dalam kehidupan sehari-hari, mencatat aktivitas yang telah dilakukan dapat membantu seseorang dalam mengelola waktu, meningkatkan produktivitas, dan merefleksikan kegiatan yang telah dikerjakan. Dengan adanya sistem pencatatan logbook yang rapi, pengguna dapat lebih mudah melacak progres pekerjaan, kebiasaan, serta pencapaian mereka.

Saat ini, banyak orang masih mencatat aktivitas secara manual di buku atau menggunakan aplikasi catatan sederhana tanpa fitur pencarian dan filter yang memadai. Oleh karena itu, diperlukan solusi berbasis website yang dapat menyimpan catatan aktivitas dengan fitur CRUD (Create, Read, Update, Delete) serta tambahan fitur seperti pencarian, filter, dan eksport data agar pengguna dapat mengelola logbook mereka dengan lebih efektif.

## Tujuan

Website logbook personal ini bertujuan untuk:

1. Mempermudah pencatatan aktivitas harian dengan sistem digital yang terstruktur.
2. Menyediakan fitur pencarian dan filter untuk menemukan dengan cepat.
3. Memungkinkan pengguna untuk mengedit dan menghapus catatan yang telah dibuat.
4. Menyediakan fitur ekspor logbook kedalam format PDF atau Excel untuk kebutuhan dokumentasi.
5. Memberikan pengalaman pengguna yang intuitif dengan desain antarmuka yang sederhana dan mudah digunakan.

## Ruang Lingkup

Proyek ini mencakup pengembangan website logbook dengan fitur utama sebagai berikut:

1. Manajemen Logbook
   Pengguna dapat menambahkan, melihat, mengedit, dan menghapus catatan aktivitas harian.
2. Filter dan pencarian
   Memungkinkan pengguna untuk menyaring catatan berdasarkan tanggal, kategori, atau kata kunci.
3. Statistik dan ringkasan (Optional)
   Menampilkan aktivitas dalam bentuk grafik atau tabel.
4. User Authentication (Optional)
   Pengguna dapat memiliki akun pribadi untuk menyimpan logbook secara aman.
5. Export Data
   Memungkinkan pengguna mengunguh logbook dalam format PDF/Excel.

Website ini akan dikembangkan dengan teknologi berbasis web menggunakan NextJS untuk frontend dan NodeJS dengan ExpressJS untuk backend, serta MongoDB sebagai database.

# Analisis Kebutuhan

## Target Pengguna

Webite logbook personal ini ditujukan untuk individu yang ingin mencatat aktivitas harian mereka secara digital dengan kemudahan akses dan pengelolaan data. Target pengguna meliputi:

1. Mahaiswa yang ingin mencatat progres belajar atau proyek.
2. Pekerja professional yang ingin mendokumentasikan pekerjaan harian mereka.
3. Freelancer atau pekerja remote yang membutuhkan pecatatan tugas dan proyek.
4. Siapa saja yang ingin membangun kebiasaan produktif dengan mencatat aktivitas.

## Kebutuhan Fungsional

Fitur yang harus ada dalam website logbook meliputi:

1. Manajemen Logbook
   - Pengguna dapat membuat catatan aktivitas harian.
   - Pengguna dapat melihat daftar logbook yang telah dibuat.
   - Pengguna dapat mengedit atau memperbarui catatan logbook.
   - Pengguna dapat menghapus logbook yang tidak diperlukan.
2. FIlter dan Pencarian
   - Pengguna dapat mencari logbook berdasarkan kata kunci.
   - Pengguna dapat memfilter log berdasarkan tanggal atau kategori aktivitas.
3. User Authentication (Opsional)
   - Pengguna dapat mendaftar dan login untuk menyimpan catatan secara pribadi.
   - Setiap pengguna hanya dapat mengakses catatan miliknya.
4. Eksport Data
   - Pengguna dapat mengunduh logbook dalam format PDF atau Excel.
5. Statistik dan Ringkasan Aktivitas.
   - Menampilkan jumlah log yang dibuat dalam periode tertentu.
   - Grafik visualisasi aktivitas dalam bentuk chart.

## Kebutuhan Non-Fungsional

Faktor teknis dan kualitas yang harus diperhatikan dalam pengembangan:

1. Kemudahan Pengguna
   UI/UX harus intuitif agar penguna dapat mencatat aktivitas dengan cepat.
2. Keamanan
   ika ada autentikasi, data harus dienkripsi dan aman dari akses tidak sah.
3. Responsiveness
   Website harus bisa diakses dengan baik di berbagai prangkat (mobile, tablet, dan dekstop).
4. Kecepatan Akses
   Sistem harus mampu menangani banyak entri tanpa mengurangi performa.
5. Skalabilitas
   Jika jumlah pengguna meningkat, sistem dapat diperluas dengan mudah.

## Flow Pengguna (User Journey)

1. Pengguna membuka website
2. (Optional) Login atau daftar akun
3. Menambah catatan aktivitas
4. Melihat daftar logbook yang telah dibuat
5. Mengedit atau menghapus catatan jika diperlukan
6. Menggunakan fitur pencarian dan filter untuk menemukan catatan tertentu
7. (Optional) Mengekspor data logbook ke format PDF atau Excel

# Rancangan Sistem

## Arsitektur Sistem

Sistem akan dikembangkan menggunakan teknologi NextJS untuk frontend, ExpressJS untuk backend, dan MongoDB sebagai database. Berikut adalah arsitektur sistemnya:

### Arsitektur Umum

1. Frontend (NextJS)
   - Menyediakan antarmuka pengguna untuk mengelola logbook.
   - Menggunakan API untuk berkomunikasi dengan backend.
   - Mendukung SSR (Server-Side Rendering) dan CSR (Client-Side Rendering) untuk performa optimal.
2. Backend (ExpressJS)
   - Mengelola operasi CRUD untuk logbook.
   - Menggunakan REST API untuk komunikasi dengan frontend.
   - Menghandle autentikasi pengguna (jika diperlukan).
3. Database (MongoDB + Mongoose)
   - Menyimpan data logbook pengguna.
   - Menggunakan skema NoSQL untuk fleksibilitas data.
4. Authentication (Optional: JWT/ NextAuthJS)
   - Jika ada autentikasi, sistem dapat menggunakan JWT untuk token-based authentication atau NextAuthJS untuk OAuth dan login sosial media.

### Teknologi yang digunakan

| Komponen                  | Teknologi                                                               |
| ------------------------- | ----------------------------------------------------------------------- |
| Frontend                  | Next.js (React Framework), TailwindCSS (UI Styling)                     |
| Backend                   | Express.js, Node.js                                                     |
| Database                  | MongoDB, Mongoose (ODM)                                                 |
| Authentication (Opsional) | NextAuth.js / JWT                                                       |
| Deployment                | Vercel (Frontend), Railway / Render / DigitalOcean (Backend + Database) |

### Diagram Alur Sistem

Berikut adalah alur sistem dalam menangani proses CRUD logbook:

1. Pengguna membuka website dan login (optional).
2. Pengguna menambahkan catatan logbook melalui antarmuka NextJS.
3. Frontend mengirimkan request ke backend melalui API ExpressJS.
4. Backend memproses permintaan dan menyimpan data ke MongoDB.
5. Pengguna dapat melihat daftar logbook yang diambil dari MongoDB.
6. Pengguna dapat mengedit atau menghapus logbook.
7. Pengguna dapat mengekspor data logbook ke format PDF atau Excel.

### Stuktur Database

```mermaid
erDiagram
    USER {
        ObjectId userId PK
        string username
        string email UNIQUE
        string password
        date createdAt
        date updatedAt
    }
    LOGBOOK {
        ObjectId logbookId PK
        ObjectId userId FK
        string title
        string description
        date date
        string category "enum: Work, Study, Personal, Other"
        date createdAt
        date updatedAt
    }
    USER || --o{ LOGBOOK : "has"}
```

### API Endpoints (ExpressJS Routes)

| Method | Endpoint             | Deskripsi                        |
| ------ | -------------------- | -------------------------------- |
| POST   | `/api/auth/register` | Mendaftarkan pengguna baru       |
| POST   | `/api/auth/login`    | Login pengguna                   |
| GET    | `/api/logbooks`      | Mengambil semua logbook pengguna |
| POST   | `/api/logbooks`      | Menambahkan logbook baru         |
| GET    | `/api/logbooks/:id`  | Mengambil logbook berdasarkan ID |
| PUT    | `/api/logbooks/:id`  | Memperbarui logbook              |
| DELETE | `/api/logbooks/:id`  | Menghapus logbook                |

### Navigasi UI/UX

Wireframe Navigasi

1. Halaman Login/Register (Optional)
2. Dashboard
   - Menampilkan daftar logbook
   - Tombol tambah logbook
   - Filter dan pencarian
3. Form Tambah/Edit Logbook
4. Detail Logbook
5. Expor Data (PDF/Excel)

### Deployment and Hosting

1. Frontend (NextJS) -> Vercel
2. Backend (ExpressJS) -> Vercel
3. Database (MongoDB) -> MongoDB Atlas

# Rancangan UI/UX

## Atoms

Atoms adalah komponen paling kecil dalam desain UI, seperti tombol, input, ikon, dan teks. Daftar atoms yang digunakan:

1. Typography -> Heading, Paragraph, Label
2. Buttons -> Primary Button, Secondary Button, Icon Button
3. Inputs -> Text Input, Date Picker, Dropdown, Checkbox
4. Icons -> Search Icon, Add Icon, Edit Icon, Delete Icon
5. Loading & Spinner -> Animasi loading saat fetching data
6. Color System -> Primary (Biru/Hijau), Secondary, Neutral (Putih/Abu-abu), Danger (Merah untuk hapus)

## Molecules (Gabungan Beberapa Atoms)

Molecules adalah kombinasi dari beberapa atoms yang membentuk elemen UI lebih kompleks. Daftar molecules yang digunakan:

1. Form Group -> Kombinasi Label + Input
2. Button Group -> Sekumpulan tombol (contoh: simpan, batal)
3. Search Bar -> Input pencarian dengan ikon search
4. Filter component -> Dropdown kategori dan filter berdasarkan tanggal
5. Card Logbook -> Berisi judul log, tanggal, kategori, dan tombol Edit/Hapus
6. Pagination Component -> Navigasi Halaman

## Organisms (Gabungan Beberapa Molecules)

Organisms adalah kombinasi molecules yang membentuk bagian halaman aplikasi. Daftar organisms yang digunakan:

1. Navbar -> Logo, Profile User, Navigati Utama
2. Sidebar (Optional) -> Navigasi ke Dashboard, Stastitik, Pengaturan
3. Logbook List -> Daftar semua lgbook dalam bentuk card atau tabel
4. Form Logbook -> Form untuk menambah atau mengedit log
5. Detail Logbook View -> Tampilan detail logbook yang sudah dicatat
6. Statistik Panel (Optional) -> Grafik aktivitas harian/mingguan

## Templates (Struktur Halaman)

Templates menentukan layout dari halaman tanpa data dinamis. Daftar templates yang digunakan:

1. Template Dashboard
   - Navbar
   - Sidebar (optional)
   - Search Bar + Filter
   - Logbook List (Card/Table)
2. Template Tambah/Edit Logbook
   - Form Logbook
   - Button Simpan & Batal
3. Template Detail Logbook
   - Informasi logbook secara lengkap
   - Button Edit & Hapus
4. Template Statistik (Optional)
   - Grafik aktivitas
   - Ringkasan jumlah log

## Pages (Halaman UI)

Pages adalah implementasi akhir dari template dengan data dinamis. Daftar PAges yang digunakan:

1. Login / Register Page (Optional)
   - Form Login & Register
2. Dashboard Page
   - Menampilkan detail logbook yang telah dicatat
   - Tombol tambah log
   - Fitur pencarian & filter
3. Tambah/Edit Logbook Page
   - Form input untuk log baru
4. Detail Logbook Page
   - Menampilkan visualisasi data aktivitas
5. Statistik Page (Opsional)
   - Menampilkan visualisasi data aktivitas
6. Setting Page (Opsional)
   - Mengelola profil pengguna

# Implementasi

## Struktur Folder Proyek

```bash
/personal-logbook
├── /backend
|   ├── controllers (Business Logic)
|   ├── database
|   ├── models  (Schema MongoDB)
|   ├── routes  (API Routes)
|   ├── middlewares (Auth, Validation)
|   ├── server.js
|   ├── packages.json
|   ├── .env
├── /frontend
├── README.md
```

## Instalasi & Konfigurasi

### Instalasi Proyek

1. Clone Repository

```bash

```

2. Install Dependencies

```bash

```

3. Konfigurasi Environment

   - Backend

   ```bash

   ```

   - Frontend

   ```bash

   ```

4. Deployemnt & Hosting

```bash

```

### Testing & Evaluasi

1. Manual Testing: Cek Fitur CRUD Logbook.
2. API Testing: Gunakan POstman untuk menguji API Backend.
3. Responsiveness Test: Uji tampilan di desktop, tablet, dan mobile.

# Testing & Evaluasi

## Mode Pengujian

### Functinal Testing

Tujuan: Memastikan semua fitur utama berjalan sesuai spesifikasi.

1. CRUD Logbook
2. Pencarian & Filter
3. Autentikasi
4. Ekspor Data

### API Testing

Tujuan: Menguji API yang digunakan dalam komunikasi antara frontend dan backend
Uji setaip route atau endpoint

### UI/UX Testing

Tujuan: Memastikan tampilan dan interaksi pengguna berjalan lancar.
Uji responsive, usability test, dan loading serta error handling

### Performance Testing

Tujuan: Menguji kecepatan aplikasi dengan banyak pengguna atau data.

## Hasil Pengujian

## Evaluasi & Perbaikan

# Kesimpulan dan Pengembangan Selanjutnya

## Kesimpulan

## Pengembangan Selanjutnya

### Fitur tambahan yang dapat diimplementasikan

### Optimasi Performa dan Skalabilitas

## Potensi Pengguna & Dampak
