const headerView = require('./headerView');

function loginView(){

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
    <main class="flex items-center justify-center p-48 mb-2 mt-2 rounded-lg">
        <div class="bg-white shadow-md rounded-lg w-full max-w-lg min-w-max">

            <div class="flex justify-around flex-wrap bg-gray-200 p-4 rounded-t-lg">
                <button id="login-btn" class="text-blue-800 font-semibold">Connexion</button>
                <button id="register-btn" class="text-blue-800 font-semibold">Registration</button>
            </div>

            
            <section id="login-section" class="m-2 p-4">
                <h2 class="text-2xl font-bold text-center mb-4">Connexion</h2>
                <form action="#" method="POST">
         
                    <div class="mb-4">
                        <label for="username" class="block text-gray-700">Username</label>
                        <input type="text" id="username" name="username"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-800"
                            required>
                    </div>
                  
                    <div class="mb-4">
                        <label for="login-password" class="block text-gray-700">Password</label>
                        <input type="password" id="login-password" name="password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-800"
                            required>
                    </div>
                    
                    <div class="mb-4">
                        <button name="login" type="submit"
                            class="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Connexion</button>
                    </div>
                  
                    <div class="text-center">
                        <a href="#" class="text-blue-900 hover:underline">Forget Password ?</a>
                    </div>
                </form>
            </section>

        </div>
    </main>
</body>

</html>`;
}

module.exports = loginView;