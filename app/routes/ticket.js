import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    ticketInactive(ticket){
      this.set('active', false);
      this.set('wait', Math.round((Date.now()- this.get('timestap'))/60000));
      this.save();
    }
  }

});
