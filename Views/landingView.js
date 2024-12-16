const headerView = require('./headerView');

function landingView(){

    return `<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vocal Assitant</title>

   
    <!--<script src="https://cdn.tailwindcss.com"></script> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" />
</head>

<body class="bg-gradient-to-r from-blue-900 via-black to-blue-900">

    
    
    ${headerView()};
    <header class="bg-gradient-to-r from-black via-blue-900 to-black h-16 border border-white py-2 mt-2">

    <nav class="container flex justify-center mx-auto border-2 border-black font-bold text-center rounded-3xl p-1">
                <form action="/login" method="GET">
                    <button type="submit" id="login-btn" class="p-1 text-blue-800 font-semibold bg-gray-200 rounded-t-lg">Connexion</button>
                </form>
                <form action="/register" method="GET">    
                    <button id="register-btn" class="ml-2 p-1 text-blue-800 font-semibold bg-gray-200 rounded-t-lg">Registration</button>
                </form>
    </nav>
    </header>


    <main class="flex justify-center w-full pt-2 pb-4">


        <div class="bg-white shadow-md rounded-lg w-full max-w-lg min-w-max">

            

            
          

          
        </div>
    </main>
</body>

</html>`;
}

module.exports = landingView;