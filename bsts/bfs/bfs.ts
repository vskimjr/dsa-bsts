import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  let visitedNodeVals : number[] = [];
  let queue = new Queue<BNodeNum>()

  if(node === null) return [];

  queue.enqueue(node)

  while(!queue.isEmpty()){
    let currNode = queue.dequeue();
    visitedNodeVals.push(currNode.val);
    if (currNode.left){
      queue.enqueue(currNode.left);
    }
    if (currNode.right){
      queue.enqueue(currNode.right);
    }
  }

  return visitedNodeVals;
}

export { bfs };