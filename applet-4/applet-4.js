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


    async loadStudentData() {
        try {
            const response = await fetch(this.apiUrl);
            this.studentData = await response.json();
        } catch (error) {
            console.error('Error loading student data:', error);
        }
    }
 

}