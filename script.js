function calculate() {

    let cw = parseFloat(document.getElementById("cw").value) || 0;
    let mid = parseFloat(document.getElementById("mid").value) || 0;
    let fin = parseFloat(document.getElementById("fin").value) || 0;

    let total = cw + mid + fin;
    let average = total / 3;
    let grade;

    if (total >= 70) {
        grade = "A";
    } else if (total >= 60) {
        grade = "B";
    } else if (total >= 50) {
        grade = "C";
    } else {
        grade = "Failed";
    }

    document.getElementById("total").value = total;
    document.getElementById("average").value = average.toFixed(2);
    document.getElementById("grade").value = grade;
}