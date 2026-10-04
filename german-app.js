const questions = [
    { question: "Das ist _____ Buch.", options: ["der", "die", "das"], correct: 2 },
    { question: "Ich _____ jeden Tag zur Arbeit.", options: ["gehe", "gehst", "geht"], correct: 0 },
    { question: "Sie kommt _____ Berlin.", options: ["in", "aus", "an"], correct: 1 },
    { question: "Wir haben _____ Hund.", options: ["ein", "eine", "einen"], correct: 2 },
    { question: "Kannst du mir bitte _____ Wasser geben?", options: ["den", "das", "der"], correct: 1 },
    { question: "Er _____ sehr gut Deutsch.", options: ["spricht", "spreche", "sprechen"], correct: 0 },
    { question: "Ich gehe _____ Kino.", options: ["im", "ins", "am"], correct: 1 },
    { question: "Das Auto gehört _____.", options: ["mein", "ich", "mir"], correct: 2 },
    { question: "Gestern _____ ich ins Museum gegangen.", options: ["bin", "habe", "war"], correct: 0 },
    { question: "Die Kinder _____ im Garten.", options: ["spielt", "spielst", "spielen"], correct: 2 },
    { question: "Ich möchte _____ Kaffee, bitte.", options: ["ein", "einen", "eine"], correct: 1 },
    { question: "_____ du gestern Abend zu Hause?", options: ["Warst", "Bist", "Hast"], correct: 0 },
    { question: "Sie wohnt _____ der Stadt.", options: ["auf", "in", "an"], correct: 1 },
    { question: "Das ist _____ Freundin von mir.", options: ["ein", "einen", "eine"], correct: 2 },
    { question: "Wir _____ uns um 18 Uhr.", options: ["treffen", "trifft", "treffe"], correct: 0 },
    { question: "Ich habe das Buch _____ gelesen.", options: ["noch", "nie", "schon"], correct: 2 },
    { question: "Er fährt _____ Auto zur Arbeit.", options: ["mit dem", "mit den", "mit der"], correct: 0 },
    { question: "_____ du mir helfen?", options: ["Könnt", "Kannst", "Können"], correct: 1 },
    { question: "Die Blumen stehen _____ dem Tisch.", options: ["in", "an", "auf"], correct: 2 },
    { question: "Ich kaufe _____ Brot.", options: ["einen", "ein", "eine"], correct: 1 },
    { question: "Wenn ich Zeit _____, würde ich reisen.", options: ["hätte", "habe", "hatte"], correct: 0 },
    { question: "Das Wetter ist heute _____ als gestern.", options: ["gut", "beste", "besser"], correct: 2 },
    { question: "Sie hat _____ Haus gekauft.", options: ["einen", "ein", "eine"], correct: 1 },
    { question: "Ich warte _____ den Bus.", options: ["auf", "an", "für"], correct: 0 },
    { question: "_____ du Deutsch?", options: ["Sprecht", "Sprichst", "Sprechen"], correct: 1 },
    { question: "Der Schlüssel liegt _____ der Tasche.", options: ["auf", "an", "in"], correct: 2 },
    { question: "Wir müssen _____ Hausaufgaben machen.", options: ["unsere", "unser", "unserm"], correct: 0 },
    { question: "Er ist _____ als sein Bruder.", options: ["älter", "alt", "am ältesten"], correct: 0 },
    { question: "Ich _____ gestern einen Film gesehen.", options: ["bin", "war", "habe"], correct: 2 },
    { question: "Die Frau, _____ dort sitzt, ist meine Lehrerin.", options: ["der", "die", "das"], correct: 1 },
    { question: "Kommst du _____ mir ins Café?", options: ["nach", "mit", "zu"], correct: 1 },
    { question: "Ich habe _____ Hunger.", options: ["kein", "keine", "keinen"], correct: 2 },
    { question: "Sie _____ jeden Morgen um 7 Uhr auf.", options: ["stehen", "stehst", "steht"], correct: 2 },
    { question: "Das Geschenk ist _____ meine Mutter.", options: ["für", "von", "an"], correct: 0 },
    { question: "_____ du schon einmal in Deutschland gewesen?", options: ["Hast", "Bist", "Warst"], correct: 1 },
    { question: "Ich interessiere mich _____ Geschichte.", options: ["an", "über", "für"], correct: 2 },
    { question: "Er hat gesagt, _____ er morgen kommt.", options: ["dass", "das", "ob"], correct: 0 },
    { question: "Die Prüfung war _____ schwer.", options: ["viel", "sehr", "mehr"], correct: 1 },
    { question: "Sie ist jetzt _____ Urlaub.", options: ["in den", "im", "auf den"], correct: 1 },
    { question: "Ich kenne den Mann, _____ du meinst.", options: ["den", "der", "dem"], correct: 0 },
    { question: "Bitte mach _____ Fenster auf.", options: ["den", "die", "das"], correct: 2 },
    { question: "Sie geht _____ Fuß zur Schule.", options: ["mit", "zu", "auf"], correct: 1 },
    { question: "Ich hätte gern _____ Apfel.", options: ["einen", "ein", "eine"], correct: 0 },
    { question: "_____ Wetter ist schön heute.", options: ["Der", "Das", "Die"], correct: 1 },
    { question: "Er arbeitet _____ einer Bank.", options: ["in", "an", "bei"], correct: 2 },
    { question: "Ich muss _____ Arzt gehen.", options: ["zum", "zu", "zur"], correct: 0 },
    { question: "Die Kinder haben _____ gespielt.", options: ["draußen gewesen", "draußen", "draußen sein"], correct: 1 },
    { question: "_____ du das Buch gelesen?", options: ["Bist", "Hattest", "Hast"], correct: 2 },
    { question: "Ich freue mich _____ das Wochenende.", options: ["auf", "über", "für"], correct: 0 },
    { question: "Sie spricht _____ Sprachen.", options: ["dritte", "dreien", "drei"], correct: 2 },
    { question: "Das Haus _____ letztes Jahr gebaut.", options: ["ist", "wurde", "hat"], correct: 1 },
    { question: "Ich gehe einkaufen, _____ ich Milch brauche.", options: ["weil", "obwohl", "dass"], correct: 0 },
    { question: "_____ Tisch ist aus Holz.", options: ["Die", "Der", "Das"], correct: 1 },
    { question: "Wir haben uns _____ 10 Jahren nicht gesehen.", options: ["vor", "für", "seit"], correct: 2 },
    { question: "Er hat _____ Auto verloren.", options: ["seinen", "sein", "seine"], correct: 0 },
    { question: "Ich würde gern nach Wien _____.", options: ["fahre", "fahren", "gefahren"], correct: 1 },
    { question: "Die Tür ist _____.", options: ["schließen", "schließt", "geschlossen"], correct: 2 },
    { question: "_____ Uhr ist es?", options: ["Wieviel", "Was", "Welche"], correct: 0 },
    { question: "Sie hat mir _____ Brief geschrieben.", options: ["ein", "einen", "eine"], correct: 1 },
    { question: "Ich wohne _____ Deutschland.", options: ["nach", "aus", "in"], correct: 2 }
];

