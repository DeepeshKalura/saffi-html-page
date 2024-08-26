let toggleButtoned = document.getElementById('menu-toggle');
toggleButtoned.addEventListener('click', function () {
    var menu = document.getElementById('menu');
    console.log("Hello world");
    menu.classList.toggle('hidden');
});

