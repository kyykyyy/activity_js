document.addEventListener("DOMContentLoaded", function() {
    var students = [
      { id: 07206480, name: "Kyla L. Casquejo", courseYear: "Infomation Technology - Year 2" },
      { id: 07206497, name: "Danielle Joy P. Casquejo", courseYear: "Infomation Technology - Year 2" },
      { id: 07203996, name: "Sheila Mae Berces", courseYear: "Computer Science -  Year 2" },
    ];

    var tableBody = document.getElementById("studentTableBody");
    students.forEach(function(student) {
      var row = tableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = student.id;
      cell2.innerHTML = student.name;
      cell3.innerHTML = student.courseYear;
    });
  });
  
  function printStudentList() {
    alert("Printing student list...");
  }