
/* Menampilkan tahun secara otomatis di footer */
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

/* VALIDASI HALAMAN LOGIN */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const feedback = document.getElementById("loginFeedback");
  const togglePassword = document.getElementById("togglePassword");

  // Tombol untuk melihat atau menyembunyikan password
  togglePassword.addEventListener("click", () => {
    const passwordTersembunyi = passwordInput.type === "password";

    passwordInput.type = passwordTersembunyi ? "text" : "password";

    togglePassword.innerHTML = passwordTersembunyi
      ? '<i class="bi bi-eye-slash"></i>'
      : '<i class="bi bi-eye"></i>';

    togglePassword.setAttribute(
      "aria-label",
      passwordTersembunyi ? "Sembunyikan password" : "Tampilkan password"
    );
  });

  // Menghapus pesan kesalahan ketika pengguna mengetik ulang
  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
      feedback.textContent = "";
      feedback.className = "form-feedback mt-3";
    });
  });

  // Dijalankan ketika tombol Login ditekan
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    feedback.textContent = "";
    feedback.className = "form-feedback mt-3";

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let valid = true;

    // Memeriksa email kosong atau formatnya salah
    if (!email || !emailInput.checkValidity()) {
      emailInput.classList.add("is-invalid");
      valid = false;
    } else {
      emailInput.classList.remove("is-invalid");
    }

    // Memeriksa panjang password
    if (password.length < 8) {
      passwordInput.classList.add("is-invalid");
      valid = false;
    } else {
      passwordInput.classList.remove("is-invalid");
    }

    // Jika masih ada input yang salah
    if (!valid) {
      feedback.textContent =
        "Email atau password belum sesuai. Silakan periksa kembali.";
      feedback.classList.add("error");
      return;
    }

    // Jika seluruh input memenuhi ketentuan
    feedback.textContent =
      "Validasi berhasil! Ini simulasi login, bukan autentikasi akun sungguhan.";
    feedback.classList.add("success");
  });
}

/* VALIDASI FORM KONTAK */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const feedback = document.getElementById("contactFeedback");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    feedback.textContent = "";
    feedback.className = "form-feedback mt-3";

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      feedback.textContent =
        "Masih ada kolom yang belum sesuai. Periksa kembali.";
      feedback.classList.add("error");
      return;
    }

    feedback.textContent =
      "Semua kolom valid. Form ini hanya demonstrasi dan belum mengirim pesan.";
    feedback.classList.add("success");

    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
}