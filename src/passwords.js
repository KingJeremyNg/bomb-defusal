const passwordsInput = document.getElementById('passwordsInput');
const passwordsOutput = document.getElementById('passwordsOutput');

passwordsInput.onkeydown = keyPress;

const passwords = [
    "about", "after", "again", "below", "could",
    "every", "first", "found", "great", "house",
    "large", "learn", "never", "other", "place",
    "plant", "point", "right", "small", "sound",
    "spell", "still", "study", "their", "there",
    "these", "thing", "think", "three", "water",
    "where", "which", "world", "would", "write"
]

function keyPress(e) {
    let letters = passwordsInput.value.split("");
    if (letters.length >= 30) {
        let array2d = []
        for (let i = 0; i < 5; i++) {
            array2d.push(letters.splice(0, 6));
        }

        let temp = combos(array2d);
        let answers = []
        temp.forEach(element => {
            if (passwords.includes(element.join(""))) answers.push(element.join(""))
        });

        passwordsOutput.innerHTML = `Answer: ${answers}`;
    }
    else {
        passwordsOutput.innerHTML = `Input too short`;
    }
}

function combos(list, n = 0, result = [], current = []) {
    if (n === list.length) result.push(current)
    else list[n].forEach(item => combos(list, n + 1, result, [...current, item]))
    return result
}
