/* header animation */
function LogoBaffleOut() {
    var b = baffle('#logo').start().set({
        characters: '░█▓ ▓▒░<>/',
        speed: 60
    }).text(currentText => "Jared Dillard");

    setTimeout(function () {
        b.reveal(500);
    }, 500);
    }

    function LogoBaffleIn() {
    var names = ['farmer of bits', 'web developer'];
    var b = baffle('#logo').start().set({
        characters: '░█▓ ▓▒░<>/',
        speed: 60
    }).text(currentText => names[Math.floor(Math.random()*names.length)]);

    setTimeout(function () {
        b.reveal(500);
    }, 500);
}

window.onload=function(){LogoBaffleOut();};

document.getElementById('logo').onmouseover=function(){LogoBaffleIn();};
document.getElementById('logo').onmouseleave=function(){LogoBaffleOut();};