import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyTicket(ticket){
      if(confirm('students have been helped?')){
        this.sendAction('destroyTicket', ticket);
      }
    }
  }
});
