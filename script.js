
// ======================================
// SIDRA CH BIRTHDAY WEBSITE
// STEP 01 - OPENING SURPRISE
// ======================================


// 1. Create magical background stars

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 90; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    starsContainer.appendChild(star);
}


// 2. Mystery jar interaction

const curiousButton =
    document.getElementById("curiousButton");

const magicJar =
    document.getElementById("magicJar");

const bottomMessage =
    document.getElementById("bottomMessage");

let surpriseOpened = false;

curiousButton.addEventListener("click", () => {

    if (surpriseOpened) return;

    surpriseOpened = true;

    magicJar.classList.add("opening");

    bottomMessage.textContent =
        "A little secret is waiting to be revealed... 💜";

    curiousButton.innerHTML =
        "Something Magical Awaits ✨";

    curiousButton.style.opacity = "0.85";

});


// 3. Magical ambient sound

const musicButton =
    document.getElementById("musicButton");

let audioContext = null;
let masterGain = null;
let musicPlaying = false;
let oscillators = [];

function startMusic() {

    const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
        musicButton.textContent = "SOUND UNAVAILABLE";
        return;
    }

    audioContext = new AudioContextClass();

    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.025;
    masterGain.connect(audioContext.destination);

    const notes = [220, 261.63, 329.63];

    notes.forEach((frequency) => {

        const oscillator = audioContext.createOscillator();

        const gain = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        gain.gain.value = 0.25;

        oscillator.connect(gain);
        gain.connect(masterGain);

        oscillator.start();

        oscillators.push(oscillator);

    });

    musicPlaying = true;

    musicButton.textContent = "♫ SOUND ON";
}


function stopMusic() {

    if (audioContext) {

        oscillators.forEach((oscillator) => {
            oscillator.stop();
        });

        oscillators = [];

        audioContext.close();
        audioContext = null;
    }

    musicPlaying = false;

    musicButton.textContent = "♫ SOUND OFF";
}


musicButton.addEventListener("click", () => {

    if (!musicPlaying) {
        startMusic();
    } else {
        stopMusic();
    }

});
// STEP 2: BIRTHDAY VERIFICATION LOGIC

const birthdayGate = document.getElementById("birthdayGate");
const birthdayInput = document.getElementById("birthdayInput");
const verifyBirthdayButton = document.getElementById("verifyBirthdayButton");

const gateLock = document.getElementById("gateLock");
const gateTitle = document.getElementById("gateTitle");
const gateDescription = document.getElementById("gateDescription");
const gateMessage = document.getElementById("gateMessage");
const gateCard = document.querySelector(".gate-card");

// Open the birthday gate when I'm Curious is clicked
curiousButton.addEventListener("click", () => {
    birthdayGate.classList.add("show");
});

// Check the entered birthday
verifyBirthdayButton.addEventListener("click", () => {

    const enteredDate = birthdayInput.value;

    gateCard.classList.remove("error", "success");

    if (!enteredDate) {
        gateMessage.textContent =
            "Please enter your birthday first! 🎂";
        return;
    }

    if (enteredDate === "2007-12-01") {

        gateCard.classList.add("success");

        gateLock.textContent = "🔓";
        gateTitle.textContent = "Identity Confirmed! 💜";
        gateDescription.textContent =
            "Welcome, SIDRA CH! Your magical birthday journey is waiting for you.";
        gateMessage.textContent =
            "The magical world has recognized you! 🦋✨";

        birthdayInput.disabled = true;
        verifyBirthdayButton.disabled = true;
        verifyBirthdayButton.textContent = "Unlocked Successfully 💖";

    } else {

        gateCard.classList.add("error");

        gateLock.textContent = "🔒";
        gateMessage.textContent =
            "Oops! That's not quite right. Try again, Beautiful! 🦋";
    }
});
// STEP 3: SECRET ENVELOPE CONNECTION

const secretEnvelopeScene =
    document.getElementById("secretEnvelopeScene");

const envelopeVisual =
    document.getElementById("envelopeVisual");

const openEnvelopeButton =
    document.getElementById("openEnvelopeButton");

