var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');
// elect and save references to every DOM element we will interact with to a variable (i.e., var projectFormEl = $("#project-form");) so that we can use these elements later.

//---------------------------FUNCTION: for Displaying the time in header 
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//---------------------------FUNCTION: Getting input from local storage and putting into an Array, return empty if no projects to store
function readProjectsFromStorage() {
    var projects = localStorage.getItem('projects');
    if (projects) {
      projects = JSON.parse(projects);
    } else { 
        projects = [];
  }
  return projects;
}
//---------------------------FUNCTION: Saves Aray of project and store in local storage
function saveProjectsToStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

//---------------------------FUNCTION: Retreives local storage and displays it
function printProjectData() {

//----------clears current page
    projectDisplayEl.empty();

//-----------Retrieves projects keyed in from loacal storage
    var projects = readProjectsFromStorage();

//------------------LOOP: creates a row for each project input
for (var i = 0; i < projects.length; i += 1) {
    var project = projects[i];
    var projectDate = dayjs(project.date);

//-----------gets date/time for start of today
    var today = dayjs().startOf('day');

//-----------Create row and columns for each project
    var rowEl = $('<tr>');
    var nameEL = $('<td>').text(project.name);
    var typeEl = $('<td>').text(project.type);
    var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

//-----------Save the index of the project as a data-* attribute on the button. This will be used when removing the project from the array.
    var deleteEl = $(
      '<td><button class="btn btn-sm btn-delete-project" data-index="' +
        i +
        '">X</button></td>'
    );

//-----------Add class to row by comparing project date to today's date
    if (projectDate.isBefore(today)) {
      rowEl.addClass('project-late');
    } else if (projectDate.isSame(today)) {
      rowEl.addClass('project-today');
    }

//-----------Append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    projectDisplayEl.append(rowEl);
  }
}

//---------------------------FUNCTION: Removes a project from local storage and prints the remaining project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();

//-----------remove project from the array
  projects.splice(projectIndex, 1);
  saveProjectsToStorage(projects);

//-----------print projects
  printProjectData();
}

//---------------------------FUNCTION: Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

//-----------read user input from the form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

  var newProject = {
    name: projectName,
    type: projectType,
    date: projectDate,
  };

//-----------add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  saveProjectsToStorage(projects);

//-----------print project data
  printProjectData();

//-----------clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);


//---------------------------Running the timer updating every second
displayTime();
setInterval(displayTime, 1000);

printProjectData();