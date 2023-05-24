let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "AC":
                output.innerText = '';
                break;
            case "=":
                try{
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = "Error"
                }
                break;
            case "Del":
                if (output.innerText){
                   output.innerText = output.innerText.slice(0, -1);
                }
                break;
            default:
                output.innerText += e.target.innerText;
        }
    });
});