const revealedMessage =
    document.getElementById("revealedMessage");

const envelopeHint =
    document.getElementById("envelopeHint");

let envelopeSceneOpened = false;
let letterOpened = false;

// After successful birthday verification
verifyBirthdayButton.addEventListener("click", () => {

    if (
        birthdayInput.value === "2007-12-01" &&
        !envelopeSceneOpened
    ) {
        envelopeSceneOpened = true;

        setTimeout(() => {
            birthdayGate.classList.remove("show");
            secretEnvelopeScene.classList.add("active");
        }, 1800);
    }

});

// Open the secret letter
openEnvelopeButton.addEventListener("click", () => {

    if (letterOpened) return;

    letterOpened = true;

    envelopeVisual.querySelector(".envelope").classList.add("open");

    envelopeHint.textContent =
        "Your special surprise is being revealed... 💜";

    openEnvelopeButton.textContent =
        "Your Letter Is Open! 💌";

    setTimeout(() => {
        revealedMessage.classList.add("show");
        envelopeHint.textContent =
            "Made with love, especially for you! 🦋";
    }, 1000);

});

/* =========================================
   STEP 4: MAGICAL ENCHANTED GARDEN
   ========================================= */

const gardenContinueTrigger = document.getElementById("continueToGardenButton");
const gardenSceneElement = document.getElementById("magicalGardenScene");
const gardenStarsContainer = document.getElementById("gardenStars");
const gardenFirefliesContainer = document.getElementById("gardenFireflies");
const gardenNextButton = document.getElementById("gardenNextButton");

let gardenSceneStarted = false;

/* Open the magical garden from Step 3 */

if (gardenContinueTrigger && gardenSceneElement) {
    gardenContinueTrigger.addEventListener("click", () => {

        if (gardenSceneStarted) return;

        gardenSceneStarted = true;

        const envelopeScene = document.getElementById("secretEnvelopeScene");

        if (envelopeScene) {
            envelopeScene.classList.remove("active");
        }

        gardenSceneElement.classList.add("active");
        gardenSceneElement.scrollTop = 0;

    });
}

/* Create glowing stars */

if (gardenStarsContainer) {

    for (let i = 0; i < 75; i++) {

        const star = document.createElement("span");

        star.className = "garden-star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.setProperty(
            "--twinkle-time",
            (2 + Math.random() * 4) + "s"
        );

        star.style.animationDelay = (Math.random() * 4) + "s";

        const starSize = 1 + Math.random() * 2.5;

        star.style.width = starSize + "px";
        star.style.height = starSize + "px";

        gardenStarsContainer.appendChild(star);

    }

}

/* Create floating fireflies */

if (gardenFirefliesContainer) {

    for (let i = 0; i < 25; i++) {

        const firefly = document.createElement("span");

        firefly.className = "garden-firefly";

        firefly.style.left = Math.random() * 100 + "%";
        firefly.style.top = Math.random() * 100 + "%";

        firefly.style.setProperty(
            "--firefly-time",
            (5 + Math.random() * 6) + "s"
        );

        firefly.style.animationDelay = (Math.random() * 5) + "s";

        gardenFirefliesContainer.appendChild(firefly);

    }

}

/* Continue button - next scene will be connected in the next step */


/* STEP 4 TO STEP 5 TRANSITION */

if (gardenNextButton) {
    gardenNextButton.addEventListener("click", () => {

        gardenSceneElement.classList.remove("active");

        const medicalScene = document.getElementById("medicalMissionScene");

        if (medicalScene) {
            medicalScene.classList.add("active");
            medicalScene.scrollTop = 0;
        }

    });
}


/* END STEP 4 */

/* =========================================
   STEP 5: FUNNY MEDICAL BIRTHDAY MISSION
   ========================================= */

const medicalMissionStars = document.getElementById("medicalMissionStars");
const medicalMissionContent = document.getElementById("medicalMissionContent");

let medicalMissionStage = 0;
let medicalMissionAnswers = [];

