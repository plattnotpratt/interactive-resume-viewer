async function mainFunc(){
    let result = await fetch("./resume-test.json");
    const resume = await result.json();
    const name = resume.name;
    const tilte = resume.title;
    generatePTB(name, tilte);
    generateSkillsCard(resume.skills);
    generateExperienceCard(resume.experience);
    generateProjectsCard(resume.projects);

}



let generatePTB = (name, title) => {
    let ptb = document.getElementById("ptb");
    ptb.children[0].textContent = "Name: " + name;
    ptb.children[1].textContent = "Title: " + title;
}

let generateSkillsCard = (skills) => {
    let skillsSection = document.getElementById("skills-list");
    skills.forEach(skill => {
        let card = buildCard(skill);
        skillsSection.appendChild(card);
    });
}

let generateExperienceCard = (experience) => {
    let experienceSection = document.getElementById("experience-list");
    experience.forEach(exp => {
        let card = buildCard(exp.company + " - " + exp.role + " : " + exp.year, exp.highlights);
        console.log(exp.highlights);
        experienceSection.appendChild(card);
    });
}

let generateProjectsCard = (projects) => {
    let projectsSection = document.getElementById("projects-list");
    projects.forEach(project => {
        let card = buildCard(project.name, project.description);
        projectsSection.appendChild(card);
    });
}


let buildCard = (cardTitle, cardDescription) => {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h3");
    title.textContent = cardTitle;
    card.appendChild(title);

    if(cardDescription){
        if(Array.isArray(cardDescription)){
            const ul = document.createElement("ul");
            cardDescription.forEach(desc => {
                const li = document.createElement("li");
                li.textContent = desc;
                ul.appendChild(li);
            });
            card.appendChild(ul);
        }else{
            let description = document.createElement("p");
            description.textContent = cardDescription;
            card.appendChild(description);
        }
    }else{
        //do nothing
    }
    return card;
}

mainFunc();