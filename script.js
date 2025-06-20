function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  return data !== null && isNumber(data.zipCode) && checkboxIsChecked();
}

function submit() {
  const data = handleGetFormData();
  const warning = document.getElementById("warning");

  if (!validateFormData(data)) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
  }
}
