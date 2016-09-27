import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('invitation');
    }, actions:{
        deleteInvitation(invitation){
            let message=confirm("Seguro que desea eliminar?");
            if(message){
                invitation.destroyRecord();
            }
        }
    }
});
