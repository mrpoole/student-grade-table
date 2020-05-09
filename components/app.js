class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.gradeTable = gradeTable,
            this.pageHeader = pageHeader,
            this.gradeForm = gradeForm,

            this.handleGetGradesError = this.handleGetGradesError.bind(this),
            this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this),
            this.createGrade = this.createGrade.bind(this),
            this.handleCreateGradeError = this.handleCreateGradeError.bind(this),
            this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this),
            this.deleteGrade = this.deleteGrade.bind(this),
            this.handleDeleteGradeError = this.handleCreateGradeError.bind(this),
            this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    }

    handleGetGradesError(error) {
        console.error(error);
    }

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

    createGrade(name, course, grade) {
        $.ajax(
            {
                url: 'https://sgt.lfzprototypes.com/api/grades',
                method: 'POST',
                dataType: 'json',
                headers: {
                    'X-Access-Token': 'QPdWiMcP'
                },
                data: {
                    "name": name,
                    "course": course,
                    "grade": grade
                },
                success: student => this.handleCreateGradeSuccess(student),
                error: error => this.handleCreateGradeError(error)
            }
        );
    }

    handleCreateGradeError(error) {
        console.error(error);
    }

    handleCreateGradeSuccess() {
        this.getGrades();
    }

    deleteGrade(id) {
        $.ajax({
            url: 'https://sgt.lfzprototypes.com/api/grades/' + id,
            method: 'DELETE',
            headers: {
                'X-Access-Token': 'QPdWiMcP'
            },
            success: data => this.handleDeleteGradeSuccess(data),
            error: error => this.handleDeleteGradeError(error)
        })
    }

    handleDeleteGradeError(error) {
        console.error(error);
    }

    handleDeleteGradeSuccess() {
        this.getGrades();
    }

    start() {
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    }
}