//grabbing the table from the dom and passing it in as a parameter to GradeTable, which controls updating the grade table
const tableElement = $('table');
const gradeTable = new GradeTable(tableElement);

//grabbing the header from the dom and passing it to PageHeader, which updates the grade average
const headerElement = $('header');
const pageHeader = new PageHeader(headerElement);

//instantiating the app
const app = new App(gradeTable, pageHeader);
app.start();