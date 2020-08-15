import {ADD,REMOVE,TOGGLE} from "./actions/actionTypes.js";
const initialState = [
    {id:1,text:"吃饭",isDone:true},
    {id:2,text:"睡觉",isDone:true},
    {id:3,text:"打豆豆",isDone:false}
]
export default (state=initialState,action) => {
    const {type,id,text,isDone} = action;
    switch(type){
        case ADD:
            return [...state,{
                id,
                text,
                isDone
            }]
        case REMOVE:
            return state.filter(item => item.id!==id)
        case TOGGLE:
            return state.map(item => {
                if(item.id === id){
                    item.isDone = !item.isDone
                }
                return item;
            })
        default:return state;
    }
}