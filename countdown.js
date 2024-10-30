const countdownElement = document.getElementById('countdown');
        //const targetDate = new Date('December 24, 2024 00:00:01').getTime();
        const targetDate = new Date('October 30, 2024 03:00:01').getTime();

        const gameButton = document.getElementById('goto-Game');
    
        gameButton.onclick = function() {
            window.location.href = 'game.html';
        };
    
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
    
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                countdownElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
            } else {
                window.location.href = 'infomation.html';
            }
        }
    
        setInterval(updateCountdown, 1000);