'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    /**
     * Place your code here
     */ 
    let objCloned = {...arg.obj1};
    let result = {
     obj1: arg.obj1,
     obj2: objCloned
    };
    result.obj2.relatives = [...arg.obj1.relatives];
    result.obj2.firstName = 'Petya';
    result.obj2.lastName = 'Sidorov';
    result.obj2.relatives.splice(0,1,{"firstName": "Anya", "lastName": "Sidorova"});
    return result; /* variable with result */
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    /**
     * Place your code here
     */
    let objCloned = {...arg.obj1,...arg.obj2};
      let result = {
          obj1: arg.obj1,
          obj2: arg.obj2,
          obj3: objCloned
      };

     result.obj3.f = 15;
     result.obj3.a = 11;
     result.obj3.d = 33;

    return result /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    /**
     * Place your code here
     */

    let result = {
      obj1: arg.obj1
    };

    result.obj1.relatives.forEach(item => {
          item.gender = 'female';
    });
    result.obj1.relatives[2].gender = 'male';

    return result /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    /**
     * Place your code here
     */

    let resultedArray = [];

    arg.obj1.relatives.forEach( item =>{
       if (item.gender =="female") {
           resultedArray.push(`Hello, ${item.firstName} ${item.lastName}`);
       }
    });

    let result = {
      obj1: resultedArray
    }

    return result /* variable with result */;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    let buttonList = window.document.getElementsByClassName(arg.className);
    buttonList['0'].style.backgroundColor = arg.color
    return `This ${buttonList[0].className} are ${buttonList[0].style.backgroundColor}`;
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let array = [];
    arg.hostNames.forEach(item=>{
      if (item == location.hostname) {
        array.push(item);
      }
    });
    let result = {
      obj1: array
    };
    return result;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    /**
     * Place your code here
     */
    let result = {};
    let keys = Object.keys(arg);
    keys.forEach(key=>{
      result[arg[key]] = key;
    });

    return result;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let result={};
    let array = [];
    arg.arr1.forEach(item => {
        array.push(item);
    });
    arg.arr2.forEach(item => {
        array.push(item);
    });
    for (var i=0; i < array.length; i++) {
      if (i % 2 == 0) {
              if (array[i + 1]) {
                  result[array[i]] = array[i + 1];
              } else {
                result[array[i]] = null;
              }
      }
    }
    return result;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    /**
     * Place your code here
     */

    let result = {};
    obj1:arg.users.forEach(item =>{
      result[item.id] = item;
    });
    return result;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let buttonList = window.document.getElementsByClassName(arg.className);
    buttonList[0].childNodes.forEach(child =>{
        arg.childrenInfo.push({
            tag: child.nodeName,
            className: child.constructor.name
        });
    });
    return arg;
  }
}

export default OperationExecutor;
