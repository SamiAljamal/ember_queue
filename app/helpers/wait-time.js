import Ember from 'ember';

export function waitTime(params) {
  var ticket = params[0];
  var now = Date.now();
  var waittime = Math.round((now - ticket.get('timestap'))/60000);
  return Ember.String.htmlSafe('<li> Wait Time: ' + waittime + " minutes" + '</li>');
}

export default Ember.Helper.helper(waitTime);
