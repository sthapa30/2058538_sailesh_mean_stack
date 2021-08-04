
function addProject(){
    var projectList = JSON.parse(sessionStorage.getItem("projects")) || [];
    var clientName = document.getElementById("clientName").value;
    var projectName = document.getElementById("projectName").value;
    var budget = document.getElementById("budget").value;

    var project = {clientName:clientName,projectName:projectName, budget:budget}
    projectList.push(project)
    sessionStorage.setItem("projects",JSON.stringify(projectList));

}

