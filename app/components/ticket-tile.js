import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyTicket(ticket){
      if(confirm('students have been helped?')){
        this.sendAction('destroyTicket', ticket);
      }
    },
    ticketInactive(ticket){
      this.set('active', false);
      this.set('wait', Math.round((now - ticket.get('timestap'))/60000));
      ticket.save();      
    }
  }
});
