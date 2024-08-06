// Validar senha (requerida e deve conter pelo menos um caractere especial)

var boleanSenha, boleanConfirmSenha
var specialCharacters = /[!@#$%^&*()_+\-={}[\]|:;'"<>,.?/]/;

function validatePassword(password, confirmPassword) {
    if (password === "") {
        // displayPasswordMessage("Por favor, informe sua senha.");
        boleanSenha = false;
    } else if (!specialCharacters.test(password)) {
        // displayPasswordMessage("A senha deve conter pelo menos um caractere especial.");
        boleanSenha = false;
    } else {
        boleanSenha = true
    }

    // Validar confirmação de senha
    if (confirmPassword === "") {
        // displayConfirmPasswordMessage("Por favor, confirme sua senha.");
        boleanConfirmSenha = false;
    } else if (password !== confirmPassword) {
        // displayConfirmPasswordMessage("As senhas digitadas não correspondem. Por favor, digite novamente.");
        boleanConfirmSenha = false;
    } else {
        boleanConfirmSenha = true
    }

    if (boleanSenha == true && boleanConfirmSenha == true) {
        return true
    } else {
        return false
    }
}
function confirmAge(age) {
    if (age === "" || parseInt(age) < 18) {

        return false;
    } else {
        return true
    }
}

function onSubmit(password, confirmPassword, age) {
    const boleanPassword = validatePassword(password, confirmPassword)
    const boleanAge = confirmAge(age)

    if (boleanPassword == true && boleanAge == true) {
        return true
    } else {
        return false
    }
}

module.exports = { validatePassword, confirmAge, onSubmit }