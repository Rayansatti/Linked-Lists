class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array){
        const sortedSrray = [...new setInterval(array)].sort((a, b) => a - b);
        this.root = buildTree(sortedSrray);
        
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
}