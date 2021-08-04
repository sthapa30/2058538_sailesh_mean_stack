function getProject() {
    var projects = JSON.parse(sessionStorage.getItem("projects"));
    var tableContent = ""
    var startTable = "<table border=1 cellpadding=3 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
    var totalBudget = 0;
    for (i = 0; i < projects.length; i++) {
        var cName = projects[i].clientName
        var pName = projects[i].projectName
        var budget = projects[i].budget
        if (cName != "" && pName != "" && budget != "") {
            totalBudget += parseInt(budget);

            tableContent += "<tr><td>" + cName + "</td><td>" + pName + "</td><td>" + budget + "</td></tr>"

        }


    }
    var endTable = "</table>"
    tableContent = startTable + tableContent + endTable
    document.getElementById("budgetInfo").innerHTML = tableContent;
    document.getElementById("budgetTotal").innerHTML = "<br><h3>Total budget is " + totalBudget + "</h3>";


}

