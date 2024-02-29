import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {

  if (bst.root === null) bst.root = new BNodeNum(val);

  console.log("bst.root.left", bst.root.left)
  console.log("bst.root.right", bst.root.right)





  // for (const node of bst.root)


  if (val < bst.root.val){
    insertRecur(bst.root.left, val)
  }





  // if the val is less than the Left, look at the left and right of the Left

  // goal: we want to assign the val as a BNode as either the left or right of
  // a node in the BSTm potentially taking the place of a current BNode,
  // and bumping the current BNode down,

  // const newBNode = new BNodeNum(val = val, left = something, right = something)








}

export { insertRecur };

