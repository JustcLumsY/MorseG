function changeText(){
    response = '';
    if (numberCodeArray) {
        for (let i = 0 ; i < textValue.length; i++) {
            let search = textValue[i];
            let temp = numberCodeArray.indexOf(search);

            response += morseCodeArray[temp] + ' ';
        }
    }
    
    show();
}