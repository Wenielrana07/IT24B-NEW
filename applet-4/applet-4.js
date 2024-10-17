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

    displayStudentList(students) {
        const listContainer = document.getElementById('studentList');
        listContainer.innerHTML = students.map(student => 
            `<button class="btn btn-primary my-2" style="width:25rem">
                ${student.student_name} | ${student.student_program}
            </button>`
        ).join('');
    }

    setupSearchListener() {
        const searchInput = document.getElementById('studentSearchBar');
        const searchResultsContainer = document.getElementById('studentSearchList');

        searchInput.addEventListener('input', () => {
            this.searchStudents(searchInput.value, searchResultsContainer);
        });

        this.displayStudentList(this.studentData, searchResultsContainer);
    }

    
    searchStudents(query, resultsContainer) {
        const matchedStudents = this.studentData.filter(student => {
            const fullInfo = `${student.student_name} ${student.student_program}`;
            return fullInfo.toLowerCase().includes(query.toLowerCase());
        });

        resultsContainer.innerHTML = '';

        this.displayStudentList(matchedStudents, resultsContainer);
    }
    
}
 

}