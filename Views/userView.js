
function userinfoView(req){
    
    return `<table class="inline w-6/6 h-full">
            <tr><td class=" py-1"><div class="text-white border border-white rounded-md px-14"> ${req.username}</div></td></tr>
            <tr><td class="py-2"><div id="infoHours" class="text-white border border-white rounded-md px-8">  </div></td></tr>
            <tr><td class="py-2 px-2"><a href="/Logout" class="font-bold text-red-600 text-center w-2/4 rounded-md no-underline border border-white pb-1 px-6">Logout</a></td></tr>
            </table>`;
}


module.exports = userinfoView;