
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
export const getAchivement = ()=>{
    return inforStore.child('achivement').once('value').then(function(snapshot) {
        return snapshot? snapshot.val() : [];
    }).then(result => result);
}
export const getPortfolio = ()=>{
    return inforStore.child('portfolios').once('value').then(function(snapshot) {
        return snapshot? snapshot.val() : [];
    }).then(result => result);
}