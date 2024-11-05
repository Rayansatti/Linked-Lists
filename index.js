class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(value) {
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    pop(value){
        const newNode = new Node(value);

        if(!this.head) return;
        if(this.next === null){
            newNode.head = null;
        }
    }
    size(){
        let current = this.head;
        let list = 0;
        while(current){
            list += 1;
            current = current.next;
        }


        return list;
    }
    head(){

        return this.head;
    }

    tail(){
        if(!this.head) return null;
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current;
    }
    at(i) {
        if(i < 0) return null;

        let current = this.head;
        let count = 0;

        while(current){
            current = current.next;
            count++;

        }
        return current ? current : null;
    }

    contains(v) {
        if(!this.head) return;
        let current = this.head;
        let count = 0;
        while(current) {
            current = current.next;
            count++;
        }
        return current.value === v ? current.value : null;
    }

    find(){
        return this.value
    }

    toString(){
        let current = this.head;
        let list = '';
        while(current){
            list += current.value + ' -> ';
            current = current.next;
        }
        list += 'null';
       return list;
    }
}