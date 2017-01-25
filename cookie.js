function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function genID() {
    return Math.random().toString(36).substr(2)
        + Math.random().toString(36).substr(2)
        + Math.random().toString(36).substr(2)
        + Math.random().toString(36).substr(2);
}

let uniqueId = genID()
if (sessionStorage.getItem('socialFolcrum')){
  sessionStorage.setItem('socialFolcrum', new Date());
}
createCookie(uniqueId, new Date(), 7);


function checkId(){
  var data = sessionStorage.getItem('socialFolcrum');
  var x = Date.parse(data)
  currentDate = new Date();
  if ((currentDate.getTime() - x) / 60000 >= 1 ) {
    console.log('user has been here longer than 5 mins')
  }else{
    console.log('user left')
  }
}
window.setInterval(checkId, 3000)
