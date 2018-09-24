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

    // iterate through the linked list and add each value to a hash table
    // if duplicate element is found, remove it from the linked list and update the linked list

    let p1;
    let p2;
    let nodes = {};

    p1 = head;
    p2 = p1.next;
    nodes[p1.data] = true; //set the first vale in the LL to a location in the hash table and set its value to TRUE

    while (p2) { //check if p2 val is NULL
        let data = p2.data; // set variable data to p2.data value

        // IF DUPLICATE FOUND
        if (nodes[data]) { // if that value is found in the nodes hash table
            p1.next = p2.next // skip that LL node and set the current to p2's next value
        } else {

        // IF NO DUPLICATE FOUND
            nodes[data] = true; // set a boolean TRUE in the hash table at p2 position
            p1 = p2.next // iterate the current node forward by one
        }
        p2 = p2.next; // set p2 value to it's next value 
    }
};

module.exports = deleteDups;
