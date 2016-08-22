import Ember from 'ember';

export default Ember.Component.extend({
  question1: true,
  question2: false,
  question3: false,
  questionForm: false,
  actions:{
    question1: function(){
      this.set('question1',false);
      this.set('question2', true);
    },
    question2: function(){
      this.set('question2',false);
      this.set('question3', true);
    },
    question3: function(){
      this.set('question3',false);
      this.set('questionForm', true);
    },
    save1(){
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        timestap: Date.now()
      };
      this.set('questionForm', false);
      this.sendAction('save1',params);
    }
  }
});
