// 요소 가져오기
const emailInput = document.getElementById('user-email');
const emailError = document.getElementById('email-error');

const nicknameInput = document.getElementById('user-name');
const nicknameError = document.getElementById('name-error');

const passwordInput = document.getElementById('user-password');
const passwordError = document.getElementById('password-error');

const passwordCheckInput = document.getElementById('user-password-check');
const passwordCheckError = document.getElementById('password-check-error');

const passwordToggleBtn = document.querySelector(".input-btn-password");
const passwordToggleImg = document.querySelector("#toggle-img-password");

const passwordCheckToggleBtn = document.querySelector(".input-btn-password-check");
const passwordCheckToggleImg = document.querySelector("#toggle-img-check");

const signupButton = document.querySelector('.signup-btn-toggle');


// 이메일
emailInput.addEventListener("blur", () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError(emailInput, emailError, "이메일을 입력해주세요.");
    updateButtonState();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    updateButtonState();
    return;
  }

  hideError(emailInput, emailError);
  updateButtonState();
});

// 닉네임
nicknameInput.addEventListener("blur", () => {
  const nicknameValue = nicknameInput.value.trim();

  if (nicknameValue === "") {
    showError(nicknameInput, nicknameError, "닉네임을 입력해주세요.");
    updateButtonState();
    return;
  }

  hideError(nicknameInput, nicknameError);
  updateButtonState();
});

// 비밀번호
passwordInput.addEventListener("blur", () => {
  const MIN_PASSWORD_LENGTH = 8;
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
    showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    updateButtonState();
    return;
  }

  if (passwordValue.length < MIN_PASSWORD_LENGTH) {
    showError(passwordInput, passwordError, `비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
    updateButtonState();
    return;
  }

  hideError(passwordInput, passwordError);
  updateButtonState();
});

//비밀번호 확인
if (passwordCheckInput) {
  passwordCheckInput.addEventListener("blur", () => {
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();
  
    if(passwordCheckValue === "") {
      showError(passwordCheckInput, passwordCheckError, "비밀번호를 입력해주세요.");
      updateButtonState();
      return;
    }

    if(passwordValue !== passwordCheckValue) {
      showError(passwordCheckInput, passwordCheckError, "비밀번호가 일치하지 않습니다.");
      updateButtonState();
      return;
    }

    hideError(passwordCheckInput, passwordCheckError);
    updateButtonState();
  });
}

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

//비밀번호 눈모양 토글
if (passwordToggleBtn) {
    passwordToggleBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggleImg.src = "images/eye_open.png"; 
        } else {
            passwordInput.type = "password";
            passwordToggleImg.src = "images/eye_close.png"; 
        }
    });
}

if (passwordCheckToggleBtn) { 
  passwordCheckToggleBtn.addEventListener("click", () => {
    if (passwordCheckInput.type === "password") {
      passwordCheckInput.type = "text";
      passwordCheckToggleImg.src = "images/eye_open.png"; 
    } else {
      passwordCheckInput.type = "password";
      passwordCheckToggleImg.src = "images/eye_close.png"; 
    }
  });
}

//모든 요소가 조건에 충족하면 로그인 버튼 활성화하기
function updateButtonState() {
  const isNotEmpty = 
    emailInput.value.trim() !== '' &&
    (nicknameInput ? nicknameInput.value.trim() !== '' : true) && 
    passwordInput.value.trim() !== '' &&
    (passwordCheckInput ? passwordCheckInput.value.trim() !== '' : true);

  const hasNoError = 
    !emailInput.classList.contains('error') &&
    !(nicknameInput && nicknameInput.classList.contains('error')) &&
    !passwordInput.classList.contains('error') &&
    !(passwordCheckInput && passwordCheckInput.classList.contains('error'));
  
  const passwordsMatch = (passwordCheckInput) ? (passwordInput.value === passwordCheckInput.value) : true;

  const allValid = isNotEmpty && hasNoError && passwordsMatch;

  if (signupButton) {
    if (allValid) {
      signupButton.classList.remove('disabled');
      signupButton.style.pointerEvents = 'auto'; 
    } else {
      signupButton.classList.add('disabled');
      signupButton.style.pointerEvents = 'none'; 
    }
  }
}

updateButtonState();








