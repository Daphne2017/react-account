import { createAction,createActions } from 'redux-actions';
const action1 = createAction("action1",()=>[1,2,3]);
const action2 = createAction("action2");

const actions = createActions({ 
    SET_LOADING: loading => loading, // 该函数参数传入的是action创建的时候传入的参数，返回结果会作为到生成的action的payload的value。
    SET_ACCOUNT: data => data,
    SET_ALL: num => num,
    // 接口
    GET_ACCOUNT:get=> get, // 获取账目
    ADD_ACCOUNT: add => add, // 新增账目
    UPDATE_ACCOUNT: update => update, // 修改账目
    DELETE_ACCOUNT: del => del // 删除账目
});
console.log("action1:",action1());
console.log("action2:",action2(100));
console.log("actions:",actions);
console.log("SET_LOADING",actions.setLoading("setLoading")); 
export default actions;