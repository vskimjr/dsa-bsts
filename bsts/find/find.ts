import { BNode, BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  return null;
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {

  if (node === null) return null;

  // let currVal : BNodeNum | null = node;

  let currNode : BNodeNum | null = node;
  let currVal = node.val;

  while (val !== currVal){
    if (currNode!.val === val) return currNode
    if (val < currNode!.val) {
      currNode = node.left;
    } else if (val > currNode!.val){
      currNode = node.right;
    } else {
      return null
    }
  }


  // while (node){
  //   console.log("node", node)
  //   if (node!.val === val) return node;
  //   if (val < node!.val){
  //     node = node.left;
  //   } else {
  //     node = node.right;
  //   }
  // }

  // return null;
}

export { findRecursively, find };