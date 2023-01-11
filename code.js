// I have no idea who made the original one but kudos to you and I'll fork and star your repo if you can prove you're the original creator of this code
// (I've just touched it up a bit)
if (location.hostname == "create.kahoot.it") var id = prompt("paste or type in the Kahoot ID");
else if (confirm("you aren't on create.kahoot.it\npress enter to redirect, and try again from there!")) location = "https://create.kahoot.it/rest/kahoots/KAHOOT_ID/card/?includeKahoot=true";

fetch(`https://create.kahoot.it/rest/kahoots/${id}/card/?includeKahoot=true`)
    .then(res => res.json())
    .then(json => json.kahoot.questions
        .map((q, number) => {
            if ("choices" in q) {
                for (let i = 0, n = q.choices.length; i < n; i++) {
                    const choice = q.choices[i];
                    if (choice.correct) return `Q${number + 1}: ${["red triangle", "blue diamond", "yellow circle", "green square"][i]} - ${choice.answer}`;
                }
                return `Q${number + 1}: couldn't parse question. it's probably a puzzle. good luck lol`
            } else {
                return `Q${number + 1} has no correct answer, have fun! :)`;
            }
        }).join("\n")
    )
    .then(answers => {
        var win = open();
        win.document.head.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">`;
        win.document.body.innerHTML = answers.replaceAll("\n", "<hr>");
    })