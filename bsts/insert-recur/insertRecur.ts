import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {

  if (bst.root === null){
   bst.root = new BNodeNum(val);
  }else{
    insertRecurHelper(bst.root, val)
  }

    function insertRecurHelper(node: BNodeNum, val: number): void {

      if (val < node.val){
        if(!node.left){
          node.left= new BNodeNum(val);
        }else{
          insertRecurHelper(node.left, val)
        }
      }else{
        if(!node.right){
          node.right= new BNodeNum(val);
        }else{
          insertRecurHelper(node.right, val);
        }
      }

    }

}

export { insertRecur };

