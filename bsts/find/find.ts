import { BNode, BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {

  if(node === null) return null;
  if(node.val === val) return node;

  if(val < node.val){
    return findRecursively(node.left, val);
  }else{
    return findRecursively(node.right, val);
  }

}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {

  while (node){
    if (node!.val === val) return node;

    if (val < node!.val){
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return null;
}

export { findRecursively, find };