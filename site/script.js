function redirectioneaza(event) {
    event.preventDefault();
    const nume = document.getElementById('nume').value.trim();
    const email = document.getElementById('email').value.trim();
    const mesaj = document.getElementById('mesaj').value.trim();
    const status = document.getElementById("confirmare");

    if (nume === "" || email === "" || mesaj === "") {
        status.textContent = "Te rugăm să completezi toate câmpurile!";
        status.style.color = "red";
        return false;
    }
    if (!validateEmail(email)) {
        status.textContent = "Te rugăm să introduci o adresă de email validă!";
        status.style.color = "red";
        return false;
    }
    
    window.location.href = "confirmare.html";
    return false;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


function verificaAWB() {
    const awb = document.getElementById("awbCode").value.trim();
    const status = document.getElementById("awbStatus");

    // Simulare simplă: dacă codul începe cu CRG și are 6 cifre
    const valid = /^CRG\\d{6}$/i.test(awb);

    if (valid) {
        status.textContent = "AWB valid. Pachetul este în tranzit.";
        status.style.color = "green";
    } else {
        status.textContent = "Cod AWB invalid. Vă rugăm să verificați și să încercați din nou.";
        status.style.color = "red";
    }
}

