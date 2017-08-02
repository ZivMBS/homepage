date = new Date();
if (date.getFullYear() == 2017)
    document.getElementById("createdBy").innerHTML = "Created by ZivMBS || 2017";
else
    document.getElementById("createdBy").innerHTML = "Created by ZivMBS || 2017 - " + date.getFullYear();