 export class HashMap {
    constructor(initialSize = 4) {
        this.bucket = new Array(initialSize);
        this.size = 0;
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }
        return hashCode;
    }

    set(key, value){
        const index = this.hash(key);
        if(!this.bucket[index]){
            this.bucket[index] = [];
        }

        for(let i = 0; i < this.bucket[index].length; i++){
            if(this.bucket[index][i][0] === key){
                this.bucket[index][i][1] === value;
                return;
            }
        }
        this.bucket[index].push([key, value]);
        this.size++;

        if(this.loadFactor() > 0.75){
            this.resize();
        }
    }

    loadFactor(){
        return this.size / this.bucket.length;
    }

    resize(){
        const oldBucket = this.bucket;

        this.bucket = new Array(oldBucket.length *2);
        this.size = 0;

        for(let i = 0; i < oldBucket.length; i++){
            if(oldBucket[i]){
                for(let j = 0; j < oldBucket[i].length; j++){
                    const [key, value] = oldBucket[i][j];
                    this.set(key, value);
                }
            }
        }

    }

    get(key){
        const index = this.hash(key);

        if(!this.bucket[index]){
            return false;
        }

        for(let i = 0; i < this.bucket[index].length; i++){
            if(this.bucket[index][i][0] === key){
               return true   
            }
        }

        return false;
    }

    remove(key){
        const index = this.hash(key);

        if(!this.bucket[index]){
            return false;
        }

        for(let i = 0; i < this.bucket[index].length; i++){
            if(this.bucket[index][i][0] === key){
               this.bucket[index].splice(i, 1);
               return true;

            }
        }

        return false;

    }

    length(){
        let count = 0;
        
        for(let i = 0; i < this.bucket.length; i++){
            count += this.bucket[i].length;
            
        }
        return count;
    }

    clear(){
        this.bucket = new Array(this.size);
    }

    keys(){
        let keyArr = [];
        for(let i = 0; i < this.bucket.length; i++){
           if(this.bucket[i]){
            for(let j = 0; j < this.bucket[i].length; j++){
                keyArr.push(this.bucket[i][j][0]);
            }
           }
        }
        return keyArr;
    }

    values(){
        let valArr = [];
        for(let i = 0; i < this.bucket.length; i++){
            if(this.bucket[i]){
                for(let j = 0; j < this.bucket[i].length; j++){
                    valArr.push(this.bucket[i][j][1]);
                }
               }
        }
        return valArr;
    }

    entries(){
        let ent = [];

        for(let i = 0; i < this.bucket.length; i++){
            if(this.bucket[i]){
                for(let j = 0; j < this.bucket[i].length; j++){
                    ent.push(this.bucket[i][j]);
                }
               }
        }
        return ent;

    }
}


