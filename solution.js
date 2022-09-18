/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    if(list1 === null) return list2;
    if(list2 === null) return list1;

    let curr1 = list1;
    let curr2 = list2

    while(curr1.next !== null || curr2.next !== null){
        if(curr1 &&  curr1.val < curr2.val ){
            curr1 = curr1.next;
            console.log('curr1',curr1);
        } else if(curr2 && curr1.val > curr2.val ){
            curr2 = curr2.next;
            console.log('curr2',curr2);
        }
    }
    return curr1;
};
