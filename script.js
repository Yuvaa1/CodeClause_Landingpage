const joinButton = document.querySelector("#join-button");
const connectButton = document.querySelector("#connect-button");
const startTrialBtn = document.querySelector("#startTrialBtn");
const modal = document.getElementById('trialModal');
const modalClose = document.getElementById('modalClose');
const trialForm = document.getElementById('trialForm');
const signUpSection = document.querySelector("#signup");

function handleJoinConnectClick(event) {
  console.log("Button clicked:", event.target.id);
  const buttonId = event.target.id;
  let title, message;

  if (buttonId === "join-button") {
    title = "Welcome to ConnectArc!";
    message = "Sign up now to unlock endless networking possibilities.Visit <a href='https://www.connectarc.com'> ConnectArc.com </a>to sign up.";
  } else if (buttonId === "connect-button") {
    title = "Hello!";
    message = "Please sign up or Upgrade to Premium to access the ConnectArc platform.Visit <a href='https://www.connectarc.com'> ConnectArc.com </a>to sign up.";
  }

  const customModal = document.getElementById("customModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  customModal.style.display = "block";
  modalTitle.textContent = title;
  modalMessage.innerHTML = message;

  const modalAction = document.getElementById("modalAction");
  modalAction.addEventListener("click", function () {
    customModal.style.display = "none";
  });
}

function openSignUpSection() {
  console.log("Sign up section opened.");
  signUpSection.style.display = "block";
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function handleFormSubmit(event) {
  event.preventDefault();
  const email = trialForm.querySelector('input[type="email"]').value;
  const password = trialForm.querySelector('input[type="password"]').value;

  if (email.trim() === '' || password.trim() === '') {
    alert('Please enter both email and password.');
  } else {
    alert(`Free trial started for email: ${email}`);
    closeModal();
  }
}
joinButton.addEventListener("click", handleJoinConnectClick);
connectButton.addEventListener("click", handleJoinConnectClick);
startTrialBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

trialForm.addEventListener("submit", handleFormSubmit);

const countdownDate = new Date('2023-08-31').getTime();
const timerElement = document.getElementById('timer');
let timer;

function updateTimer() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    timerElement.innerHTML = 'Deal Expired';
  }
}

updateTimer();
timer = setInterval(updateTimer, 1000);