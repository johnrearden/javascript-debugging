document.addEventListener('DOMContentLoaded', () => {

    const selectElement = document.querySelector('#employee-select');
    const displayCardTitle = document.querySelector('#card-title');
    const displayCardTextRole = document.querySelector('.card-text-role');
    const displayCardTextDate = document.querySelector('.card-text-date');

    // Populate the dropdown with the list of employees
    employeeData.forEach(employee => {
        const option = document.createElement('li');
        option.value = employee.title;
        option.textContent = employee.name;
        selectElement.appendChild(option);
    });

    

    // Add a listener to the dropdown element to pick up changes
    selectElement.addEventListener('input', (event) => {
        // Get the selected value
        const selectedValue = event.target.value;

        // Find the employee data that matches the selected value
        const selectedEmployee = employeeData.find(
            employee => employee.name === selectedValue
        );

        populateCard(selectedEmployee);
    });

    const populateCard = (employee) => {
        // Set the card title as the name of the employee
        displayCardTitle.textContent = `Name: ${employee.name}`;
    
        // Add the role and date joined to the card
        displayCardTextRole.textContent = `Role: ${employee.title}`;
    
        const firstName = employee.name.split(' ')[0];
        const date = new Date(employee.dateStarted).toLocaleDateString();
        const blurb = `${firstName} joined the company on ${date}`;
        displayCardTextDate.textContent = blurb;
    };

    populateCard(employeeData[0]);

});



const employeeData = [
    {
        name: "John Doe",
        title: "Software Engineer",
        dateJoined: "2020-01-01",
    },
    {
        name: "Jane Smith",
        title: "Project Manager",
        dateJoined: "2019-03-15",
    },
    {
        name: "Alice Johnson",
        title: "UX Designer",
        dateJoined: "2018-07-22",
    },
    {
        name: "Bob Brown",
        title: "DevOps Engineer",
        dateJoined: "2021-05-30",
    },
    {
        name: "Charlie Davis",
        title: "Data Scientist",
        dateJoined: "2017-11-10",
    },
    {
        name: "Diana Evans",
        title: "Product Owner",
        dateJoined: "2016-02-25",
    },
    {
        name: "Ethan Foster",
        title: "QA Engineer",
        dateJoined: "2022-08-14",
    },
    {
        name: "Fiona Green",
        title: "Business Analyst",
        dateJoined: "2015-09-05",
    }
];