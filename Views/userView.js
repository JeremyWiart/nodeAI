

function getTime() {
    const now = new Date();
    const options = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(now);
}


function userinfoView(req){
    console.log("Heure française :", getTime());
    return `<table class="inline w-6/6 h-full">
            <tr><td class=" py-1"><div class="text-white border border-white rounded-md px-14"> ${req.username}</div></td></tr>
            <tr><td class="py-2"><div id="infoHours" class="text-white border border-white rounded-md px-14"> ${getTime()} </div></td></tr>
            <tr><td class="py-2 px-2"><a href="/Logout" class="font-bold text-red-600 text-center w-2/4 rounded-md no-underline border border-white py-1 px-10">Logout</a></td></tr>
            </table>`;
}


module.exports = userinfoView;