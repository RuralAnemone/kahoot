if (window.location.host == "create.kahoot.it") {
    fetch(`https://create.kahoot.it/rest/kahoots/${prompt("Paste the Kahoot ID")}/card/?includeKahoot=true`).then(res => res.json()).then(json => json.kahoot.questions.map((q, number) => {
        const {
            choices
        } = q;
        for (let i = 0; i < choices.length; i += 1) {
            if (choices[i].correct) {
                switch (i) {
                    case 0:
                        return `Q${number+1}: red triangle - ${choices[i].answer }`;
                        break;
                    case 1:
                        return `Q${number+1}: blue diamond - ${choices[i].answer }`;
                        break;
                    case 2:
                        return `Q${number+1}: yellow circle - ${choices[i].answer }`;
                        break;
                    case 3:
                        return `Q${number+1}: green square - ${choices[i].answer }`;
                        break
                }
            }
        }
    }).join("\n")).then(answers => open().document.body.innerText = answers);
} else {
    alert("you aren't on create.kahoot.it\n\npress enter to redirect and try again");
    location = "https://create.kahoot.it"
}
