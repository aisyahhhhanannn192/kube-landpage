// 6. Function handleGetFormData
function handleGetFormData() {
  // Mengambil nilai dari setiap input berdasarkan ID
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked; // Untuk checkbox, ambil properti 'checked'

  // Mengembalikan objek dengan properti yang diminta
  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
}

// 7. Function isNumber
function isNumber(str) {
  // Menggunakan isNaN() untuk mengecek apakah string bukan angka
  // Jika str adalah '123', parseInt(str) akan jadi 123. isNaN(123) adalah false.
  // Jika str adalah 'abc', parseInt(str) akan jadi NaN. isNaN(NaN) adalah true.
  // Kita juga pastikan string tidak kosong.
  if (typeof str != "string" || str.trim() === "") {
    // Pastikan input adalah string dan tidak kosong
    return false;
  }
  // Jika parseInt menghasilkan angka dan tidak NaN, maka true
  // Catatan: isNaN('') adalah true, isNaN(' ') adalah true, isNaN(null) adalah false (0), isNaN(true) adalah false (1)
  // Jadi lebih baik konversi ke Number() atau parseInt() dulu.
  return !isNaN(Number(str)); // Menggunakan Number() untuk konversi yang lebih robust, lalu isNaN.
}

// 8. Function checkboxIsChecked
function checkboxIsChecked() {
  // Mengambil objek data dari handleGetFormData
  const formData = handleGetFormData();
  // Mengembalikan nilai boolean dari properti 'status' (yang didapat dari checkbox)
  return formData.status;
}

// 9. Function validateFormData
function validateFormData(formData) {
  // 1. Cek apakah objek tidak null (ada isinya)
  if (formData === null) {
    return false;
  }

  // 2. Cek apakah properti name, email, city, zipCode tidak kosong (string kosong juga dianggap false)
  // Properti 'status' tidak perlu dicek kosong karena dia boolean (true/false)
  if (
    formData.name === "" ||
    formData.email === "" ||
    formData.city === "" ||
    formData.zipCode === ""
  ) {
    return false;
  }

  // 3. Cek apakah zipCode adalah angka menggunakan isNumber
  const isZipCodeValid = isNumber(formData.zipCode);

  // 4. Cek apakah checkbox 'status' dicentang menggunakan checkboxIsChecked
  const isStatusChecked = checkboxIsChecked(); // Memanggil fungsi yang sudah ada

  // Mengembalikan true jika semua kondisi terpenuhi (menggunakan operator &&)
  return isZipCodeValid && isStatusChecked;
}

// 10. Function submit dan Event Listener
function submit(event) {
  // Mencegah refresh halaman saat form disubmit
  event.preventDefault();

  // Mengambil data dari form
  const formData = handleGetFormData();
  // Mendapatkan elemen warning
  const warningDiv = document.getElementById("warning");

  // Melakukan validasi
  const isValid = validateFormData(formData);

  if (!isValid) {
    // Jika validasi mengembalikan false
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    // Jika validasi mengembalikan true
    warningDiv.textContent = ""; // Hapus teks warning
    // Optional: Di sini kamu bisa tambahkan logic untuk mengirim data form
    // Misalnya: alert("Form berhasil disubmit!");
    // console.log("Data berhasil disubmit:", formData);
    // document.getElementById('myForm').reset(); // Mengosongkan form
  }
}

// Menghubungkan function submit dengan form pada file HTML
// Ambil elemen form berdasarkan ID
const myForm = document.getElementById("myForm");

// Tambahkan event listener untuk 'submit'
// Penting: pastikan script.js diletakkan di akhir body HTML agar elemen form sudah ada
if (myForm) {
  // Cek apakah form ditemukan
  myForm.addEventListener("submit", submit);
} else {
  console.error("Form dengan ID 'myForm' tidak ditemukan!");
}
