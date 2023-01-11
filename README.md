# Bens-Mini-Project-5: Project Tracker

In this project, you will work with others to create a project tracker application using Bootstrap, Google Fonts, jQuery and Day.js. Break up these phases amongst members of your team.

## Instructions
This mini-project is divided into four tasks. The first three tasks will get you to MVP, so focus on those first!

### Task 1: HTML Build
1. Create a header/hero area that welcomes users to the application and displays the current time and date using Day.js. The current time and date should be updated every second with `setInterval()`. The data should be formatted with the abbreviated month, day, full year, and time (e.g. `Jun 30, 2022 at 08:37:48 am`).
2. Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a [Bootstrap modal dialog](https://getbootstrap.com/docs/5.1/components/modal/).
3. The modal should contain a form asking users to fill in the following data:
    * The name of the project.
    * The type of project (use a `<select>` drop-down).
    * The date the project is due (use the `date` input type).
    * Optional: Use the jQuery UI datepicker instead of `date` input type.
4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:
    * Project name
    * Project type
    * Due date
While you build, remember the following guidelines:
* Ensure that any elements you need to interact with using JavaScript/jQuery are properly identified (e.g., form elements, the table body, etc.).
* Use different `<input>` element attributes to help enforce rules, like different `type` attribute values, minimum values, and required! See the [MDN web docs on the HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more guidance.
* When in doubt, read the Bootstrap documentation.

---

### Task 2: Capture Form Data
1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.
2. Select and save references to every DOM element we will interact with to a variable (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.
3. Attach a submit event listener to the `<form>` element using jQuery.
4. On submission, capture the input values from the form and update localStorage so that the projects that have been added are persistent. Clear the form data so that the user can easily add additional projects.
5. Call the function to print the project data on the page.
6. Ensure the modal closes when the user submits the form.

---

### Task 3: Print Project Data to Page
1. Create a function that will read the saved projects from localStorage.
2. Create a table row (`<tr>`) element and save it to a variable.
3. If the project is past due, give the row a class so that the row for the project will have a light red background. If the project is due today, give the row a class so that the row will have a light yellow background.
4. Create a table detail (`<td>`) element for each of the corresponding project fields in Task 1.
5. Append each `<td>` element to the `<tr>`.
6. Append each `<tr>` to the `<tbody>` element on the page.
7. Don't forget to clear the `<tbody>` before adding all the rows.
8. Add a call to the function when the page loads.
9. Update the function responsible for capturing form data so that it calls the function for printing the data.

---

### Task 4: Delete a Project From the Table
1. Update the table to accommodate one more column without a name.
2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.
3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent `<tr>` element will be removed from the page and the project is removed from localStorage. (HINT: How might using a data-* attribute be helpful?)

## Grading Requirements
Nil

## What I Learned
We introduced to Bootstrap, Google Fonts, jQuery and Day.js this week whilst expanding on JavaScript from the previous couple of weeks. 

Following on from last few weeks, colaboration is definately key and to speak up and ask questions within the lectures.

## What Problems Did we Solve?
I created a HTML, CSS, JavaScript and README files from scratch. 

# Installation
N/A

# Usage
To use and view this challenge please use this the following link to access the deployed website: "https://benarmstrong81.github.io/Bens-Mini-Project-5/" 

My JavaScript ran Project Tracker page used BootStrap and JQuery API's. The 'Add Project' section includes a Modus that will allow you to use; free form text, drop down and a date selector. Within the JavaScript it will store the inputs to local storage, place them in an array and display within the view port. It will also give you the function to delete your uniquely names projects whilst keeping the others visible and diplaying them in order.
The following image shows the web application's appearance:

![My Web Development Portfolio webpage includes a navigation bar, a professional head shot image, multiple links (placeholders at this stage) to projects completed within the UniSA Full Stack Web Development course, and working links to contact me - even download an updated resume.](./images/Bens-Mini-Porject-5.png)

# Credits
With special thanks to the UniSA Full Stack Web Development Class.

# License

Please refer to the LICENSE in the repo.