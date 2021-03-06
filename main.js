//grabbing the table from the dom and passing it in as a parameter to GradeTable, which controls updating the grade table
const tableElement = $('table');
const noGradesParagraph = $('#no-grades');
const gradeTable = new GradeTable(tableElement, noGradesParagraph);

//grabbing the header from the dom and passing it to PageHeader, which updates the grade average
const headerElement = $('header');
const pageHeader = new PageHeader(headerElement);

//grabbing the form and passing it to the GradeForm, which controls adding new student grades
const formElement = $('form');
const gradeForm = new GradeForm(formElement);

//instantiating the app
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();