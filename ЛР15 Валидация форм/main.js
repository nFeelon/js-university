document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const surnameInput = document.getElementById('surname');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const aboutInput = document.getElementById('about');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors();

        if (surnameInput.value.length === 0) {
            showError(surnameInput, 'Поле не должно быть пустым!');
        } else if (surnameInput.value.length > 20) {
            showError(surnameInput, 'Поле не должно содержать более 20 символов!');
        } else if (!validateName(surnameInput.value)) {
            showError(surnameInput, 'Поле должно содержать только символы русского и английского алфавита!');
        }

        if (nameInput.value.length === 0) {
            showError(nameInput, 'Поле не должно быть пустым!');
        } else if (nameInput.value.length > 20) {
            showError(nameInput, 'Поле не должно содержать более 20 символов!');
        } else if (!validateName(nameInput.value)) {
            showError(nameInput, 'Поле должно содержать только символы русского и английского алфавита!');
        }

        if (emailInput.value.length === 0) {
            showError(emailInput, 'Поле не должно быть пустым!');
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Недопустимый формат!');
        }

        if (phoneInput.value.length === 0) {
            showError(phoneInput, 'Поле не должно быть пустым!');
        } else if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Недопустимый формат!');
        }

        if (aboutInput.value.length === 0) {
            showError(aboutInput, 'Поле не должно быть пустым!');
        } else if (!validateAbout(aboutInput.value)) {
            showError(aboutInput, 'Поле не должно содержать более 250 символов!');
        }

        if (checkErrors() && confirmed()) {
            form.submit();
        }
    });

    function clearErrors() {
        const errorElements = document.querySelectorAll('.errors li');
        errorElements.forEach(el => {
            el.remove();
        })
    }

    function showError(input, message = 'Неизвестная ошибка') {
        const errorList = input.nextElementSibling;
        const errorItem = document.createElement('li');
        errorItem.textContent = message;
        errorList.appendChild(errorItem);
    }

    function checkErrors() {
        const errorElements = document.querySelectorAll('.errors li');
        return errorElements.length === 0;
    }

    function confirmed() {
        const cityInput = document.getElementById("city");
        const bstuInput = document.getElementById("bstu");
        const courseInput = document.querySelector("[name='course']:checked");

        if (cityInput.value !== "minsk" && courseInput.value != 3 && !bstuInput.checked) {
            const answer = confirm("Вы уверены?");
            return answer;
        }
        return true;
    }

    //Валидация
    function validateName(value) {
        const pattern = /^[A-Za-zА-Яа-я]+$/;
        return pattern.test(value);
    }

    function validateEmail(value) {
        const pattern = /^\S+@[A-Za-z]{2,6}\.[A-Za-z]{2,3}$/;
        return pattern.test(value);
    }

    function validatePhone(value) {
        const pattern = /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        return pattern.test(value);
    }

    function validateAbout(value) {
        return value.length <= 250;
    }
});