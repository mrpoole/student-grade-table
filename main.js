//grabbing the table from the dom and passing it in as a parameter to GradeTable, which controls updating the grade table
const tableElement = document.getElementById('table');
const gradeTable = new GradeTable(tableElement);

//instantiating the app
const app = new App(gradeTable);
app.start();