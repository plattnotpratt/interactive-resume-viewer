async function mainFunc(){
    let result = await fetch("./resume-test.json");
    const resume = await result.json();

    const resume_keys = Object.keys(resume);
    const name = resume.name;
    const tilte = resume.title;
    
    generatePTB(name, tilte);
    
    resume_keys.forEach(key => {
        const title = key.charAt(0).toUpperCase() + key.slice(1);
        if(key === "name" || key === "title") return;
        generateCardSection(title, resume[key]);
    });
    generateNavigation(resume_keys);
}

const generateNavigation = (titles) => {
    const nav = document.getElementById("nav");
    titles.forEach(title => {
        if(title === "name" || title === "title") return;
        const a = document.createElement("a");
        a.href = "#" + title.toLowerCase();
        a.classList = "nav-link";
        a.textContent = title;
        nav.appendChild(a);
    });
}

const generateCardSection = (title, data) => {
    let section = document.createElement("section");
    section.id = title.toLowerCase();
    let h2 = document.createElement("h4");
    const container = document.createElement("div");
    container.className = "container";
    h2.textContent = title;
    section.appendChild(h2);
    section.appendChild(container);

    document.getElementById("main").appendChild(section);
    for( let i = 0; i < data.length; i++ ){
        let card = buildCard(data[i].title, data[i].description);
        container.appendChild(card);
    }

    
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

    let title = document.createElement("h5");
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