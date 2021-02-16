class SimpleStore{
    constructor(){
        this.keys = [];
        this.values = [];
    }

    has(node) {
        return this.keys.indexOf(node) !== -1;
    }

    get(node) {
        const index = this.keys.indexOf(node)
        return this.values[index];
    }

    setNode(node, value) {
        const nodeAvailable = this.keys.indexOf(node) !== -1;

        if(!nodeAvailable) {
            this.keys.push(node)
        } 
        const index = this.keys.indexOf(node);
        this.values[index] = value;
    }

    size() {
        return this.keys.length;
    }

    removeNode(node) {
        const index = this.keys.indexOf(node);

        if(index !== -1) {
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
        }
    }

}

const myStore = new SimpleStore();

myStore.setNode('001', 'Shloka');
myStore.setNode('002', 'Laks');

console.log(myStore);

// console.log(myStore.get('001'))

// console.log(myStore.has('001'))

myStore.setNode('002', 'Mils');
console.log(myStore);
