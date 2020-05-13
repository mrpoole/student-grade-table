class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement,
            this.noGradesElement = noGradesElement
    };

    updateGrades(grades) {
        //empties the grade table
        const tbody = $(this.tableElement).find('tbody');
        $(tbody).empty();

        //updates the grades and renders the row
        grades.forEach(student => {
            tbody.append(this.renderGradeRow(student, this.deleteGrade));
        })

        //displays a message if there are no grades
        if (grades.length != 0) {
            $("#no-grades").removeClass('d-block');
        } else {
            $("#no-grades").addClass('d-block');
        }
    }

    onDeleteClick(deleteGrade) {
        this.deleteGrade = deleteGrade;
    }

    renderGradeRow(data, deleteGrade) {
        const button = $('<button>DELETE</button>').addClass('btn btn-danger').click(() => deleteGrade(data.id));

        const renderedRow = $('<tr>')
            .append($('<td>').append(data.name))
            .append($('<td>').append(data.course))
            .append($('<td>').append(data.grade))
            .append($('<td>').append(button));

        return renderedRow;
    }
}