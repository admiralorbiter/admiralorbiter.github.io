// Variables to keep track of scores, game state, and timers
let fastScore = 0;
let accurateScore = 0;
let fastGameActive = false;
let accurateGameActive = false;
let fastTimer = 3; // 3 seconds
let accurateTimer = 10; // 10 seconds

// Start Fast-Paced Game
document.getElementById('startFast').addEventListener('click', function() {
    fastGameActive = true;
    fastScore = 0;
    fastTimer = 3;
    document.getElementById('fastScore').innerText = fastScore;
    spawnGems('fastData');
    document.getElementById('fastTimer').innerText = fastTimer + " seconds left";
    const fastInterval = setInterval(function() {
        fastTimer--;
        document.getElementById('fastTimer').innerText = fastTimer + " seconds left";
        if (fastTimer <= 0) {
            clearInterval(fastInterval);
            fastGameActive = false;
            document.getElementById('fastTimer').innerText = "Time's up!";
        }
    }, 1000);
});

// Start Careful Data Collection Game
document.getElementById('startAccurate').addEventListener('click', function() {
    accurateGameActive = true;
    accurateScore = 0;
    accurateTimer = 10;
    document.getElementById('accurateScore').innerText = accurateScore;
    spawnGems('accurateData');
    document.getElementById('accurateTimer').innerText = accurateTimer + " seconds left";
    const accurateInterval = setInterval(function() {
        accurateTimer--;
        document.getElementById('accurateTimer').innerText = accurateTimer + " seconds left";
        if (accurateTimer <= 0) {
            clearInterval(accurateInterval);
            accurateGameActive = false;
            document.getElementById('accurateTimer').innerText = "Time's up!";
        }
    }, 1000);
});

// Function to spawn data gems
function spawnGems(type) {
    const area = document.getElementById(type);
    area.innerHTML = ''; // Clear previous gems

    // Create 5 gems for each game
    for (let i = 0; i < 5; i++) {
        const gem = document.createElement('div');
        gem.classList.add('gem');
        // Randomly decide if gem is good or fake (30% chance of being fake)
        gem.dataset.value = Math.random() < 0.3 ? -1 : 1;
        gem.innerText = gem.dataset.value == 1 ? '💎' : '🔴'; // Use diamond emoji for good gem and red circle for fake
        gem.addEventListener('click', function() {
            if (type === 'fastData' && fastGameActive) {
                fastScore += parseInt(gem.dataset.value);
                document.getElementById('fastScore').innerText = fastScore;
            } else if (type === 'accurateData' && accurateGameActive) {
                accurateScore += parseInt(gem.dataset.value);
                document.getElementById('accurateScore').innerText = accurateScore;
            }
            gem.style.display = 'none'; // Hide gem after clicking
        });
        area.appendChild(gem);
    }
}
