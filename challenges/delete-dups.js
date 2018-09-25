/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  if (typeof head !== 'object') return undefined;
  if (head.next === null) return head;
  const set = new Set([head.value]);
  const list = head;
  let previousNode = list;
  let currentNode = list.next;
  while (currentNode !== null) {
    if (!set.has(currentNode.value)) {
      set.add(currentNode.value);
    } else {
      previousNode.next = currentNode.next;
    }
    previousNode = previousNode.next;
    currentNode = currentNode.next;
  }
  return list;
}

module.exports = deleteDups;
