// I have no idea who made the original one but kudos to you and I'll fork and star your repo if you can prove you're the original creator of this code
// (I've just touched it up a bit)

if (location.hostname != "create.kahoot.it") confirm("you aren't on create.kahoot.it\npress enter to redirect, and try again!") ? location = "https://create.kahoot.it/rest" : alert("ok, well this won't work then")

fetch(`https://create.kahoot.it/rest/kahoots/${prompt("paste or type in the Kahoot ID")}/card/?includeKahoot=true`)
    .then(res => res.json())
    .then(json => json.kahoot.questions
        .map((q, number) => {
            const { choices } = q
            for (let i in choices) {
                if (choices[i].correct) {
                    console.log("health check", i)
                    switch (i) {
                        case 0:
                            return `Q${number + 1}: red triangle - ${choices[i].answer}`;
                            break
                        case 1:
                            return `Q${number + 1}: blue diamond - ${choices[i].answer}`;
                            break
                        case 2:
                            return `Q${number + 1}: yellow circle - ${choices[i].answer}`;
                            break
                        case 3:
                            return `Q${number + 1}: green square - ${choices[i].answer}`;
                            break
                    }
                    console.log("should never get to here")
                }
            }
        })
        .join("\n"))
    .then(answers => {
        var win = open()
        win.document.head.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">`
        win.document.body.innerText = answers
    })