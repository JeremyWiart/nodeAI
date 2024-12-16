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

<body class="bg-gradient-to-r from-black to-blue-900">

    
    
    ${headerView()};
    <main class="flex justify-center w-full pt-2 pb-4">
        <div class="bg-white shadow-md rounded-lg w-full max-w-lg min-w-max">

            <div class="flex justify-around flex-wrap bg-gray-200 p-4 rounded-t-lg">
                <form action="/login" method="GET">
                    <button type="submit" id="login-btn" class="text-blue-800 font-semibold">Connexion</button>
                </form>

                    <button id="register-btn" class="text-blue-800 font-semibold">Registration</button>
            </div>

            
          

          
        </div>
    </main>
</body>

</html>`;
}

module.exports = landingView;