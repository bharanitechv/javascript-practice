var test = () => {
    
    let obj1 = {
        tk : 'test',
        tk1 : {
            tk1: 'test1',
            tk2: {
                tk2: 'test2',
                tk3:{
                    tk3:'test3'
                }
            }
        }
    }
 let targetObj = {}
Object.assign(targetObj, obj1)
targetObj.tk1.tk2.tk3.tk3 = 'sample'
console.log(JSON.stringify(targetObj));
console.log('Original ' , JSON.stringify(obj1));
}
test()

//Object.assign modify the original value also.
//It will perform only shallow 