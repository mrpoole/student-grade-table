class GradeForm {
    constructor(formElement){
        this.formElement = formElement,
        this.handleSubmit = this.handleSubmit.bind(this),
        this.formElement.submit(this.handleSubmit)
    }

    onSubmit(createGrade){
        this.createGrade = createGrade;
    }

    handleSubmit(event){
        //console.log('in handleSubmit', event.target);
        event.preventDefault();

        let formData = new FormData(event.target);

        const name = formData.get('name');
        const course = formData.get('course');
        const grade = formData.get('grade');

        this.createGrade(name, course, grade);

        event.target.reset();
    }
}