export function studentDataView(){
    
    function getHtml(){
        var wrapperDivForStudentName = document.createElement("div");
        var wrapperDivForStudentRollNumber = document.createElement("div");
        var prependForStudentName = document.createElement("span");
        prependForStudentName.innerHTML = "Name: ";
        var prependForStudentRollNumber = document.createElement("span");
        prependForStudentRollNumber.innerHTML = "Roll Number: ";
        var studentName = document.createElement("span");
        studentName.setAttribute("id", "student-name");
        var studentRollNumber = document.createElement("span");
        studentRollNumber.setAttribute("id","student-roll-number");
        wrapperDivForStudentName.appendChild(prependForStudentName);
        wrapperDivForStudentName.appendChild(studentName);
        wrapperDivForStudentRollNumber.appendChild(prependForStudentRollNumber);
        wrapperDivForStudentRollNumber.appendChild(studentRollNumber)
        //create a document fragment and return it
        var studentDataFragment = document.createDocumentFragment();
        studentDataFragment.appendChild(wrapperDivForStudentName);
        studentDataFragment.appendChild(wrapperDivForStudentRollNumber);
        return studentDataFragment;
    }

    function printCurrentModelState(studentName, studentRollNumber){
        // find the printed view in the html,set the model in it
        var studentNameNode = document.getElementById("student-name");
        var studentRollNumberNode = document.getElementById("student-roll-number");
        studentNameNode.innerHTML = studentName;
        studentRollNumberNode.innerHTML = studentRollNumber;
    }

    var publicInterface = {
        printView: getHtml,
        setCurrentModelState: printCurrentModelState,
    }

    return publicInterface;

}