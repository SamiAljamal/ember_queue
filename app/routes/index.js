import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ticket');
  },
  actions: {
    save1(params){
      var newQuestion = this.store.createRecord('ticket', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
