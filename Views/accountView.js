const headerView = require('./headerView');
const navbarView = require('./navbarView');
const footerView = require('./footerView');
const userView = require('./userView');
const errorChangePwdView = require('./errorViews/errorChangePwdView');
const okChangePwdView = require('./okViews/okChangePwdView');


function accountView(req,errorChangePwd,okChangePwd){

    return `<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Account Settings</title>
    <script src="/js/switch.js" defer></script>
    <script src="/js/showHideKey.js" defer></script>
    <script src="/js/infoHours.js" defer></script>
    <link rel="stylesheet" href="/css/homeView.css" />
    <link rel="stylesheet" href="/css/output.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" />
</head>

<body class="bg-gradient-to-r from-blue-900 via-black to-blue-900">
    ${headerView()}
    ${navbarView()}
    <main class="flex justify-center w-full pt-2 pb-4">
        <div class="w-full border-2 border-blue-600 flex-raw flex-wrap flex justify-between id="mainDiv">

            <section id="section_1" class="border-2 border-red-600 rounded-md bg-black py-2 px-2 w-80">
                <div id="div_1" class="border-2 border-white-600 h-full py-2 px-2 flex justify-center">
                    <article class="border-2 border-red-600 h-1/6 w-1/2 text-center">
                        <h1 class="text-white"> article module 1</h1>
                    </article>
                </div>
            </section>

            <section id="section_2" class="border-2 border-red-600 rounded-md bg-black py-2 px-2 w-112 min-w-max h-124">
                <div id="div_2" class="border-2 border-white-600 h-full py-2 px-2 flex flex-col justify-center">
                    <article id="article_2" class="bg-gradient-to-r from-blue-900 via-black to-blue-900 border-2 border-red-600 h-1/6 p-2 mb-4 rounded-lg">
                        <h1 class="mb-2 text-red-600 font-bold border border-red-600 w-full rounded-lg text-center">Account Infos</h1>
                            <article class="flex border border-white rounded-lg p-1">
                                <p class="ml-4 text-white">API KEY :</p>
                                <p class="w-2/4 ml-14 text-black bg-white text-center rounded-lg hidden" id="ApiKey">sdsd55ZZ0ddc1sd1d</p>
                                <button class="ml-2 text-white bg-red-500 rounded-lg px-1 hidden" id="buttApiKeyHide">Hide Key</button>
                                <button class="ml-2 text-white bg-green-700 rounded-lg px-1" id="buttApiKeyShow">Show Key</button>
                            </article>
                    </article>

                    <article class="flex flex-col items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 border-2 border-red-600 rounded-lg p-4" id="article_2">
                        <h1 class="mb-4 text-red-600 font-bold border border-red-600 w-full rounded-lg text-center">Account Settings</h1>
                            <div class="bg-gradient-to-r from-blue-900 via-black to-blue-900 border border-red-600 rounded-lg w-full max-w-lg min-w-max">
                                <div class="flex justify-around flex-wrap bg-gray-200 p-4 rounded-t-lg">
                                    <button class="text-blue-800 font-semibold" id="pwd-btn">Change Password</button>
                                    <button class="text-blue-800 font-semibold" id="email-btn">Change Email</button>
                                </div>
                            

                            <section id="pwd-section" class="m-2 p-4">
                                <form action="/Account" method="POST">
                                    <div class="mb-4">
                                        <lable for="oldPassword" class="block text-white">Old Password</label>
                                        <input type="password" id="oldPassword" name="oldPassword" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <lable for="newPassword" class="block text-white">New Password</label>
                                        <input type="password" id="newPassword" name="newPassword" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <lable for="rpNewPassword" class="block text-white">Repeat New Password</label>
                                        <input type="password" id="rpNewPassword" name="rpNewPassword" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <button type="submit" name="changePwd" class="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Change Password</button>
                                    </div>
                                </form>
                                ${errorChangePwd ? errorChangePwdView() : errorChangePwd=[]}
                                ${okChangePwd ? okChangePwdView() : okChangePwd=[]}
                            </section>

                            <section id="email-section" class="m-2 p-4 hidden">
                                <form action="/Account" method="POST">
                                    <div class="mb-4">
                                        <lable for="oldEmail" class="block text-white">Old Email</label>
                                        <input type="email" id="oldEmail" name="OldEmail" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <lable for="newEmail" class="block text-white">New Email</label>
                                        <input type="email" id="newEmail" name="newEmail" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <lable for="rpNewEmail" class="block text-white">Repeat New Email</label>
                                        <input type="email" id="rpNewEmail" name="rpNewEmail" class="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-900" />
                                    </div>
                                    <div class="mb-4">
                                        <button type="submit" name="changeEmail" class="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Change Email</button>
                                    </div>
                                </form>
                            </section>



                            </div>
                    </article>

                </div>
            </section>

             <section id="section_3" class="border-2 border-red-600 rounded-md bg-black py-2 px-2 w-80">
                <div id="div_3" class="border-2 border-green-400 rounded-md h-full py-2 px-2">
                    <article id="article_3" class="bg-gradient-to-r from-blue-900 via-black to-blue-900 rounded-md border-2 border-red-600 h-40 text-center flex-col justify-center py-2 px-2">
                        <h1 class="text-white font-bold border border-red-600 w-full rounded-lg mb-2">Account</h1>
                            ${userView(req)}
                    </article>
                </div>
            </section>

        </div>
    </main>
    ${footerView()}
</body>

</html>`;
}

module.exports = accountView;