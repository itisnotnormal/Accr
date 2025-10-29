const images = document.querySelectorAll(".background img");
let i = 0;

setInterval(() => {
    images[i].classList.remove("active");
    i = (i+1) % images.length;
    images[i].classList.add("active");
}, 5000);


document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fio = document.getElementById('fio').value.trim();
    const group = document.getElementById('group').value.trim();
    const speciality = document.getElementById('speciality').value;
    const phone = document.getElementById('phone').value.trim();
    const nomination = document.getElementById('nomination').value;

    const error = document.getElementById('error');
    const message = document.getElementById('message');

    error.textContent = '';
    message.textContent = '';


    if (!fio || !group || !speciality || !phone || !nomination) {
        error.textContent = "Заполните пожалуйста всю форму";
    }

    if (group.length <6) {
        error.textContent = "Заполните группу правильно";
    }

    if(error.textContent === '') {
        message.textContent = "Ваша заявка принята! Спасибо за участие.";
        message.classList.add('show');
        document.getElementById('regForm').reset();
    
        setTimeout(() => {
            message.classList.remove('show');
            message.textContent = '';
        }, 5000);
    }
})

function changeLang(lang) {
    if(lang == 'en') {
        document.getElementById('name').textContent = "College of Information Technology"
    }
    if(lang == 'ru') {
        document.getElementById('name').textContent = "Колледж Информационных Технологий"
    }
    if(lang == 'kz') {
        document.getElementById('name').textContent = "Ақпараттық технологиялар колледжі"
    }
}