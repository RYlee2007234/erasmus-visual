window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nume = urlParams.get("nume");

    const mesaj = document.getElementById("mesajPersonalizat");

    if (nume) {
        mesaj.textContent = `Îți mulțumim, ${decodeURIComponent(nume)}!`;
    }
});
