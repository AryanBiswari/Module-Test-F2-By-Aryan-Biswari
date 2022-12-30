// Get a reference to the search bar, search button, and the table body
const searchBar = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const tableBody = document.querySelector("tbody");
const sortAZButton = document.querySelector(".buttons button:nth-child(1)");
const sortZAButton = document.querySelector(".buttons button:nth-child(2)");
const sortMarksButton = document.querySelector(".buttons button:nth-child(3)");
const sortPassingButton = document.querySelector(
  ".buttons button:nth-child(4)"
);
const sortClassButton = document.querySelector(".buttons button:nth-child(5)");
// const sortGenderButton = document.querySelector(".buttons button:nth-child(6)");
// const container = document.querySelector(".container");

fetch("MOCK_DATA.json")
  .then((response) => response.json())
  .then((data) => {
    searchButton.addEventListener("click", (event) => {
      const searchTerm = searchBar.value.toLowerCase();

      let filteredData;
      if (searchTerm) {
        filteredData = data.filter((student) => {
          return (
            student.first_name.toLowerCase().includes(searchTerm) ||
            student.last_name.toLowerCase().includes(searchTerm) ||
            student.email.toLowerCase().includes(searchTerm)
          );
        });
      } else {
        filteredData = data;
      }

      tableBody.innerHTML = "";

      filteredData.forEach((student) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);

        tableBody.appendChild(row);
      });
    });

    // SORT FUNCTIONALITTY A TO Z

    sortAZButton.addEventListener("click", (event) => {
      // Sort the array by full name in ascending order
      const sortedData = data.sort((a, b) => {
        const fullNameA = `${a.first_name} ${a.last_name}`;
        const fullNameB = `${b.first_name} ${b.last_name}`;
        if (fullNameA < fullNameB) {
          return -1;
        } else if (fullNameA > fullNameB) {
          return 1;
        } else {
          return 0;
        }
      });

      tableBody.innerHTML = "";

      sortedData.forEach((student) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);

        tableBody.appendChild(row);
      });
    });

    // Sort in Z TO A format
    sortZAButton.addEventListener("click", (event) => {
      // Sort the array by full name in descending order
      const sortedData = data.sort((a, b) => {
        const fullNameA = `${a.first_name} ${a.last_name}`;
        const fullNameB = `${b.first_name} ${b.last_name}`;
        if (fullNameA > fullNameB) {
          return -1;
        } else if (fullNameA < fullNameB) {
          return 1;
        } else {
          return 0;
        }
      });

      tableBody.innerHTML = "";

      sortedData.forEach((student) => {
        // Create a new row in the table
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);
        tableBody.appendChild(row);
      });
    });

    // Sort by marks means ascending order of marks.
    sortMarksButton.addEventListener("click", (event) => {
      // Sort the array by marks in ascending order
      const sortedData = data.sort((a, b) => a.marks - b.marks);

      tableBody.innerHTML = "";

      sortedData.forEach((student) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);

        tableBody.appendChild(row);
      });
    });

    //Sort by passing means only showing students who are passing.
    sortPassingButton.addEventListener("click", (event) => {
      const filteredData = data.filter((student) => student.passing);

      tableBody.innerHTML = "";

      filteredData.forEach((student) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);

        tableBody.appendChild(row);
      });
    });

    //   Sort by class means in the ascending order of class.
    sortClassButton.addEventListener("click", (event) => {
      // Sort the array by class in ascending order
      const sortedData = data.sort((a, b) => a.class - b.class);

      tableBody.innerHTML = "";

      sortedData.forEach((student) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.appendChild(document.createTextNode(student.id));

        const nameCell = document.createElement("td");
        const nameImg = document.createElement("img");
        nameImg.src = student.image;
        nameImg.alt = "img";
        nameCell.appendChild(nameImg);
        nameCell.appendChild(
          document.createTextNode(`${student.first_name} ${student.last_name}`)
        );

        const emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(student.email));

        const marksCell = document.createElement("td");
        marksCell.appendChild(document.createTextNode(student.marks));

        const passingCell = document.createElement("td");
        if (student.passing) {
          passingCell.appendChild(document.createTextNode("passing"));
        } else {
          passingCell.appendChild(document.createTextNode("failing"));
        }

        const classCell = document.createElement("td");
        classCell.appendChild(document.createTextNode(student.class));

        const genderCell = document.createElement("td");
        genderCell.appendChild(document.createTextNode(student.gender));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(marksCell);
        row.appendChild(passingCell);
        row.appendChild(classCell);
        row.appendChild(genderCell);

        tableBody.appendChild(row);
      });
    });
  });
