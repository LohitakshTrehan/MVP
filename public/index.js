//Build objects here
import { studentDataModel } from "./models/studentDataModel.js"
import { studentDataPresenter } from "./modules/studentDataModule/studentDataPresenter.js";
import { studentDataView } from "./modules/studentDataModule/studentDataView.js";

/*---------------------      Model is created and it fetches data from server    -------------------*/

var model = new studentDataModel();
model.setName("Manoj");
model.setRollNumber("1234");

/*---------------------                  Creating View and Presenter              ------------------*/

var view = studentDataView();
var presenter = studentDataPresenter(view, model);

/*---------------------                                                          ------------------*/

var studentDetail = document.getElementById("student-detail");
studentDetail.appendChild(presenter.getView().printView());
presenter.setModelStateInView();  //Passing model reference