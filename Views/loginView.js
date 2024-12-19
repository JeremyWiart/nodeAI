const headerView = require('./headerView');
const footerView = require('./footerView');
const errorlogView = require('./errorlogView');

function loginView(errorLog){

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
        <div class="bg-gradient-to-r from-black via-blue-900 to-black border border-white shadow-md rounded-lg w-full max-w-lg min-w-max">

            <div class="flex justify-around flex-wrap bg-gray-200 p-4 rounded-t-lg">
                <form action="/Register" methode="GET">
                    <button id="register-btn" class="text-blue-800 font-semibold">Registration</button>
                </form>
            </div>

            
            <section id="login-section" class="m-2 p-4">

                <h2 class="text-2xl font-bold text-center text-red-600 mb-4 border border-red-600 rounded-lg p-1">Login</h2>

                <form action="#" method="POST">
                    <div class="mb-4">
                        <label for="username" class="block text-red-600">Username</label>
                        <input type="text" id="username" name="username"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-800"
                            required>
                    </div>
                  
                    <div class="mb-4">
                        <label for="login-password" class="block text-red-600">Password</label>
                        <input type="password" id="login-password" name="password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-800"
                            required>
                    </div>
                    
                    <div class="mb-4">
                        <button name="login" type="submit"
                            class="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Log In</button>
                    </div>
                    ${errorLog ? errorlogView() : errorLog=false}
                  
                    <div class="text-center">
                        <a href="#" class="text-red-600 hover:underline">Forget Password ?</a>
                    </div>
                </form>

            </section>
        </div>
    </main>
    ${footerView()}
</body>

</html>`;
}

module.exports = loginView;