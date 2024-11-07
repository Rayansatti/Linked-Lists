class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array){
        const sortedSrray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedSrray);
        
    }

         buildTree(array){
            
            if(array.length === 0){
                return null;
            }

            const mid = Math.floor(array.length / 2);
            const node = new Node(array[mid])

            node.left = this.buildTree(array.slice(0 , mid));
            node.right = this.buildTree(array.slice(mid + 1));

            return node;
        }

        insert(root, key){
            if(root === null) return new Node(key);
            if(key < root.data) root.left = this.insert(root.left, key);
            if(key > root.data) root.right = this.insert(root.right, key);

            return root;
            }
        
        

    delete(root, key) {
    if (root === null) {
        return null;
    }

   
    if (key < root.data) {
        root.left = this.delete(root.left, key); 
    } else if (key > root.data) {
        root.right = this.delete(root.right, key);
    } else {
        
        if (root.left === null) {
            return root.right; 
        } else if (root.right === null) {
            return root.left; 
        }

        
        if (root.right !== null) {
            const minNode = this.findMin(root.right); 
            root.data = minNode.data; 
            root.right = this.delete(root.right, minNode.data); 
        }
    }
    return root; 
}

            

            findMin(node) {
                
                if(node === null){
                    console.log("findMin called with null node");
                    return null;
                }
                 console.log("Finding min starting at node:", node.data);
                while( node && node.left !== null) {
                    node = node.left; 
                }
                console.log("Minimum found:", node.data);
                return node; 
            }

            inOrder(node){
                if(node !== null){
                    this.inOrder(node.left);
                    console.log(node.data);
                    this.inOrder(node.right);
                }
            }

            height(node) {
                if (node === null) return -1; 
                const leftHeight = this.height(node.left);
                const rightHeight = this.height(node.right);
                return Math.max(leftHeight, rightHeight) + 1; 
            }

            depth(node, root = this.root) {
                if (root === null) return -1; 
                if (root === node) return 0; 
            
                
                if (node.data < root.data) {
                    const leftDepth = this.depth(node, root.left);
                    return leftDepth === -1 ? -1 : leftDepth + 1; 
                } else {
                    const rightDepth = this.depth(node, root.right);
                    return rightDepth === -1 ? -1 : rightDepth + 1;
                }
            }

            isBalanced(node = this.root) {
                if (node === null) return true; 
            
                const leftHeight = this.height(node.left);
                const rightHeight = this.height(node.right);
            
                const heightDifference = Math.abs(leftHeight - rightHeight);
            
                
                return heightDifference <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
            }

            rebalance() {
                
                const inOrderTraverse = (node, result = []) => {
                    if (node === null) return;
                    inOrderTraverse(node.left, result);
                    result.push(node.data);
                    inOrderTraverse(node.right, result);
                    return result;
                };
            
                const nodes = inOrderTraverse(this.root); 
                this.root = this.buildTree(nodes); 
            }
            
            
            
            
            

        }
        
    