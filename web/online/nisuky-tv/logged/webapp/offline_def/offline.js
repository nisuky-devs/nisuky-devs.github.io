document.addEventListener('DOMContentLoaded', function () {
    // Vérifier l'état de la connexion lors du chargement de la page
    gestionModeHorsLigne();

    // Ajouter un écouteur d'événements pour détecter les changements d'état de la connexion
    window.addEventListener('online', gestionModeHorsLigne);
    window.addEventListener('offline', gestionModeHorsLigne);

    // Ajouter un écouteur d'événements pour le bouton "Accéder au mode hors ligne"
    var accessOfflineButton = document.getElementById('accessOfflineButton');
    accessOfflineButton.addEventListener('click', function () {
        // Logique pour accéder au mode hors ligne
        alert("Accès au mode hors ligne !");
    });
});

function gestionModeHorsLigne() {
    var offlineMessage = document.getElementById('offlineMessage');
    var accessOfflineButton = document.getElementById('accessOfflineButton');

    if (navigator.onLine) {
        // Utilisateur en ligne
        offlineMessage.innerText = "Connecté avec le serveur!";
        accessOfflineButton.style.display = 'none';
    } else {
        // Utilisateur hors ligne
        offlineMessage.innerText = "Vous êtes passé en mode Hors Ligne";
        accessOfflineButton.style.display = 'block';
    }
}
