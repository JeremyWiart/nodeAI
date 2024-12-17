const headerView = require('./headerView');
const navbarView = require('./navbarView');
const footerView = require('./footerView');


function homeView(){

    return `<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vocal Assitant</title>
    <link rel="stylesheet" href="/css/homeView.css" />
    <link rel="stylesheet" href="/css/output.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" />
</head>

<body class="bg-gradient-to-r from-blue-900 via-black to-blue-900">
    ${headerView()}
    ${navbarView()}
    <main class="flex justify-center w-full pt-2 pb-4">
        <div class="w-full border-2 border-blue-600 flex-raw flex-wrap flex justify-between id="mainDiv">

            <section id="section_1" class="border-2 border-red-600 rounded-md bg-black py-2 px-2">
                <div id="div_1" class="border-2 border-white-600 h-full py-2 px-2 flex justify-center">
                    <article class="border-2 border-red-600 h-1/6 w-1/2 text-center">
                        <h1 class="text-white"> article module 1</h1>
                    </article>
                </div>
            </section>
            <section id="section_2" class="border-2 border-red-600 rounded-md bg-black py-2 px-2 w-112 min-w-max h-124">
                <div id="div_2" class="border-2 border-white-600 h-full py-2 px-2 flex flex-col justify-between">
                    <article id="article_2" class="border-2 border-red-600 h-1/6 text-center">
                        <h1 class="text-white"> article module 1</h1>
                    </article>
                </div>
            </section>
             <section id="section_3" class="border-2 border-red-600 rounded-md bg-black py-2 px-2">
                <div id="div_3" class="border-2 border-green-400 rounded-md h-full py-2 px-2">
                    <article id="article_3" class="rounded-md border-2 border-red-600 h-1/4 text-center flex-col justify-center py-2 px-2">
                        <h1 class="text-white"> article module 1</h1>
                    </article>
                </div>
            </section>

        </div>
    </main>
    ${footerView()}
</body>

</html>`;
}

module.exports = homeView;