const medicalMissionQuestions = [
    {
        question: "Are you cute?",
        options: [
            "Obviously! 100% 😎",
            "Too cute to handle! 💜",
            "The whole world knows! 😂"
        ]
    },
    {
        question: "Are you a little crazy?",
        options: [
            "Just a little bit! 🤭",
            "Crazy level: Maximum! 😂",
            "No comments, Doctor! 🩺"
        ]
    },
    {
        question: "Are you the most special person today?",
        options: [
            "Of course, it's my birthday! 🎂",
            "Absolutely YES! 💖",
            "Do you even need to ask? 😌"
        ]
    }
];

/* Create mission stars */

if (medicalMissionStars) {

    for (let i = 0; i < 65; i++) {

        const star = document.createElement("span");

        star.className = "medical-mission-star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 4 + "s";

        medicalMissionStars.appendChild(star);

    }

}

/* Start the mission */

if (medicalMissionContent) {

    medicalMissionContent.addEventListener("click", (event) => {

        if (event.target.closest("#acceptMedicalMission")) {

            medicalMissionStage = 0;
            medicalMissionAnswers = [];

            showMedicalMissionQuestion();

        }

        const selectedOption = event.target.closest(".mission-option");

        if (selectedOption) {

            medicalMissionAnswers.push(
                selectedOption.dataset.answer
            );

            medicalMissionStage++;

            if (medicalMissionStage < medicalMissionQuestions.length) {
                showMedicalMissionQuestion();
            } else {
                showMedicalMissionReport();
            }

        }

    });

}

/* Display mission questions */

function showMedicalMissionQuestion() {

    const currentQuestion = medicalMissionQuestions[medicalMissionStage];

    medicalMissionContent.innerHTML = `

        <div class="mission-question">

            <div class="mission-icon">🩺</div>

            <p class="mission-progress">
                MEDICAL MISSION · QUESTION ${medicalMissionStage + 1} / 3
            </p>

            <h2>Agent SIDRA CH</h2>

            <p class="mission-question-text">
                ${currentQuestion.question}
            </p>

            <div class="mission-options">

                ${currentQuestion.options.map((option) => `
                    <button
                        class="mission-option"
                        data-answer="${option.replace(/"/g, "&quot;")}"
                    >
                        ${option}
                    </button>
                `).join("")}

            </div>

        </div>

    `;

}

/* Display final medical report */

function showMedicalMissionReport() {

    medicalMissionContent.innerHTML = `

        <div class="mission-report">

            <div class="mission-icon">🩺</div>

            <p class="mission-progress">
                CONFIDENTIAL MEDICAL REPORT
            </p>

            <h2>Diagnosis Complete! 💜</h2>

            <div class="mission-report-list">

                <div class="mission-report-line">
                    💗 Cute Level: <strong>100%</strong>
                </div>

                <div class="mission-report-line">
                    ✨ Happiness Level: <strong>Unlimited</strong>
                </div>

                <div class="mission-report-line">
                    😂 Crazy Level: <strong>Critical!</strong>
                </div>

                <div class="mission-report-line">
                    👑 Special Person Status: <strong>Confirmed!</strong>
                </div>

            </div>

            <p class="mission-complete-message">
                Official result: Agent SIDRA CH is
                exceptionally special! Mission successfully completed. 🎂
            </p>

            <button class="mission-button" id="missionCompleteButton">
                Mission Completed! 💜
            </button>

        </div>

    `;

}

/* STEP 5 END */

/* ==========================================
   STEP 6: THE ROYAL MEMORY CASTLE
   ========================================== */

