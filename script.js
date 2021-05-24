// lidu hackaton home page

// Read data from quizz.json : a list of objects question/answers/position of correct answer stored in a constant qa

// Add each group made of one question and its answers, one by one
function addGroups(quizz) {
    let count = 0;
    for (group of quizz) {
        count++;
        let setdiv = document.createElement('div');
        setdiv.classList.add("qa");
        setdiv.setAttribute("id", count.toString());
        document.getElementsByClassName('main')[0].appendChild(setdiv);

        let setdivq = document.createElement('div');
        setdivq.classList.add("q", "btn", "btn-outline-success");
        setdivq.innerText = count.toString() + ". " + group.question;
        setdiv.appendChild(setdivq);

        let counta = 0
        let setdivga = document.createElement('div');
        setdivga.classList.add("answers");
        setdiv.appendChild(setdivga)
        for (answ of group.answers) {
            counta++;
            let setdiva = document.createElement('button');
            setdiva.classList.add("a", "btn", "btn-outline-info");
            if (counta == group.correct) {
                setdiva.classList.add("c")
            };
            setdiva.innerText = answ;
            setdivga.appendChild(setdiva);
        };
        let seteval = document.createElement('div');
        seteval.setAttribute("id", "eval" + count.toString());
        setdivga.appendChild(seteval);
    };
};

function evaluate(pos, str) {
    if (str === 'c') { result = "Correct !" } else { result = "Wrong !" };
    document.getElementById("eval" + pos).innerHTML = result;
}

addGroups(qa);