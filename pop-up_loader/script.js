document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Fonction pour afficher le popup
    function showPopup() {
        popup.style.display = 'flex';
        document.getElementById('update-date').innerText = new Date().toLocaleDateString();
        document.getElementById('system-time').innerText = new Date().toLocaleTimeString();
    }

    // Afficher le popup après 3 secondes pour le test
    setTimeout(showPopup, 3000);

    // Fermer le popup quand l'utilisateur clique sur le bouton 'close'
    closeBtn.onclick = function () {
        popup.style.display = 'none';
    };

    // Fermer le popup si l'utilisateur clique à l'extérieur du contenu du popup
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
});
