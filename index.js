//you need to code here
document.querySelector("form").addEventListener("submit", jobApply);
let jobArr = JSON.parse(localStorage.getItem("jobList")) || [];
// let jobArr;
// if(localStorage.getItem("jobList")==null){
//   jobArr=[];
// }else{
//   jobArr=JSON.parse(localStorage.getItem("jobList"));
// }

function jobApply(event) {
  event.preventDefault();
  let jobObj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    personRole: document.querySelector("#role").value,
    personSalary: document.querySelector("#salary").value,
  };
  // console.log(jobObj);
  jobArr.push(jobObj);
  localStorage.setItem("jobList", JSON.stringify(jobArr));
}


