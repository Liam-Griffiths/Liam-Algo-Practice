/**
 * Definition for singly-linked list.
  */
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let output: ListNode;

    addTogether(l1, l2, false);

    function addTogether(list1: ListNode | null, list2: ListNode | null, shouldCarry: boolean) {
        let current: ListNode = {val: 0, next: null};
        if(!list1 && !list2 && !shouldCarry) return;

        let carryBool = false;
        current.val = (list1?.val ?? 0) + (list2?.val ?? 0) + (shouldCarry ? 1 : 0);
        if(current.val>9) {
            current.val = current.val - 10;
            carryBool = true;
        }

        appendNode(current, output);

        addTogether(list1?.next, list2?.next, carryBool);
    }

    function appendNode(newNode, currentNode){
        if(currentNode && currentNode.next){
            appendNode(newNode, currentNode.next);
            return;
        }

        if(!output){
            output = newNode;
            return;
        }
        currentNode.next = newNode;

        return;
    }

    return output;
};

 /*

 Success
Details
Runtime: 189 ms, faster than 35.27% of TypeScript online submissions for Add Two Numbers.
Memory Usage: 48.4 MB, less than 49.64% of TypeScript online submissions for Add Two Numbers.

  */