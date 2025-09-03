async function mainFunc(){
    let result = await fetch("./resume-test.json");
    const resume = await result.json();
    const name = resume.name;
    const tilte = resume.title;
    generatePTB(name, tilte);

}


let generatePTB = (name, title) => {
    let ptb = document.getElementById("ptb");
    ptb.children[0].textContent = name;
    ptb.children[1].textContent = title;
}


let buildCard = (data) => {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.textContent = data.title;
    card.appendChild(title);

    let description = document.createElement("p");
    description.textContent = data.description;
    card.appendChild(description);

    return card;
}

mainFunc();