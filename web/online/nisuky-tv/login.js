document.getElementById('discord-login-button').addEventListener('click', function() {
    // Redirect to the Discord login page
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
   });