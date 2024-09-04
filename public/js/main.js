let toggleButtoned = document.getElementById('menu-toggle');
toggleButtoned.addEventListener('click', function () {
    var body = document.getElementById('body');
    console.log("Change body content");
    // menu.classList.toggle('hidden');
});



// Toggle sidebar visibility
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('translate-x-full');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('translate-x-full');
});

// Close sidebar if user clicks outside of it
document.getElementById('sidebar').addEventListener('click', function (event) {
    if (event.target === document.getElementById('sidebar')) {
        document.getElementById('sidebar').classList.add('translate-x-full');
    }
});


//  main action button

document.getElementById('main-action-button').addEventListener('click', function () {
    // For Firebase hosting
    window.location.href = '/public/instant-quote.html';

    // For local development
    // window.location.href = 'public/instant_quote.html';
});
