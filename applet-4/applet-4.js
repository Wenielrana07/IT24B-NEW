class StudentDirectory {
         
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.studentData = [];
        this.initialize();
    }


    async initialize() {
        await this.loadStudentData();
        this.displayStudentList(this.studentData); 
        this.setupSearchListener();
    }
 

}