(() => {
  "use strict";

  const root = document.getElementById("royalCastleStep");
  if (!root) return;

  // Step 6 stays hidden until Step 5 is completed.
  root.style.display = "none";

  const entrance = document.getElementById("rmcEntrance");
  const hall = document.getElementById("rmcHall");
  const modal = document.getElementById("rmcMemoryModal");
  const celebration = document.getElementById("rmcCelebration");
  const giftScene = document.getElementById("rmcGiftScene");

  const doorsContainer = document.getElementById("rmcDoors");
  const progressText = document.getElementById("rmcProgressText");
  const progressBar = document.getElementById("rmcProgressBar");
  const completionArea = document.getElementById("rmcCompletionArea");

  const memoryPhoto = document.getElementById("rmcMemoryPhoto");
  const memoryNumber = document.getElementById("rmcMemoryNumber");
  const memoryTitle = document.getElementById("rmcMemoryTitle");
  const memoryCaption = document.getElementById("rmcMemoryCaption");

  const enterButton = document.getElementById("rmcEnterButton");
  const closeMemoryButton = document.getElementById("rmcCloseMemory");
  const returnButton = document.getElementById("rmcReturnButton");
  const completionButton = document.getElementById("rmcCompletionButton");
  const giftButton = document.getElementById("rmcGiftButton");
  const openGiftButton = document.getElementById("rmcOpenGift");
  const nextStepButton = document.getElementById("rmcNextStepButton");

  // Each photo is stored in the main project folder.
  const memories = [
    {
      photo: "photo01.jpg",
      title: "A Precious Little Moment 💜",
      caption: "Some moments are small, but the happiness they bring lasts forever."
    },
    {
      photo: "photo02.jpg",
      title: "A Beautiful Memory 🌸",
      caption: "A little memory that deserves a special place in this kingdom."
    },
    {
      photo: "photo03.jpg",
      title: "A Moment to Remember ✨",
      caption: "Every beautiful memory adds another sparkle to our world."
    },
    {
      photo: "photo04.jpg",
      title: "A Smile Worth Keeping 💗",
      caption: "Some smiles make ordinary moments feel magical."
    },
    {
      photo: "photo05.jpg",
      title: "A Little Piece of Happiness 🦋",
      caption: "May this happy moment always bring a smile to your face."
    },
    {
      photo: "photo06.jpg",
      title: "A Memory Full of Love 🌷",
      caption: "The best memories are the ones we carry in our hearts."
    },
    {
      photo: "photo07.jpg",
      title: "A Special Chapter 👑",
      caption: "Every chapter of your story deserves to shine."
    },
    {
      photo: "photo08.jpg",
      title: "A Beautiful Daydream 🌙",
      caption: "Some memories feel like little pieces of magic."
    },
    {
      photo: "photo09.jpg",
      title: "Forever in Our Memories 💜",
      caption: "Time moves on, but precious memories stay with us."
    },
    {
      photo: "photo10.jpg",
      title: "The Tenth Little Treasure ✨",
      caption: "Ten memories, countless feelings, and one beautiful kingdom."
    }
  ];

  const visitedMemories = new Set();
  let currentMemoryIndex = null;
  let castleStarted = false;

  function showScreen(screenToShow) {
    [entrance, hall, celebration, giftScene].forEach(screen => {
      screen.hidden = screen !== screenToShow;
    });

    modal.hidden = true;
  }

  function createMemoryDoors() {
    doorsContainer.innerHTML = "";

    memories.forEach((memory, index) => {
      const number = String(index + 1).padStart(2, "0");

      const door = document.createElement("button");
      door.type = "button";
      door.className = `rmc-door door-style-${(index % 5) + 1}`;
      door.dataset.memoryIndex = index;
      door.setAttribute(
        "aria-label",
        `Open Royal Memory ${number}`
      );

      door.innerHTML = `
        <span class="rmc-door-number">${number}</span>
        <span class="rmc-door-label">Memory ${number}</span>
        <span class="rmc-door-knob"></span>
      `;

      door.addEventListener("click", () => {
        openMemory(index);
      });

      doorsContainer.appendChild(door);
    });
  }

  function updateProgress() {
    const total = memories.length;
    const count = visitedMemories.size;
    const percentage = (count / total) * 100;

    progressText.textContent =
      `Memories discovered: ${count} / ${total}`;

    progressBar.style.width = `${percentage}%`;

    if (count === total) {
      completionArea.hidden = false;
    }
  }

  function openMemory(index) {
    const memory = memories[index];
    if (!memory) return;

    currentMemoryIndex = index;

    const number = String(index + 1).padStart(2, "0");

    memoryNumber.textContent = `ROYAL MEMORY ${number}`;
    memoryTitle.textContent = memory.title;
    memoryCaption.textContent = memory.caption;

    memoryPhoto.src = memory.photo;
    memoryPhoto.alt = `SIDRA CH memory ${number}`;

    modal.hidden = false;

    visitedMemories.add(index);

    const selectedDoor = doorsContainer.querySelector(
      `[data-memory-index="${index}"]`
    );

    if (selectedDoor) {
      selectedDoor.classList.add("visited");
    }

    updateProgress();
  }

  function closeMemory() {
    modal.hidden = true;
    currentMemoryIndex = null;
  }

  function startCastle() {
    if (castleStarted) return;
    castleStarted = true;

    root.style.display = "block";
    showScreen(entrance);

    // Let the castle entrance appear before opening the gates.
    setTimeout(() => {
      entrance.classList.add("gates-open");
    }, 500);
  }

  createMemoryDoors();
  updateProgress();

  // Scene 1 -> Scene 2
  enterButton.addEventListener("click", () => {
    showScreen(hall);
  });

  // Scene 3: Memory chamber controls
  closeMemoryButton.addEventListener("click", closeMemory);
  returnButton.addEventListener("click", closeMemory);

  // Scene 2 -> Scene 4, only after all ten memories are opened.
  completionButton.addEventListener("click", () => {
    if (visitedMemories.size !== memories.length) return;
    showScreen(celebration);
  });

  // Scene 4 -> Scene 5
  giftButton.addEventListener("click", () => {
    showScreen(giftScene);
  });

  // Open the royal gift.
  openGiftButton.addEventListener("click", () => {
    if (openGiftButton.classList.contains("gift-open")) return;

    openGiftButton.classList.add("gift-open");

    document.getElementById("rmcGiftMessage").textContent =
      "A new chapter of your birthday adventure is waiting for you! 💜";

    setTimeout(() => {
      nextStepButton.hidden = false;
    }, 1100);
  });

  // Step 7 will listen for this event when we build it.
  nextStepButton.addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("sidra:step7Requested")
    );
  });

  // Connection from the existing Step 5 button.
  // No changes to Step 5 are required.
  document.addEventListener("click", event => {
    const completedButton = event.target.closest(
      "#missionCompleteButton"
    );

    if (!completedButton) return;

    setTimeout(startCastle, 350);
  });

})();

