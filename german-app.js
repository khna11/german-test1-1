const questions = [
    { question: "Meine Schwester ___ seit zwei Jahren in Berlin.", options: ["wohnt", "wohnen", "wohnst"], correct: 0 },
    { question: "Entschuldigung, können Sie ___ bitte helfen?", options: ["mich", "mir", "mein"], correct: 1 },
    { question: "Ich habe heute Morgen ___ Kaffee getrunken.", options: ["keinen", "kein", "keine"], correct: 0 },
    { question: "Wir fahren morgen ___ Schweiz.", options: ["nach", "in die", "zu"], correct: 1 },
    { question: "Gestern ___ ich meine Großeltern besucht.", options: ["bin", "werde", "habe"], correct: 2 },
    { question: "Welcher Satz ist grammatisch richtig?", options: ["Am Sonntag ich gehe oft spazieren.", "Am Sonntag gehe ich oft spazieren.", "Am Sonntag oft gehe ich spazieren."], correct: 1 },
    { question: "Ich interessiere mich sehr ___ deutsche Geschichte.", options: ["für", "über", "an"], correct: 0 },
    { question: "Das ist der Mann, ___ ich gestern im Supermarkt gesehen habe.", options: ["der", "dem", "den"], correct: 2 },
    { question: "Wenn ich Zeit habe, ___ ich meine Freunde.", options: ["besuche", "besuchen", "besucht"], correct: 0 },
    { question: "Meine neue Wohnung ist viel ___ als meine alte.", options: ["groß", "größer", "am größten"], correct: 1 },
    { question: "Welcher Satz steht korrekt im Perfekt?", options: ["Ich habe gestern früh aufgestanden.", "Ich bin gestern früh aufgestanden.", "Ich bin gestern früh aufstehen."], correct: 1 },
    { question: "Ich muss noch einkaufen, ___ der Kühlschrank ist leer.", options: ["obwohl", "trotzdem", "denn"], correct: 2 },
    { question: "Ich weiß nicht, ___ der Zug heute pünktlich ankommt.", options: ["dass", "ob", "weil"], correct: 1 },
    { question: "Nachdem wir gegessen hatten, ___ wir einen Spaziergang.", options: ["machten", "machen", "gemacht"], correct: 0 },
    { question: "Ich habe gestern mit ___ neuen Kollegen gesprochen.", options: ["mein", "meinen", "meiner"], correct: 1 },
    { question: "Es ist wichtig, jeden Tag genug Wasser ___ trinken.", options: ["zu", "um", "für"], correct: 0 },
    { question: "Als ich ein Kind ___, verbrachte ich jeden Sommer bei meinen Großeltern.", options: ["bin", "war", "gewesen"], correct: 1 },
    { question: "Ich freue mich darauf, dich nächste Woche ___.", options: ["sehen", "gesehen", "zu sehen"], correct: 2 },
    { question: "Wir konnten nicht ins Kino gehen, ___ alle Karten bereits ausverkauft waren.", options: ["weil", "deshalb", "trotzdem"], correct: 0 },
    { question: "Ich habe meinen Schlüssel verloren. Ich kann ihn ___ finden.", options: ["niemand", "nirgendwo", "niemals"], correct: 1 },
    { question: "Das ist die Kollegin, mit ___ ich das Projekt abgeschlossen habe.", options: ["die", "deren", "der"], correct: 2 },
    { question: "Wenn ich mehr Geld hätte, ___ ich eine längere Reise machen.", options: ["würde", "werde", "wurde"], correct: 0 },
    { question: "Während ___ Urlaubs haben wir viele interessante Menschen kennengelernt.", options: ["unseren", "unseres", "unserem"], correct: 1 },
    { question: "Er hat mir versprochen, ___ er sich morgen bei mir meldet.", options: ["ob", "weil", "dass"], correct: 2 },
    { question: "Ich bin daran gewöhnt, früh ___.", options: ["aufzustehen", "aufstehen", "zu aufstehen"], correct: 0 },
    { question: "Wenn du mich gestern angerufen hättest, ___ ich dir geholfen.", options: ["werde", "hätte", "habe"], correct: 1 },
    { question: "Die Firma sucht Mitarbeiter, die über gute Deutschkenntnisse ___.", options: ["bestehen", "beherrschen", "verfügen"], correct: 2 },
    { question: "Er hat das Angebot abgelehnt, ___ es finanziell sehr attraktiv war.", options: ["obwohl", "weil", "damit"], correct: 0 },
    { question: "Die Prüfung war schwieriger, ___ ich erwartet hatte.", options: ["wie", "als", "wenn"], correct: 1 },
    { question: "Ich erinnere mich noch gut ___ unseren ersten gemeinsamen Urlaub.", options: ["über", "auf", "an"], correct: 2 },
    { question: "Das Problem muss so schnell wie möglich ___.", options: ["gelöst werden", "lösen werden", "gelöst haben"], correct: 0 },
    { question: "Er tut so, als ob er von dem Vorfall nichts ___.", options: ["weiß", "wüsste", "wusste"], correct: 1 },
    { question: "Der Bericht, ___ Ergebnisse gestern veröffentlicht wurden, hat großes Interesse geweckt.", options: ["dessen", "deren", "dem"], correct: 0 },
    { question: "Aufgrund ___ Wetters wurde die Veranstaltung abgesagt.", options: ["schlechtem", "schlechten", "des schlechten"], correct: 2 },
    { question: "Hätte ich früher von dem Problem erfahren, ___ ich sofort reagiert.", options: ["werde", "hätte", "habe"], correct: 1 },
    { question: "Die neue Regelung tritt erst im nächsten Jahr ___ Kraft.", options: ["in", "auf", "an"], correct: 0 },
    { question: "Die Mitarbeiter wurden gebeten, ihre Vorschläge bis Freitag ___.", options: ["einzureichen", "einreichen", "zu einreichen"], correct: 0 },
    { question: "Die Entscheidung hängt davon ab, ___ genügend finanzielle Mittel zur Verfügung stehen.", options: ["dass", "ob", "damit"], correct: 1 },
    { question: "Der Vertrag hätte bereits letzte Woche unterschrieben werden ___.", options: ["müssen", "gemusst", "musste"], correct: 0 },
    { question: "Er behauptete, er ___ von den Änderungen nichts gewusst.", options: ["hat", "sei", "habe"], correct: 2 },
    { question: "Die Regierung hat Maßnahmen ergriffen, um der steigenden Arbeitslosigkeit ___.", options: ["entgegenzuwirken", "entgegenzuwirken zu", "entgegenwirken"], correct: 0 },
    { question: "___ aller Schwierigkeiten gelang es dem Team, das Projekt rechtzeitig abzuschließen.", options: ["Wegen", "Trotz", "Aufgrund"], correct: 1 },
    { question: "Die Studie liefert wichtige Erkenntnisse, ___ bei zukünftigen Entscheidungen berücksichtigt werden sollten.", options: ["denen", "deren", "die"], correct: 2 },
    { question: "Er ist nicht nur fachlich kompetent, ___ verfügt auch über ausgezeichnete soziale Fähigkeiten.", options: ["aber", "sondern", "sondern er"], correct: 2 },
    { question: "Die Ergebnisse lassen darauf ___, dass die neue Methode wirksamer ist.", options: ["schließen", "beschließen", "ausschließen"], correct: 0 },
    { question: "Die Mitarbeiterin, ___ die Verantwortung für das Projekt übertragen wurde, verfügt über langjährige Erfahrung.", options: ["deren", "der", "die"], correct: 1 },
    { question: "Der Vorschlag wurde abgelehnt, ohne dass die möglichen Vorteile ausreichend ___.", options: ["prüfen", "geprüft hätten", "geprüft wurden"], correct: 2 },
    { question: "Angesichts der aktuellen Entwicklungen ist eine Anpassung der bisherigen Strategie ___.", options: ["erforderlich", "erforderlich zu", "erfordern"], correct: 0 },
    { question: "Der Minister erklärte, die Verhandlungen ___ noch nicht abgeschlossen.", options: ["sind", "seien", "wären gewesen"], correct: 1 },
    { question: "Die vorgeschlagenen Maßnahmen sind nur dann sinnvoll, ___ sie langfristig umgesetzt werden.", options: ["sofern", "dennoch", "hingegen"], correct: 0 },
    { question: "Die Ergebnisse der Untersuchung stehen im Widerspruch ___ bisherigen Annahmen.", options: ["mit den", "zu den", "auf die"], correct: 1 },
    { question: "Es bedarf weiterer Untersuchungen, ___ die langfristigen Auswirkungen zuverlässig beurteilen zu können.", options: ["damit", "ohne", "um"], correct: 2 },
    { question: "Der Vorstand sah sich gezwungen, die Entscheidung angesichts der veränderten Umstände ___.", options: ["zu revidieren", "revidiert zu", "zu revidiert"], correct: 0 },
    { question: "Die These, ___ die gesamte Argumentation beruht, ist wissenschaftlich umstritten.", options: ["worauf", "auf der", "auf die"], correct: 1 },
    { question: "Die Regierung steht vor der Herausforderung, wirtschaftliches Wachstum und ökologische Nachhaltigkeit miteinander ___.", options: ["in Verbindung stehen", "zur Verfügung stellen", "in Einklang zu bringen"], correct: 2 },
    { question: "Die Kommission empfahl, von weiteren Maßnahmen abzusehen, solange keine eindeutigen Beweise ___.", options: ["vorlägen", "vorlegen", "vorgelegt hätten"], correct: 0 },
    { question: "Die neue Regelung ist nicht zuletzt darauf zurückzuführen, dass sich die wirtschaftlichen Rahmenbedingungen grundlegend ___.", options: ["verändert hätten sein", "verändert haben", "verändern worden sind"], correct: 1 },
    { question: "Die Argumentation des Autors ist insofern problematisch, ___ sie wesentliche Gegenargumente außer Acht lässt.", options: ["obwohl", "indem", "als"], correct: 2 },
    { question: "Die Untersuchungsergebnisse legen nahe, dass die bisherige Vorgehensweise einer grundlegenden Überprüfung ___.", options: ["bedarf", "benötigt", "verlangt"], correct: 0 },
    { question: "Die geplante Reform dürfte erhebliche Auswirkungen haben, deren Tragweite sich zum gegenwärtigen Zeitpunkt kaum ___.", options: ["abschätzen lassen", "abschätzen lässt", "abschätzen gelassen wird"], correct: 1 }
];

