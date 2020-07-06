
import {inforStore} from './firebase';
export const setUser = ()=> {
    return inforStore.child('infor').once('value').then(function(snapshot) {
        return (snapshot && snapshot.val());
        
    }).then(result => result);
}
export const getSkill = ()=>{
    return inforStore.child('skill').once('value').then(function(snapshot) {
        return snapshot ? snapshot.val() : [];
        
    }).then(result => result);
}
export const getExperience = ()=>{
    return inforStore.child('experience').once('value').then(function(snapshot) {
        return snapshot? snapshot.val() : [];
    }).then(result => result);
}