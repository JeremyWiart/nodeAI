const pwdBtn = document.getElementById('pwd-btn');
const emailBtn = document.getElementById('email-btn');
const pwdSection = document.getElementById('pwd-section');
const emailSection = document.getElementById('email-section');

pwdBtn.addEventListener('click', () => {
    pwdSection.classList.remove('hidden');
    emailSection.classList.add('hidden');
    pwdBtn.classList.add('text-blue-900');
    pwdBtn.classList.remove('text-gray-900');
    emailBtn.classList.add('text-gray-900');
    emailBtn.classList.remove('text-blue-900');
});

emailBtn.addEventListener('click', () => {
    emailSection.classList.remove('hidden');
    pwdSection.classList.add('hidden');
    emailBtn.classList.add('text-blue-900');
    emailBtn.classList.remove('text-gray-900');
    pwdBtn.classList.add('text-gray-900');
    pwdBtn.classList.remove('text-blue-900');
});