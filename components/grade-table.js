class GradeTable {
    constructor(tableElement){
        this.tableElement = tableElement
    };

    updateGrades(grades){
        //empties the grade table
        const tbody = $(this.tableElement).find('tbody');
        $(tbody).empty();

        //updates the grade table
        grades.forEach( student => {
            tbody.append(
                $('<tr>')
                    .append($('<td>').append(student.name))
                    .append($('<td>').append(student.course))
                    .append($('<td>').append(student.grade))
            )
        });
    }
}