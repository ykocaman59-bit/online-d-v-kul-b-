function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function createRoom() {
    let randomCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('room-status').innerText = "Oda Kuruldu! Kodunuz: " + randomCode + " (Arkadaşınıza verin)";
    setTimeout(() => {
        showScreen('char-screen');
    }, 1500);
}

function joinRoom() {
    let code = document.getElementById('room-code-input').value;
    if(code.length === 4) {
        document.getElementById('room-status').innerText = "Odaya bağlanıldı!";
        setTimeout(() => {
            showScreen('char-screen');
        }, 1000);
    } else {
        alert("Lütfen 4 haneli geçerli bir oda kodu girin.");
    }
}

function selectCharacter(charName) {
    document.getElementById('p1-info').innerText = "Oyuncu 1: " + charName;
    showScreen('game-screen');
    initGame();
}

function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Basit Canvas Çizim Döngüsü (Dövüş alanı simülasyonu)
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Zemin
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 380, canvas.width, 70);

        // Oyuncu 1 (Gölge)
        ctx.fillStyle = "#000";
        ctx.fillRect(150, 260, 40, 120); // Gövde
        ctx.beginPath();
        ctx.arc(170, 240, 15, 0, Math.PI * 2); // Baş
        ctx.fill();

        // Oyuncu 2 (Gölge)
        ctx.fillRect(600, 260, 40, 120); // Gövde
        ctx.beginPath();
        ctx.arc(620, 240, 15, 0, Math.PI * 2); // Baş
        ctx.fill();

        requestAnimationFrame(draw);
    }
    draw();
}

