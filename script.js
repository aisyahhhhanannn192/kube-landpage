function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  return data !== null && isNumber(data.zipCode) && checkboxIsChecked();
}

function submit(event) {
  event.preventDefault();
  const data = handleGetFormData();
  const warning = document.getElementById("warning");

  if (!validateFormData(data)) {
    warning.innerText = "Periksa form anda sekali lagi.";
  } else {
    warning.innerText = "";
  }
}

document.getElementById("form-order").addEventListener("submit", submit);
