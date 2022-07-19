//you need to code here
let bookMarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];
// console.log(bookMarkData);
bookMarkData.forEach(function (elem, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  td1.innerText = elem.personName;
  td2.innerText = elem.personEmail;
  td3.innerText = elem.personRole;
  td4.innerText = "Delete";
  td4.style.color = "red";
  td4.addEventListener("click", function () {
    deleteBookMarks(index);
  });

  tr.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(tr);
});

function deleteBookMarks(index) {
  bookMarkData.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookMarkData));
}



