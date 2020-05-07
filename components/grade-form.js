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
        console.log('in handleSubmit');
        event.preventDefault();
    }
}