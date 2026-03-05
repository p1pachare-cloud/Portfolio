function toggleProjects() {
    var projects = document.getElementById("projectList");

    if (projects.style.display === "block") {
        projects.style.display = "none";
    } else {
        projects.style.display = "block";
    }
}