/* =====================================
   STEP 7 — THE FINAL ROYAL SURPRISE
===================================== */

(() => {
  const step7 = document.getElementById("sidraStep7");

  if (!step7) {
    console.error("Step 7 HTML not found.");
    return;
  }

  const portal = document.getElementById("s7Portal");
  const letterScene = document.getElementById("s7LetterScene");
  const celebration = document.getElementById("s7Celebration");
  const ending = document.getElementById("s7Ending");

  const envelope = document.getElementById("s7Envelope");
  const letterPaper = document.getElementById("s7LetterPaper");
  const tapHint = document.getElementById("s7TapHint");

  function showScene(scene) {
    [portal, letterScene, celebration, ending].forEach(item => {
      item.classList.remove("active");
    });

    scene.classList.add("active");
    step7.scrollTop = 0;
  }

  // Step 6 sends this event. Step 6 itself remains untouched.
  document.addEventListener("sidra:step7Requested", () => {
    step7.hidden = false;
    showScene(portal);
  });

  // Portal → Royal Letter
  document.getElementById("s7EnterButton").addEventListener("click", () => {
    showScene(letterScene);
  });

  // Open the royal envelope
  envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");
    tapHint.textContent = "Your special letter is opening... 💜";

    setTimeout(() => {
      envelope.style.display = "none";
      tapHint.style.display = "none";
      letterPaper.classList.add("show");
      step7.scrollTop = 0;
    }, 900);
  });

  // Royal Letter → Birthday Celebration
  document.getElementById("s7CelebrateButton").addEventListener("click", () => {
    showScene(celebration);
  });

  // Celebration → Final Goodbye
  document.getElementById("s7FinalButton").addEventListener("click", () => {
    showScene(ending);
  });

})();

/* ==========================================
   STEP 7 UPGRADE — PARTICLES & BUTTERFLY FLIGHT
========================================== */

