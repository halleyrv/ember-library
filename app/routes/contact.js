import Ember from 'ember';

export default Ember.Route.extend({
    model(){
      return this.store.createRecord('contact');  
    },
    
     actions: {
         sendMessage(newContact){
             newContact.save().then(()=> this.controller.set('responseMessage', true));
             //newContact.save().then(() => this.controller.set('responseMessage', true));
             alert("Grabado Bien");
         },
         willTransition(){
             this.controller.get('model').rollbackAttributes();
             
         }
        // sendMessage: function() {
        //   var email = this.get('emailAddress');
        //   var message = this.get('message');
    
        //   alert('Sending your message in progress... ');
    
        //   var responseMessage = 'To: ' + email + ', Message: ' + message;
        //   this.set('responseMessage', responseMessage);
        //   this.set('emailAddress', '');
        //   this.set('message', '');
        // }
  }
    
});
