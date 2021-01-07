/* 
    Create a class called node 
        It should accept charater value
        should have the following properties
        data  (value of the charater)
        isEnd (boolean) => if it is end of work or not
        children (a Map or object) => to continue chain
**/

class Node {
    constructor(ch) {
        this.data = ch;
        this.children = new Map ();
        this.isEnd = false;
    }
}

/*
    Create a class Trie
    constructor with property root equal to new Node that was created above
**/

class Trie {
    constructor() {
        this.root = new Node();
    }

    /* 
    insert => will accept a word and add it to the Trie tree
     current node will be root;

     for each character in the word
        check if the character exists in the children of the current node
        else create a new node
        assign this value to a constant value say newNode.
        then current node will be newNode
        once iteration of all characters is done (that is out of for loop), set isEnd of current property to true
    **/

   insert = (word) => {
       let current = this.root;

       for(let ch of word) {
           const newNode = current.children.get(ch) || new Node(ch);
           current.children.set(ch, newNode);
           current = newNode;
       }
       current.isEnd = true;
   }

   /* 
    search => will check if a word exists in the Trie tree

    Will accept a word
    current node will be root;
    for each character in the word
        check if the character exists as one of the children of the current node.
        If it does set current to the children of that character
        else return false (word doesnt exist)
        return true if current.isEnd of last character is true

    **/

    search = (word) => {
        let current = this.root;
        for(let ch of word) {
            current = current.children.get(ch);
            if(!current) return false;
        }
        return current.isEnd = true;
    }


/* 
    startsWith => check if the prefix exists

    will take a prefix word
    Do pretty much the same thing as above but dont need to check if current.isEnd is true at the end
**/

    startsWith = (prefix) => {
        let current = this.root;
        for(let ch of prefix) {
            current = current.children.get(ch);
            if(!current) return false;
        }
        return true;
    }

}

t = new Trie();
console.log(t.insert("test"));
console.log(t.insert("toaster"));
console.log(t.insert("taco"));
console.log(t.search("test"));
console.log(t.search("toast"));
console.log(t);
console.log(t.startsWith("tet"));
console.log(t.startsWith("toaster"));
console.log(t.startsWith("taco"));





