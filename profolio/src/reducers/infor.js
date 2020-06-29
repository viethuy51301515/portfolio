import CONSTANT from '../constants';
const data ={
    name:"Phan Viet Huy",
    fullName:"Huy Phan",
    age:25,
    nationality:'Viet Nam'
}
const getInforReducer = (state = data,action)=>{
    switch (action.type) {
        case CONSTANT.ACTION_CONSTANT.GET_INFOR:
            return state = data;
        default:
            return state;
    }
}
export default getInforReducer;