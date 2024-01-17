document.addEventListener('DOMContentLoaded', function () {
    var teamCards = document.querySelectorAll('.team-card');
    var currentIndex = 0;

    function showTeamMember(index) {
        // Hide all team cards
        teamCards.forEach(function (card) {
            card.style.display = 'none';
        });

        // Show the current team card
        teamCards[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % teamCards.length;
        showTeamMember(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + teamCards.length) % teamCards.length;
        showTeamMember(currentIndex);
    }

    // Automatically advance to the next slide every 3 seconds (3000 milliseconds)
    setInterval(nextSlide, 3000);
});