(() => {
  const step7 = document.getElementById("sidraStep7");
  if (!step7) return;

  const celebration = document.getElementById("s7Celebration");
  const particles = document.getElementById("s7CelebrationParticles");
  const petals = document.getElementById("s7RosePetals");
  const finalButton = document.getElementById("s7FinalButton");

  const butterfly = document.getElementById("s7FlyingButterfly");
  const trail = document.getElementById("s7ButterflyTrail");

  // Create floating celebration particles once.
  if (particles && !particles.dataset.ready) {
    particles.dataset.ready = "true";

    for (let i = 0; i < 55; i++) {
      const star = document.createElement("span");

      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--duration", (4 + Math.random() * 6) + "s");
      star.style.animationDelay = (-Math.random() * 8) + "s";

      particles.appendChild(star);
    }
  }

  // Create falling rose petals.
  if (petals && !petals.dataset.ready) {
    petals.dataset.ready = "true";

    for (let i = 0; i < 24; i++) {
      const petal = document.createElement("span");

      petal.style.left = Math.random() * 100 + "%";
      petal.style.setProperty("--duration", (7 + Math.random() * 7) + "s");
      petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
      petal.style.animationDelay = (-Math.random() * 12) + "s";

      petals.appendChild(petal);
    }
  }

  let flightFrame = null;
  let flightStart = 0;
  let lastTrailTime = 0;
  let endingTimer = null;

  function createTrailStar(x, y) {
    const star = document.createElement("span");
    star.className = "s7-trail-star";

    const size = 2 + Math.random() * 4;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.setProperty("--star-size", size + "px");
    star.style.setProperty("--life", (0.8 + Math.random() * 1.1) + "s");

    trail.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 2200);
  }

  function flyButterfly(timestamp) {
    if (!flightStart) flightStart = timestamp;

    const elapsed = timestamp - flightStart;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Full-screen curved flight path.
    const progress = elapsed / 22000;
    const x = width * (
      0.08 + 0.84 * (0.5 + 0.5 * Math.sin(progress * Math.PI * 2 - Math.PI / 2))
    );

    const y = height * (
      0.12 + 0.72 * (0.5 + 0.5 * Math.sin(progress * Math.PI * 4))
    );

    const tilt = Math.sin(progress * Math.PI * 4) * 13;
    const scale = 0.82 + Math.sin(progress * Math.PI * 6) * 0.12;

    butterfly.style.opacity = elapsed < 600 ? elapsed / 600 : 1;

    butterfly.style.transform =
      `translate3d(${x - butterfly.offsetWidth / 2}px, ${y - butterfly.offsetHeight / 2}px, 0) rotate(${tilt}deg) scale(${scale})`;

    // Leave a stream of tiny glowing star particles.
    if (timestamp - lastTrailTime > 65) {
      createTrailStar(
        x + (Math.random() * 16 - 8),
        y + (Math.random() * 16 - 8)
      );

      if (Math.random() > 0.45) {
        createTrailStar(
          x + (Math.random() * 28 - 14),
          y + (Math.random() * 28 - 14)
        );
      }

      lastTrailTime = timestamp;
    }

    // Complete the flight after 22 seconds.
    if (elapsed < 22000) {
      flightFrame = requestAnimationFrame(flyButterfly);
    } else {
      butterfly.style.opacity = "0";
      flightFrame = null;
    }
  }

  function startButterflyFlight() {
    if (flightFrame) cancelAnimationFrame(flightFrame);

    flightFrame = null;
    flightStart = 0;
    lastTrailTime = 0;

    butterfly.style.opacity = "0";
    butterfly.style.transform = "translate3d(-300px, -300px, 0)";

    trail.innerHTML = "";

    requestAnimationFrame(flyButterfly);
  }

  finalButton.addEventListener("click", () => {
    clearTimeout(endingTimer);

    endingTimer = setTimeout(() => {
      startButterflyFlight();
    }, 350);
  });

})();

/* ==========================================
   STEP 8 — THE LITTLE THINGS I NEVER
   WANT YOU TO FORGET
   ========================================== */

