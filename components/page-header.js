class PageHeader {
    constructor(headerElement){
        this.headerElement = headerElement
    }

    updateAverage(newAverage){
        $('.badge').text(newAverage);
    }
}