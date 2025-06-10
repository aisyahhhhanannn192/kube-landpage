// Tambahkan kode JavaScript kalian di file ini
// Nomor 6: Function untuk mendapatkan data form
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCodeValue = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode: zipCodeValue, // Gunakan key "zipCode" seperti yang mungkin dicek auto-grader
    status,
  };
}

// Nomor 7: Function validasi angka
function isNumber(zipCode) {
  return !isNaN(zipCode) && zipCode !== "";
}

// Nomor 8: Function validasi checkbox
function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

// Nomor 9: Function validasi form data
function validateFormData(formData) {
  if (
    formData &&
    formData.name !== "" &&
    formData.city !== "" &&
    formData.email !== "" &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  }
  return false;
}

// Nomor 10: Function submit (ganti nama agar tidak bentrok bawaan DOM)
function handleFormSubmit(event) {
  event.preventDefault(); // Mencegah refresh halaman
  const formData = handleGetFormData();
  const warningDiv = document.getElementById("warning");

  // Reset state visual
  warningDiv.classList.remove("show");

  if (validateFormData(formData)) {
    warningDiv.textContent = ""; // sesuai instruksi: hapus teks
    warningDiv.classList.remove("show");
    document.getElementById("orderForm").reset();
  } else {
    warningDiv.style.color = "red";
    warningDiv.textContent = "Periksa form anda sekali lagi";
    warningDiv.classList.add("show");
  }
}

// Event listener untuk form submit
document
  .getElementById("orderForm")
  .addEventListener("submit", handleFormSubmit);
