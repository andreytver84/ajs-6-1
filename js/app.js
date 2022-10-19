// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default function orderByProps(obj, orderPropArr) {    
    const orderPropsFromRules = [];   
    const orderPropsOther = []; 
    for (let key in obj) {
        if (!orderPropArr.includes(key)) {        
            orderPropsOther.push(key);
       }
    }    
    orderPropsOther.sort();    
    orderPropArr = orderPropArr.concat(orderPropsOther);
    
    for (let key in obj) {              
        if (orderPropArr.includes(key)) {
            orderPropsFromRules[orderPropArr.indexOf(key)] = {'key': key, 'value': obj[key]};
        }       
    }   
    return orderPropsFromRules;
};



