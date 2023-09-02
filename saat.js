

function dijitalSaatGuncelle() {
    const saatDiv = document.getElementById("saat");
    const gunDiv = document.getElementById("gun");
    const simdi = new Date();
    const saat = simdi.getHours();
    const dakika = simdi.getMinutes();
    const saniye = simdi.getSeconds();
    const gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const gun = gunler[simdi.getDay()]; // Simdi'nin gününü alır.

    // Saati biçimlendirme
    const saatMetni = `${saat < 10 ? "0" : ""}${saat}:${dakika < 10 ? "0" : ""}${dakika}:${saniye < 10 ? "0" : ""}${saniye} ${gun} `;

    // HTML içeriğini güncelleme
    saatDiv.textContent = saatMetni;
    
}

// Dijital saati her saniye güncelleme
setInterval(dijitalSaatGuncelle, 1000);

// Sayfa yüklendiğinde saat güncellemesini başlatma
dijitalSaatGuncelle();

// Dijital saati her saniye güncelleme
setInterval(dijitalSaatGuncelle, 1000);

// Sayfa yüklendiğinde saat güncellemesini başlatma
dijitalSaatGuncelle();
