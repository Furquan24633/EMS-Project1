import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard"

// This cmd help to clr local sotrage //
// localStorage.clear()    

const employees = [ 
    {
        "id": 1,
        "firstName": "Ahmed",
        "email": "a@a.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-12-20",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Fix bugs for better performence",
                "taskDate": "2024-12-18",
                "category": "Software"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Make a Youtube Video",
                "taskDescription": "Make Youtube video for educational purpose",
                "taskDate": "2024-12-21",
                "category": "Editor"
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD Pipeline",
                "taskDescription": "Implement continuous integration and continuous delivery pipeline for the new software project.",
                "taskDate": "2024-12-22",
                "category": "Infrastructure"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Monitor Server Performance",
                "taskDescription": "Monitor the server performance metrics and optimize resource usage.",
                "taskDate": "2024-12-19",
                "category": "Monitoring"
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Rehan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Define Software Requirements",
                "taskDescription": "Gather and define the requirements for the new software product, including features and user stories.",
                "taskDate": "2024-12-20",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Customer Feedback Review",
                "taskDescription": "Review customer feedback for the latest software release and prioritize future updates.Review customer feedback for the latest software release and prioritize future updates.",
                "taskDate": "2024-12-18",
                "category": "Customer Support"
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Ayaan",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop Login Feature",
                "taskDescription": "Create a secure login feature with multi-factor authentication.",
                "taskDate": "2024-12-22",
                "category": "Backend Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Bug in User Profile Page",
                "taskDescription": "Resolve a UI bug causing profile pictures not to load on the user profile page.",
                "taskDate": "2024-12-19",
                "category": "Frontend Development"
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Priya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-12-23",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-12-21",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-12-18",
                "category": "QA"
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        }
    }
];


const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}]

export let setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    return{employees,admin}
    
}
