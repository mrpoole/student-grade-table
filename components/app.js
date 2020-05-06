class App {
    constructor() {

        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }

    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        console.log(grades);
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