 //you need to code here
 let appliedJobs = JSON.parse(localStorage.getItem("jobList")) || [];
 let bookMarkArr = JSON.parse(localStorage.getItem("bookmarks")) || [];
 displayTable(appliedJobs);
 // console.log(appliedJobs);
 document
   .querySelector("#sortName")
   .addEventListener("change", handleNameSort);

 document
   .querySelector("#sortSalary")
   .addEventListener("change", handleSalarySort);

 document
   .querySelector("#filterRole")
   .addEventListener("change", handleFilterRole);

 function handleSalarySort() {
   let selected = document.querySelector("#sortSalary").value;
   if (selected == "Ascending") {
     appliedJobs.sort(function (a, b) {
       if (a.personSalary > b.personSalary) return 1;
       if (a.personSalary < b.personSalary) return -1;
       return 0;
     });
     // console.log(appliedJobs);
     displayTable(appliedJobs);
   }
   if (selected == "Descending") {
     appliedJobs.sort(function (a, b) {
       if (a.personSalary > b.personSalary) return -1;
       if (a.personSalary < b.personSalary) return 1;
       return 0;
     });
     // console.log(appliedJobs);
     displayTable(appliedJobs);
   }
 }

 function handleFilterRole() {
   let selected = document.querySelector("#filterRole").value;
   let filterList = appliedJobs.filter(function (elem) {
     return elem.personRole == selected;
   });
   // console.log(filterList);
   displayTable(filterList);
 }

 function handleNameSort() {
   let selected = document.querySelector("#sortName").value;
   if (selected === "Ascending") {
     appliedJobs.sort(function (a, b) {
       let x = a.personName.toUpperCase();
       let y = b.personName.toUpperCase();
       if (x > y) return 1;
       if (x < y) return -1;
       return 0;
     });
     // console.log(appliedJobs);
     displayTable(appliedJobs);
   }
   if (selected === "Descending") {
     appliedJobs.sort(function (a, b) {
       let x = a.personName.toUpperCase();
       let y = b.personName.toUpperCase();
       if (x > y) return -1;
       if (x < y) return 1;
       return 0;
     });
     // console.log(appliedJobs);
     displayTable(appliedJobs);
   }
 }

 function displayTable(appliedJobs) {
   document.querySelector("tbody").innerHTML = "";
   appliedJobs.forEach(function (elem, index) {
     let tr = document.createElement("tr");
     let td1 = document.createElement("td");
     let td2 = document.createElement("td");
     let td3 = document.createElement("td");
     let td4 = document.createElement("td");
     let td5 = document.createElement("td");
     td1.innerText = elem.personName;
     td2.innerText = elem.personEmail;
     td3.innerText = elem.personRole;
     td4.innerText = elem.personSalary;
     td5.innerText = "Bookmark";
     td5.style.background = "teal";
     td5.addEventListener("click", function () {
       bookMarkFunc(elem, index);
       deleteAppliedFunc(elem, index);
     });

     tr.append(td1, td2, td3, td4, td5);
     document.querySelector("tbody").append(tr);
   });
 }

 function bookMarkFunc(elem, index) {
   bookMarkArr.push(elem);
   localStorage.setItem("bookmarks", JSON.stringify(bookMarkArr));
 }
 function deleteAppliedFunc(elem, index) {
   appliedJobs.splice(index, 1);
   localStorage.setItem("jobList", JSON.stringify(appliedJobs));
 }


 