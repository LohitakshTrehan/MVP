export function studentDataPresenter(viewPublicInterface){
  
  var view;
  var model;

  function initializeOnPageLoad(){
    view = viewPublicInterface;
    //any event listeners of view to be registered with presenter
  }

  function returnCurrentView(){
    return view;
  }

  function setCurrentModelStateInView(passedModel){
    model = passedModel;
    view.setCurrentModelState(model.getName(), model.getRollNumber());
  }

  var publicInterface = {
    getView: returnCurrentView,
    setModelStateInView: setCurrentModelStateInView
  }

  initializeOnPageLoad();

  return publicInterface;

}
