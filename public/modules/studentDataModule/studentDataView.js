export function studentDataView(){
    var studentDataFragment;

    function getHtml(){   //Follow singelton design pattern
        if(studentDataFragment === undefined){
            studentDataFragment = document.createDocumentFragment();
            buildStudentDataFragment();
        }
        return studentDataFragment;
    }

    function buildStudentDataFragment(){
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

        var wrapperDivForInput = document.createElement("div");
        var prependInput = document.createElement("span");
        prependInput.innerHTML = "Change Name: "
        var inputField = document.createElement("input")
        inputField.setAttribute("type", "text");
        inputField.setAttribute("id", "changed-name");
        var submitButton = document.createElement("button");
        submitButton.setAttribute("id","submit-name")
        submitButton.innerHTML = "Submit"
        wrapperDivForInput.appendChild(prependInput);
        wrapperDivForInput.appendChild(inputField);
        wrapperDivForInput.appendChild(submitButton);
        //create a document fragment and return it
        studentDataFragment.appendChild(wrapperDivForStudentName);
        studentDataFragment.appendChild(wrapperDivForStudentRollNumber);
        studentDataFragment.appendChild(wrapperDivForInput);
        return studentDataFragment;
    }

    function printCurrentModelState(studentName, studentRollNumber){
        // find the printed view in the html,set the model in it
        var studentNameNode = document.querySelector("#student-name");
        var studentRollNumberNode = document.querySelector("#student-roll-number");
        studentNameNode.innerHTML = studentName;
        studentRollNumberNode.innerHTML = studentRollNumber;
    }

    function changeNameEvent(changeNameLogicFunction){  //Only event listeners should refer document fragment
        studentDataFragment.querySelector("#submit-name").addEventListener('click',changeNameLogicFunction);
    }

    function getChangedNameField(){
        return document.querySelector("#changed-name").value;
    }

    function initializeDocumentFragmentOnPageLoad(){
        getHtml();
    }

    var publicInterface = {
        printView: getHtml,
        setCurrentModelState: printCurrentModelState,
        changeName: changeNameEvent,
        getInputName: getChangedNameField
    }

    initializeDocumentFragmentOnPageLoad();

    return publicInterface;

}