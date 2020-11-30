const wiresInput3 = document.getElementById('3wires');
const wiresInput4 = document.getElementById('4wires');
const wiresInput5 = document.getElementById('5wires');
const wiresInput6 = document.getElementById('6wires');
const wiresOutput = document.getElementById('wiresOutput');

wiresInput3.addEventListener("click", mouseClick3);
wiresInput4.addEventListener("click", mouseClick4);
wiresInput5.addEventListener("click", mouseClick5);
wiresInput6.addEventListener("click", mouseClick6);

function mouseClick3() {
    wiresOutput.innerHTML = (
        `1. If there are no red wires, cut the <strong>second</strong> wire.<br>
        2. If the <strong>last</strong> wire is white, cut the <strong>last</strong> wire.<br>
        3. If there is more than one blue wire, cut the <strong>last</strong> blue wire.<br>
        4. Cut the <strong>last</strong> wire.`
    );
}

function mouseClick4() {
    wiresOutput.innerHTML = (
        `1. If there is <strong>more than one</strong> red wire and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>last</strong> red wire.<br>
        2. If the <strong>last</strong> wire is yellow and there are <strong>no</strong> red wires, cut the <strong>first</strong> wire.<br>
        3. If there is <strong>exactly one</strong> blue wire, cut the <strong>first</strong> wire.<br>
        4. If there is <strong>more than one</strong> yellow wire, cut the <strong>last</strong> wire.<br>
        5. Cut the <strong>second</strong> wire.`
    );
}

function mouseClick5() {
    wiresOutput.innerHTML = (
        `1. If the <strong>last</strong> wire is black and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>fourth</strong> wire.<br>
        2. If there is <strong>exactly one</strong> red wire and there is <strong>more than one</strong> yellow wire, cut the <strong>first</strong> wire.<br>
        3. If there are <strong>no</strong> black wires, cut the <strong>second</strong> wire.<br>
        4. Cut the <strong>first</strong> wire.`
    );
}

function mouseClick6() {
    wiresOutput.innerHTML = (
        `1. If there are <strong>no</strong> yellow wires and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>third</strong> wire.<br>
        2. If there is <strong>exactly one</strong> yellow wire and there is <strong>more than one</strong> white wire, cut the <strong>fourth</strong> wire.<br>
        3. If there are <strong>no</strong> red wires, cut the <strong>last</strong> wire.<br>
        4. Cut the <strong>fourth</strong> wire.`
    );
}