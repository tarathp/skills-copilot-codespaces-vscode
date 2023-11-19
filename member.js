function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    if (skillsMemberValue == "") {
        skills.innerHTML = "Please enter your skills";
        skills.style.color = "red";
    } else {
        skills.innerHTML = "Your skills are: " + skillsMemberValue;
        skills.style.color = "green";
    }
}
  