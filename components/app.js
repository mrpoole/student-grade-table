class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.gradeTable = gradeTable,
        this.pageHeader = pageHeader,
        this.gradeForm = gradeForm,

        this.handleGetGradesError = this.handleGetGradesError.bind(this),
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this),
        this.createGrade = this.createGrade.bind(this),
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this),
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
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

    createGrade(name, course, grade){
        console.log(name, course, grade);
    }

    handleCreateGradeError(error){
        console.error(error);
    }

    handleCreateGradeSuccess(){
        this.getGrades();
    }

    start(){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
    }

}