
import {inforStore} from './firebase';
export const setUser = ()=> {
    return inforStore.once('value').then(function(snapshot) {
        return (snapshot && snapshot.val());
        
    }).then(result => result);
}
