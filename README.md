# Interactive Resume JSON Viewer

This project is a lightweight web application that renders a resume from a structured JSON file. It allows users to view, and explore a resume generated directly from JSON.

I built this project in **1 hour** to demonstrate how quickly I can take an idea from outline → implementation → deployment. The result is both a useful tool and a creative showcase for my resume.

*For demo: [https://plattnotpratt.github.io/interactive-json-viewer/](https://plattnotpratt.github.io/interactive-resume-viewer/ {target=_blank})*

---

## Features

* **JSON-powered resume** – the resume is stored in a single `resume.json` file for easy editing.
* **Interactive viewer** – sections like *Summary, Education, Experience, Projects, Awards, Skills* are rendered dynamically.
* **Simple filter/search** – quickly filter skills, experience, or projects.
* **Responsive design** – styled with css for clean, modern visuals.
* **Portable & customizable** – easily swap in any JSON resume data.

---

## Tech Stack

* **HTML + JavaScript** for structure and interactivity.
* **CSS 3** for styling.
* **JSON** as the data source for the resume.

---

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/plattnotpratt/resume-json-viewer.git
   cd resume-json-viewer
   ```

2. Open `index.html` in your browser.
   (No build tools required — it runs entirely in the browser.)

---

## Project Structure

```
.
├── index.html      # Main app
├── main.js       # JS logic for loading & rendering JSON
├── main.css       # Optional custom styles (in addition to Tailwind)
├── resume_test.json     # Resume data (edit this to customize)
└── README.md       # Project documentation
```

---

## Example JSON Format

Each section uses a simple `title` + `description` format for easy rendering:

```json
{
  "experience": [
    {
      "title": "Smith House Design LLC – Sr. Web Developer (2021–Present)",
      "description": "Developed 15+ responsive websites, led a team of 3 developers, improved client engagement by 40%."
    }
  ]
}
```

---

## What Was Accomplished

* [x] Converted my resume into structured JSON format.
* [x] Built a fully functional web app that dynamically displays the resume.
* [x] Styled with CSS 3 for a polished look.
* [x] Completed the project in **1 hour** as a demonstration of rapid prototyping.

---

## Why This Project?

This project shows how quickly I can:

* Prototype an idea from scratch.
* Work with structured data.
* Build a polished UI using modern tools.
* Ship something functional and professional under time constraints.
