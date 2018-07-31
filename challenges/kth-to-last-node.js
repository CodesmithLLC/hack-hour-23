/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');3
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	let count = 1;
	let length = 0;
	let currentNode = head;
	while (currentNode.next != null) {
		currentNode = currentNode.next;
		count++;
	}
	if (k > count) {
		return "incorrect k value";
	}
	length = count - k;
	currentNode = head;
	for (let i = 0; i < length; i++) {
		currentNode = currentNode.next
	}
	return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
