class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.gradeTable = gradeTable,
        this.pageHeader = pageHeader,
        this.gradeForm = this.gradeForm,

        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }

    handleGetGradesError(error) {
        console.error(error);
    }

    //gets grades from getGrades
    //updates the grades in the table (from constructor param)
    //computes the grade average and passes it to this.pageHeader.updateAverage
    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);
        
        let classSize = grades.length;
        let gradeSum = 0;

        grades.forEach(student => {
            gradeSum += student.grade;
        })

        const average = gradeSum / classSize;

        this.pageHeader.updateAverage(average);
    }

    getGrades() {
        $.ajax(
            {
                url: 'https://sgt.lfzprototypes.com/api/grades',
                type: 'GET',
                dataType: 'json',
                headers: {
                    'X-Access-Token': 'QPdWiMcP'
                },
                success: grades => this.handleGetGradesSuccess(grades),
                error: error => this.handleGetGradesError(error)
            }
        );
    }

    start(){
        this.getGrades();
    }

}