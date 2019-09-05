export function studentDataPresenter(viewPublicInterface, passedModel){
  
  var view;
  var model;

  function initializeOnPageLoad(){
    view = viewPublicInterface;
    model = passedModel;
    //any event listeners of view to be registered with presenter
    //pass the logic about event listeners
    view.changeName(logicToChangeName);
  }

  function logicToChangeName(){
    var changedName = view.getInputName();
    //set model fields
    model.setName(changedName)
    //set current state of model to view
    setCurrentModelStateInView();
  }

  function returnCurrentView(){
    return view;
  }

  function setCurrentModelStateInView(){
    view.setCurrentModelState(model.getName(), model.getRollNumber());
  }

  var publicInterface = {
    getView: returnCurrentView,
    setModelStateInView: setCurrentModelStateInView
  }

  initializeOnPageLoad();

  return publicInterface;

}
