const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "This is task 1",
          "taskDate": "2023-03-01",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "This is task 2",
          "taskDate": "2023-03-05",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "This is task 3",
          "taskDate": "2023-02-20",
          "category": "Testing"
        },
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 4",
          "taskDescription": "This is task 4",
          "taskDate": "2023-03-10",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 5",
          "taskDescription": "This is task 5",
          "taskDate": "2023-03-15",
          "category": "Design"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 6",
          "taskDescription": "This is task 6",
          "taskDate": "2023-03-01",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 7",
          "taskDescription": "This is task 7",
          "taskDate": "2023-03-05",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 8",
          "taskDescription": "This is task 8",
          "taskDate": "2023-02-20",
          "category": "Testing"
        },
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 9",
          "taskDescription": "This is task 9",
          "taskDate": "2023-03-10",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 10",
          "taskDescription": "This is task 10",
          "taskDate": "2023-03-15",
          "category": "Design"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 11",
          "taskDescription": "This is task 11",
          "taskDate": "2023-03-01",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 12",
          "taskDescription": "This is task 12",
          "taskDate": "2023-03-05",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 13",
          "taskDescription": "This is task 13",
          "taskDate": "2023-02-20",
          "category": "Testing"
        },
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 14",
          "taskDescription": "This is task 14",
          "taskDate": "2023-03-10",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 15",
          "taskDescription": "This is task 15",
          "taskDate": "2023-03-15",
          "category": "Design"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 16",
          "taskDescription": "This is task 16",
          "taskDate": "2023-03-01",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 17",
          "taskDescription": "This is task 17",
          "taskDate": "2023-03-05",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 18",
          "taskDescription": "This is task 18",
          "taskDate": "2023-02-20",
          "category": "Testing"
        },
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 19",
          "taskDescription": "This is task 19",
          "taskDate": "2023-03-10",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 20",
          "taskDescription": "This is task 20",
          "taskDate": "2023-03-15",
          "category": "Design"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 21",
          "taskDescription": "This is task 21",
          "taskDate": "2023-03-01",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 22",
          "taskDescription": "This is task 22",
          "taskDate": "2023-03-05",
          "category": "Design"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 23",
          "taskDescription": "This is task 23",
          "taskDate": "2023-02-20",
          "category": "Testing"
        },
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 24",
          "taskDescription": "This is task 24",
          "taskDate": "2023-03-10",
          "category": "Development"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 25",
          "taskDescription": "This is task 25",
          "taskDate": "2023-03-15",
          "category": "Design"
        }
      ]
    }
  ]

const admin = [
    {
      "id": 0,
      "email": "admin@example.com",
      "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees') ?? '[]');
  const admin = JSON.parse(localStorage.getItem('admin') ?? '[]');

  return { employees, admin };
}