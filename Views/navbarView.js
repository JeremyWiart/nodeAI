function navbarView(){
    return `<header class="bg-gradient-to-r from-black via-blue-900 to-black h-14 text-white border-2 border-white pt-1 pb-1 mt-2">
                <nav class="container mx-auto border-2 border-black font-bold text-center rounded-3xl py-2">
                    <a href="/Account" class="border border-white py-1 px-4">My Account</a> <a href="/Home" class="border border-white py-1 px-4 ml-2">Home</a>
                </nav>
            </header>`;

}

module.exports = navbarView;