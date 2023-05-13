const modal = document.getElementById("modalLogin");
const loginContainer = document.getElementById("loginContainer");
const registrationContainer = document.getElementById("registrationContainer");
const recoveryContainer = document.getElementById("recoveryContainer");

document.getElementById("body").onload = function() {
    
    document.getElementById("showLogin").addEventListener("click", function() {
        showLogin();
    });
    document.getElementById("swapLoginToRegistration").addEventListener("click", swapLoginToRegistration);
    document.getElementById("swapLoginToRecovery").addEventListener("click", swapLoginToRecovery);

    document.getElementById("showRegistration").addEventListener("click", function() {
        showRegistration();
    });
    document.getElementById("swapRegistrationToLogin").addEventListener("click", swapRegistrationToLogin);

    document.getElementById("showRecovery").addEventListener("click", function() {
        showRecovery();
    });
    document.getElementById("swapRecoveryToLogin").addEventListener("click", swapRecoveryToLogin);

    window.addEventListener("click", function(e){
        if (e.target == modal){
            closeModal();
        }
    })
}

function showRecovery() {
    showModal();
    showRecoveryContainer();
}

function swapRecoveryToLogin() {
    hideRecoveryContainer();
    showLoginContainer();
}

function swapLoginToRegistration() {
    hideLoginContainer();
    showRegistrationContainer();
}

function swapLoginToRecovery() {
    hideLoginContainer();
    showRecoveryContainer();
}

function swapRegistrationToLogin() {
    hideRegistrationContainer();
    showLoginContainer();
}

function showRegistration() {
    showModal();
    showRegistrationContainer();
}

function showLogin() {
    showModal();
    showLoginContainer();
}

function closeModal() {
    hideLoginContainer();
    hideRegistrationContainer();
    hideRecoveryContainer();
    hideModal();
}

function showRecoveryContainer() {
    recoveryContainer.style.display = "inline-block";
}

function hideRecoveryContainer() {
    recoveryContainer.style.display = "none";
}

function showRegistrationContainer() {
    registrationContainer.style.display = "inline-block";
}

function hideRegistrationContainer() {
    registrationContainer.style.display = "none";
}

function showLoginContainer() {
    loginContainer.style.display = "inline-block";
}

function hideLoginContainer() {
    loginContainer.style.display = "none";
}

function showModal() {
    modal.style.display = "flex";
}

function hideModal() {
    modal.style.display = "none";
}