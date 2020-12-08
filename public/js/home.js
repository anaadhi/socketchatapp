var socket = io("http://[2402:3a80:15e1:65a1:3882:ab6c:c8e8:388a]:3000/");

console.log("connected")

document.getElementById("form").addEventListener('submit', e => {
    e.preventDefault()
    var message = document.getElementById('m').value;
    socket.emit('chat-message',message);
    document.getElementById('m').value = "";
    var history = document.getElementById("messages").innerHTML;
    history += "<li><p class='right'>" + message + "</p></li>";
    document.getElementById("messages").innerHTML = history;
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;

})



socket.on('chat-message', (msg) => {
    var history = document.getElementById("messages").innerHTML;
    history += "<li><p class='left'>" + msg + "</p></li>";
    document.getElementById("messages").innerHTML = history;
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;

})

