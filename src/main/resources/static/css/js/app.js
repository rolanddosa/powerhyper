function validate() {
    var name = document.getElementById("companyName").value;
    if (name == '') {
        alert('Please enter a valid name.');
        return false;
    } else {
        return true;
    }
}