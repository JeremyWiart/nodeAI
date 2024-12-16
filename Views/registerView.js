const headerView = require('./headerView');

function registerView(){

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
    <main class="flex items-center justify-center p-48 mb-2 mt-2 rounded-lg">
        <div class="bg-gradient-to-r from-black via-blue-900 to-black shadow-md rounded-lg w-full max-w-lg min-w-max">

            <div class="flex justify-around flex-wrap bg-gray-200 p-4 rounded-t-lg">
                <form action="/login" method="GET">
                    <button id="login-btn" class="text-blue-800 font-semibold">Connexion</button>
                </form>
            </div>

            <section id="register-section" class="p-4">
                <h2 class="text-2xl font-bold text-center text-red-600 mb-4 border border-red-600 rounded-lg p-1">Registration</h2>
                <form action="#" method="POST">
                   
                    <div class="mb-4 ">
                        <label for="register-name" class="block text-red-600">Username</label>
                        <input type="text" id="register-name" name="name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>
                    </div>
                   
                    <div class="mb-4">
                        <label for="register-email" class="block text-red-600">Adresse e-mail</label>
                        <input type="email" id="register-email" name="email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>
                    </div>
                  
                    <div class="mb-4">
                        <label for="register-password" class="block text-red-600">Mot de passe</label>
                        <input type="password" id="register-password" name="password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>
                    </div>
                  
                    <div class="mb-4">
                        <label for="confirm-password" class="block text-red-600">Confirmer le mot de passe</label>
                        <input type="password" id="confirm-password" name="confirm_password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>
                    </div>
                  
                    <div class="mb-4">
                        <button type="submit"
                            class="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">S'inscrire</button>
                    </div>
                </form>
            </section>
        </div>
    </main>
</body>

</html>`;
}

module.exports = registerView;