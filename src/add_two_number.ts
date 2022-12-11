//https://leetcode.com/problems/add-two-numbers/description/
class ListNode {
    constructor() {
        
    }
}
 function addTwoNumbers(l1: Array<number> | null, l2: Array<number> | null): ListNode | null {
    let list1:  number[]= reverse(l1);
    let list2:  number[]= reverse(l2);
    let sum:number = listToNumber(list1) + listToNumber(list2);
 

    let myFunc = num => Number(num);
 
    var intArr = Array.from(String(sum), myFunc);
    let lastArr:ListNode = reverse(intArr)
    return lastArr;
};


function listToNumber(list:number[]):number {
    let sum :number = 0;


    for (let index = 0; index < list.length; index++) {
        let element: number = list[index];
        let coefficient : number = Math.pow(10,index);
        sum = sum +element*coefficient;
    }
    return sum;
}

function reverse(numList:number[]) : number[]{
    let reverseList = [];
    for (let index = numList.length-1; index >= 0; index--) {
        const element = numList[index];
        reverseList.push(element);
    }
    return reverseList;
}