let userData = {};

function getLevel(score) {
    if (score >= 56) {
        return { ru: "Продвинутый (C2)", en: "Proficiency (C2)" };
    }
    if (score >= 51) {
        return { ru: "Продвинутый (C1)", en: "Advanced (C1)" };
    }
    if (score >= 43) {
        return { ru: "Выше среднего (B2+)", en: "Upper-Intermediate (B2+)" };
    }
    if (score >= 36) {
        return { ru: "Выше среднего (B2)", en: "Upper-Intermediate (B2)" };
    }
    if (score >= 29) {
        return { ru: "Средний (B1+)", en: "Intermediate (B1+)" };
    }
    if (score >= 22) {
        return { ru: "Средний (B1)", en: "Intermediate (B1)" };
    }
    if (score >= 16) {
        return { ru: "Ниже среднего (A2+)", en: "Elementary (A2+)" };
    }
    if (score >= 10) {
        return { ru: "Ниже среднего (A2)", en: "Elementary (A2)" };
    }
    if (score >= 5) {
        return { ru: "Начальный (A1+)", en: "Beginner (A1+)" };
    }
    return { ru: "Начальный (A1)", en: "Beginner (A1)" };
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
        questionText.textContent = (index + 1) + ". " + q.question;

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "options-container";

        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "q" + index;
            input.value = optIndex;
            input.id = "q" + index + "_" + optIndex;

            const label = document.createElement("label");
            label.htmlFor = "q" + index + "_" + optIndex;
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
        const selected = document.querySelector("input[name='q" + index + "']:checked");
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
    const level = getLevel(userData.score);
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

    const level = getLevel(userData.score);

    document.getElementById("resultsContent").innerHTML =
        "<p><strong>" + userData.firstName + " " + userData.lastName + "</strong>, спасибо за прохождение теста!</p>" +
        "<div class=\"result-total\">" +
        "<div>Ваш результат:</div>" +
        "<strong>" + userData.score + " / " + userData.totalQuestions + "</strong>" +
        "<div style=\"margin-top: 1rem; font-size: 1rem;\">Уровень: " + level.ru + "</div>" +
        "</div>" +
        "<p style=\"margin-top: 1.5rem;\">Ваши результаты отправлены преподавателю. Вы получите обратную связь в ближайшее время.</p>";
}
