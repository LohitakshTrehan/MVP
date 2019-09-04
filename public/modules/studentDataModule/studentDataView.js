export function studentDataView(){
    
    function printView(){
        //id="student-detail"
        var studentName = document.createElement("span");
        studentName.setAttribute("id", "student-name");
        var studentRollNumber = document.createElement("span");
        studentRollNumber.setAttribute("id","student-roll-number");
        //create a document fragment and return it
    }

    function printCurrentModelState(){
        // find the printed view in the html,set the model in it
    }

    var publicInterface = {
        getHtml: printView,
        setCurrentModelState: printCurrentModelState,

    }

    return publicInterface;

}