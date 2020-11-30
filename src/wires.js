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
        `<li>If there are <strong>no</strong> red wires, cut the <strong>second</strong> wire.</li>
        <li>If the <strong>last</strong> wire is white, cut the <strong>last</strong> wire.</li>
        <li>If there is <strong>more than one</strong> blue wire, cut the <strong>last</strong> blue wire.</li>
        <li>Cut the <strong>last</strong> wire.</li>`
    );
}

function mouseClick4() {
    wiresOutput.innerHTML = (
        `<li>If there is <strong>more than one</strong> red wire and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>last</strong> red wire.</li>
        <li>If the <strong>last</strong> wire is yellow and there are <strong>no</strong> red wires, cut the <strong>first</strong> wire.</li>
        <li>If there is <strong>exactly one</strong> blue wire, cut the <strong>first</strong> wire.</li>
        <li>If there is <strong>more than one</strong> yellow wire, cut the <strong>last</strong> wire.</li>
        <li>Cut the <strong>second</strong> wire.</li>`
    );
}

function mouseClick5() {
    wiresOutput.innerHTML = (
        `<li>If the <strong>last</strong> wire is black and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>fourth</strong> wire.</li>
        <li>If there is <strong>exactly one</strong> red wire and there is <strong>more than one</strong> yellow wire, cut the <strong>first</strong> wire.</li>
        <li>If there are <strong>no</strong> black wires, cut the <strong>second</strong> wire.</li>
        <li>Cut the <strong>first</strong> wire.</li>`
    );
}

function mouseClick6() {
    wiresOutput.innerHTML = (
        `<li>If there are <strong>no</strong> yellow wires and the <strong>last digit</strong> of the serial number is <strong>odd</strong>, cut the <strong>third</strong> wire.</li>
        <li>If there is <strong>exactly one</strong> yellow wire and there is <strong>more than one</strong> white wire, cut the <strong>fourth</strong> wire.</li>
        <li>If there are <strong>no</strong> red wires, cut the <strong>last</strong> wire.</li>
        <li>Cut the <strong>fourth</strong> wire.</li>`
    );
}
