show();
function show() {
    document.getElementById('app').innerHTML = `

        <input type="text" onchange="textValue = this.value" id="text" name="text"></input>
        <button onclick="changeText()">textings</button><br/>
        ${response}
        

    `;
}