let userData = {};

function getLevel(score, total) {
    const percentage = Math.round((score / total) * 100);
    if (percentage >= 90) {
        return { ru: "Продвинутый (C1-C2)", en: "Advanced (C1-C2)", percentage };
    }
    if (percentage >= 75) {
        return { ru: "Выше среднего (B2)", en: "Upper-Intermediate (B2)", percentage };
    }
    if (percentage >= 60) {
        return { ru: "Средний (B1)", en: "Intermediate (B1)", percentage };
    }
    if (percentage >= 40) {
        return { ru: "Ниже среднего (A2)", en: "Pre-Intermediate (A2)", percentage };
    }
    return { ru: "Начальный (A1)", en: "Beginner (A1)", percentage };
}

function startTest() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!firstName || !lastName || !age || !phone) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    userData.firstName = firstName;
    userData.lastName = lastName;
    userData.age = age;
    userData.phone = phone;

    document.getElementById("userForm").style.display = "none";
    document.getElementById("testSection").style.display = "block";
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question-item";
        questionDiv.id = "question-" + index;

        const questionText = document.createElement("div");
        questionText.className = "question-text";
        questionText.textContent = `${index + 1}. ${q.question}`;

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "options-container";

        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index}`;
            input.value = optIndex;
            input.id = `q${index}_${optIndex}`;

            const label = document.createElement("label");
            label.htmlFor = `q${index}_${optIndex}`;
            label.textContent = option;

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        container.appendChild(questionDiv);
    });
}

function submitTest() {
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn.disabled) {
        return;
    }

    document.querySelectorAll(".question-item").forEach(function (item) {
        item.classList.remove("unanswered");
    });

    let correctCount = 0;
    let firstMissed = -1;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            if (firstMissed === -1) {
                firstMissed = index;
            }
            const missed = document.getElementById("question-" + index);
            if (missed) {
                missed.classList.add("unanswered");
            }
        } else if (parseInt(selected.value, 10) === q.correct) {
            correctCount++;
        }
    });

    if (firstMissed !== -1) {
        alert("Пожалуйста, ответьте на все вопросы. Сейчас откроется пропущенный вопрос №" + (firstMissed + 1) + ".");
        const target = document.getElementById("question-" + firstMissed);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
    }

    userData.score = correctCount;
    userData.totalQuestions = questions.length;
    submitBtn.disabled = true;
    submitBtn.textContent = "Отправка...";
    sendResults();
}

function buildResultText() {
    const level = getLevel(userData.score, userData.totalQuestions);
    return [
        "НЕМЕЦКИЙ ТЕСТ",
        "",
        "Имя: " + userData.firstName,
        "Фамилия: " + userData.lastName,
        "Возраст: " + userData.age,
        "Телефон: " + userData.phone,
        "Дата: " + new Date().toLocaleString("ru-RU"),
        "",
        "Правильных ответов: " + userData.score + " из " + userData.totalQuestions,
        "Точность: " + level.percentage + "%",
        "LEVEL: " + level.en
    ].join("\n");
}

function sendResults() {
    const text = buildResultText();
    sendEmailCopy(text);
    setTimeout(showResults, 1200);
}

function sendEmailCopy(text) {
    const formData = new FormData();
    formData.append("email", "my.credo2018@gmail.com");
    formData.append("subject", "Немецкий тест - " + userData.firstName + " " + userData.lastName);
    formData.append("message", text);
    formData.append("_captcha", "false");
    fetch("https://formsubmit.co/ajax/my.credo2018@gmail.com", {
        method: "POST",
        body: formData
    }).catch(function () {});
}

function showResults() {
    document.getElementById("testSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "block";

    const level = getLevel(userData.score, userData.totalQuestions);

    document.getElementById("resultsContent").innerHTML = `
        <p><strong>${userData.firstName} ${userData.lastName}</strong>, спасибо за прохождение теста!</p>
        <div class="result-total">
            <div>Ваш результат:</div>
            <strong>${userData.score} / ${userData.totalQuestions}</strong>
            <div style="margin-top: 1rem; font-size: 1.2rem;">${level.percentage}%</div>
            <div style="margin-top: 0.5rem; font-size: 1rem;">Уровень: ${level.ru}</div>
        </div>
        <p style="margin-top: 1.5rem;">Ваши результаты отправлены преподавателю. Вы получите обратную связь в ближайшее время.</p>
    `;
}
