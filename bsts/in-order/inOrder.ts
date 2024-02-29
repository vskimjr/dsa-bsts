import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  let visitedNodeVals : number[] = [];

  if (node.left) {
    visitedNodeVals = [...visitedNodeVals, ...inOrder(node.left)]
  }

  visitedNodeVals.push(node.val);

  if (node.right) {
    visitedNodeVals = [...visitedNodeVals, ...inOrder(node.right)]
  }

  return visitedNodeVals;
}


/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
    node: BNodeNum | null = null,
    accum: number[] = []): number[] {

  if (node === null) return accum;

  if (node.left){
    inOrderAccum(node.left, accum)
  }

  accum.push(node.val)

  if (node.right){
    inOrderAccum(node.right, accum)
  }

  return accum;
}


export { inOrder, inOrderAccum };
