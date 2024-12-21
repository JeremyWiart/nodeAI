function showHideKey(){
    const btnApiKeyHide = document.getElementById('buttApiKeyHide');
    const btnApiKeyShow = document.getElementById('buttApiKeyShow');
    const btnApiKey = document.getElementById('ApiKey');

    btnApiKeyShow.addEventListener('click', () => {
        btnApiKey.classList.remove('hidden');
        btnApiKeyHide.classList.remove('hidden');
        btnApiKeyShow.classList.add('hidden');
        
    });

    btnApiKeyHide.addEventListener('click', () => {
        btnApiKey.classList.add('hidden');
        btnApiKeyHide.classList.add('hidden');
        btnApiKeyShow.classList.remove('hidden');
    });

}showHideKey();