const sumArray =(obj)=>obj.reduce((prev,current)=>prev+current,0)
const sumArrayObject =(obj,key)=>obj.reduce((prev,current)=>prev+current[key],0)
const sumArrayObjectIndex =(obj,index)=>obj.reduce((prev,current)=>prev+Object.values(current)[index],0)
module.exports = {sumArray,sumArrayObject,sumArrayObjectIndex};