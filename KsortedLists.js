/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let runner = new ListNode();
  let dummy = runner;
  let tempVal = null;
  let listInd = 0;

  while (lists.length > 0) {
    if (lists.length === 1 && lists[0] === null) {
      return dummy.next;
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] != null) {
        if (tempVal === null) {
          tempVal = lists[i].val;
          listInd = i;
        } else {
          if (tempVal > lists[i].val) {
            tempVal = lists[i].val;
            listInd = i;
          }
        }
      }
    }

    if (tempVal == null) {
      return dummy.next;
    }

    runner.next = new ListNode(tempVal);
    tempVal = null;
    runner = runner.next;
    if (lists[listInd].next) {
      lists[listInd] = lists[listInd].next;
    } else {
      lists.splice(listInd, 1);
    }
  }

  return dummy.next;
}
