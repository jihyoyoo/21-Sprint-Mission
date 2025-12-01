// 요소 가져오기
const emailInput = document.getElementById('user-email');
const emailError = document.getElementById('email-error');

const passwordInput = document.getElementById('user-password');
const passwordError = document.getElementById('password-error');

const passwordToggleBtn = document.querySelector(".input-btn");
const passwordToggleImg = document.querySelector(".input-btn-img");

const loginButton = document.querySelector('.login-btn-toggle');

// 이메일
emailInput.addEventListener("blur", () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError(emailInput, emailError, "이메일을 입력해주세요.");
    updateLoginButtonState();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    updateLoginButtonState();
    return;
  }

  hideError(emailInput, emailError);
  updateLoginButtonState();
});


// 비밀번호
passwordInput.addEventListener("blur", () => {
  const MIN_PASSWORD_LENGTH = 8;
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
    showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    updateLoginButtonState();
    return;
  }

  if (passwordValue.length < MIN_PASSWORD_LENGTH) {
    showError(passwordInput, passwordError, `비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
    updateLoginButtonState();
    return;
  }

  hideError(passwordInput, passwordError);
  updateLoginButtonState();
});

function showError(inputElement, errorElement, message) {
  inputElement.classList.add("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(inputElement, errorElement) {
  inputElement.classList.remove("error");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// 비밀번호 눈모양 토글 
passwordToggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggleImg.src = "images/eye_open.png"; 
    } else {
      passwordInput.type = "password";
      passwordToggleImg.src = "images/eye_close.png"; 
    }
  });
;

//모든 요소가 조건에 충족하면 로그인 버튼 활성화하기
function updateLoginButtonState() {
  const isNotEmpty = 
    emailInput.value.trim() !== '' && 
    passwordInput.value.trim() !== '';

  const hasNoError = 
    !emailInput.classList.contains('error') &&
    !passwordInput.classList.contains('error');

  const allValid = isNotEmpty && hasNoError;

  if (loginButton) {
    if (allValid) {
      loginButton.classList.remove('disabled');
      loginButton.style.pointerEvents = 'auto'; 
    } else {
      loginButton.classList.add('disabled');
      loginButton.style.pointerEvents = 'none'; 
    }
  }
}

updateLoginButtonState();