(() => {
  "use strict";

  const step7 = document.getElementById("sidraStep7");
  const step8 = document.getElementById("sidraStep8");

  if (!step7 || !step8) return;

  const ending = document.getElementById("s7Ending");
  const butterfly = document.getElementById("s7FlyingButterfly");
  const finalButton = document.getElementById("s7FinalButton");

  const scenes = document.querySelectorAll("#sidraStep8 .s8-scene");

  function showS8Scene(scene) {
    scenes.forEach(item => item.classList.remove("active"));
    scene.classList.add("active");
    step8.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ----------------------------------
     STEP 7 → STEP 8 AUTOMATIC HANDOVER
     ---------------------------------- */

  let handoverComplete = false;
  let handoverTimer = null;

  function openStep8() {
    if (handoverComplete) return;

    handoverComplete = true;
    clearTimeout(handoverTimer);

    step7.hidden = true;
    step8.hidden = false;

    showS8Scene(document.getElementById("s8Intro"));

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (finalButton && ending) {
    finalButton.addEventListener("click", () => {
      if (handoverComplete) return;

      clearTimeout(handoverTimer);

      // Butterfly flight completes before Step 8 opens.
      handoverTimer = setTimeout(openStep8, 23500);
    });
  }


  /* ----------------------------------
     SCENE 1 → SCENE 2
     ---------------------------------- */

  const s8Intro = document.getElementById("s8Intro");
  const s8Feelings = document.getElementById("s8Feelings");
  const s8StartButton = document.getElementById("s8StartButton");

  if (s8StartButton) {
    s8StartButton.addEventListener("click", () => {
      showS8Scene(s8Feelings);
    });
  }


  /* ----------------------------------
     SCENE 2 — FIVE LITTLE REMINDERS
     ---------------------------------- */

  const messages = [
    "I'm always proud of you. 🌷",
    "You never have to pretend to be strong around me. 🧸",
    "Your happiness will always matter to me. 💗",
    "I hope life gives you all the beautiful things you deserve. ✨",
    "No matter how much you grow, you'll always be my little sister. 🦋"
  ];

  const messageButtons = document.querySelectorAll(
    "#sidraStep8 [data-message]"
  );

  const messageReveal = document.getElementById("s8MessageReveal");
  const messageText = document.getElementById("s8MessageText");
  const feelingsNext = document.getElementById("s8FeelingsNext");

  const discoveredMessages = new Set();

  messageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.message);

      if (!Number.isInteger(index) || !messages[index]) return;

      messageText.textContent = messages[index];

      messageReveal.classList.add("show");
      button.classList.add("discovered");
      button.setAttribute("aria-pressed", "true");

      discoveredMessages.add(index);

      if (discoveredMessages.size === messages.length) {
        feelingsNext.disabled = false;
      }
    });
  });

  if (feelingsNext) {
    feelingsNext.addEventListener("click", () => {
      if (discoveredMessages.size !== messages.length) return;

      showS8Scene(document.getElementById("s8Hug"));
    });
  }


  /* ----------------------------------
     SCENE 3 — A HUG FROM YOUR BROTHER
     ---------------------------------- */

  const hugCharacter = document.getElementById("s8HugCharacter");
  const hugButton = document.getElementById("s8HugButton");
  const hugCaption = document.getElementById("s8HugCaption");
  const hugNext = document.getElementById("s8HugNext");

  let hugSent = false;

  function createHugHearts() {
    if (!hugCharacter) return;

    const heartSymbols = ["💗", "💕", "♡", "💖", "♥"];

    heartSymbols.forEach((symbol, index) => {
      const heart = document.createElement("span");

      heart.textContent = symbol;
      heart.style.position = "absolute";
      heart.style.left = "50%";
      heart.style.top = "45%";
      heart.style.zIndex = "10";
      heart.style.pointerEvents = "none";
      heart.style.fontSize = "25px";

      hugCharacter.appendChild(heart);

      const angle = (index / heartSymbols.length) * Math.PI * 2;
      const distance = 85;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      const animation = heart.animate(
        [
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0.4)"
          },
          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1.2)",
            offset: 0.25
          },
          {
            opacity: 0,
            transform:
              `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.7)`
          }
        ],
        {
          duration: 1500,
          easing: "ease-out",
          fill: "forwards"
        }
      );

      animation.finished
        .then(() => heart.remove())
        .catch(() => heart.remove());
    });
  }

  if (hugButton) {
    hugButton.addEventListener("click", () => {
      if (hugSent) return;

      hugSent = true;
      hugButton.disabled = true;

      hugCaption.textContent =
        "Sending you the biggest hug, my little sister! 💗";

      if (hugCharacter) {
        hugCharacter.animate(
          [
            { transform: "scale(1) rotate(0deg)" },
            { transform: "scale(1.12) rotate(-3deg)" },
            { transform: "scale(1.08) rotate(3deg)" },
            { transform: "scale(1.12) rotate(-2deg)" },
            { transform: "scale(1) rotate(0deg)" }
          ],
          {
            duration: 1300,
            easing: "ease-in-out"
          }
        );

        createHugHearts();
      }

      setTimeout(() => {
        hugCaption.textContent =
          "Whenever you need a hug, remember that your brother is always here. 🫂";

        hugNext.hidden = false;
      }, 1400);
    });
  }

  if (hugNext) {
    hugNext.addEventListener("click", () => {
      showS8Scene(document.getElementById("s8Voice"));
    });
  }


  /* ----------------------------------
     SCENE 4 — PERSONAL VOICE MESSAGE
     ---------------------------------- */

  const voiceAudio = document.getElementById("s8VoiceAudio");
  const playButton = document.getElementById("s8PlayButton");

  const progressFill = document.getElementById("s8ProgressFill");
  const currentTimeLabel = document.getElementById("s8CurrentTime");
  const durationLabel = document.getElementById("s8Duration");
  const audioStatus = document.getElementById("s8AudioStatus");

  const voiceNext = document.getElementById("s8VoiceNext");

  function formatAudioTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  function updateAudioProgress() {
    if (!voiceAudio) return;

    const duration = voiceAudio.duration;
    const current = voiceAudio.currentTime;

    currentTimeLabel.textContent = formatAudioTime(current);

    if (Number.isFinite(duration) && duration > 0) {
      progressFill.style.width =
        `${(current / duration) * 100}%`;

      durationLabel.textContent = formatAudioTime(duration);
    }
  }

  if (voiceAudio && playButton) {

    playButton.addEventListener("click", async () => {
      if (voiceAudio.paused) {
        try {
          await voiceAudio.play();
        } catch (error) {
          audioStatus.textContent =
            "Voice note couldn't play. Please check the audio file.";
        }
      } else {
        voiceAudio.pause();
      }
    });

    voiceAudio.addEventListener("play", () => {
      playButton.textContent = "Ⅱ";
      playButton.setAttribute("aria-label", "Pause voice message");
      audioStatus.textContent = "Playing your message... 💗";
    });

    voiceAudio.addEventListener("pause", () => {
      playButton.textContent = "▶";
      playButton.setAttribute("aria-label", "Play voice message");

      if (!voiceAudio.ended) {
        audioStatus.textContent = "Your message is paused.";
      }
    });

    voiceAudio.addEventListener("loadedmetadata", () => {
      durationLabel.textContent =
        formatAudioTime(voiceAudio.duration);

      updateAudioProgress();
    });

    voiceAudio.addEventListener("timeupdate", updateAudioProgress);

    voiceAudio.addEventListener("ended", () => {
      playButton.textContent = "▶";
      playButton.setAttribute("aria-label", "Replay voice message");

      audioStatus.textContent =
        "I hope you keep this message close to your heart. ❤️";

      progressFill.style.width = "100%";
    });

    voiceAudio.addEventListener("error", () => {
      audioStatus.textContent =
        "Audio file not found. Please check sidra-voice-note.mp3.";
    });
  }

  if (voiceNext) {
    voiceNext.addEventListener("click", () => {
      if (voiceAudio) voiceAudio.pause();

      showS8Scene(document.getElementById("s8Final"));
    });
  }

})();
