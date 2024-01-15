/**
 * Implement stack all
 **/
class Stack {
    constructor() {
        this.stack = []
    }
    
    // [Mutating] Push the item at top of the stack and return it
    pushItem(item) {
        this.stack.push(item);
        return this.stack;
    }
    
    // [Mutating] Remove the last item from stack and return it
    popItem() {
        if(this.stack.length > 0 )
            this.stack.pop();
        return this.stack;
    }
    
    sort() {
        return this.stack;
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    display() {
        return this.stack;
    }
    
    // [Mutating] reverse an array
    reverseStack() {
        return this.stack.reverse()
        // const tmpStack = new Stack();
        // while(this.stack.length > 0) {
        //     tmpStack.pushItem(this.stack.pop())
        // }
        // return tmpStack.stack;
    }
    
    // Return true/false
    includes(item) {
        return this.stack.includes(item);
    }
    
    middleItems() {
        const middleIndex = Math.round(this.stack.length/2);
        const mItems = [];
        if(middleIndex % 2 === 0) 
            mItems.push(this.stack[middleIndex - 1])
        mItems.push(this.stack[middleIndex])
        return mItems;
    }
    
    // [Mutating] Splice is used to add/remove items from stack
    manageItems(item) {
        const itemIndex = this.stack.indexOf(item);
        if (itemIndex === -1) return null;
        // Remove only one item from stack
        this.stack.splice(itemIndex, 1);
        // Removing two items and adding two item
        this.stack.splice(itemIndex, 2, "a", "b");
        console.log("Manage items: ", this.stack);
    }
    
    mergeStack(items) {
        while(items.length > 0) {
            this.stack.push(items.pop())
        }
        return this.stack;
    }
 }
 
 const item = new Stack();
 
 item.pushItem(1);
 item.pushItem(2);
 item.pushItem(3);
 item.pushItem(4);
//  console.log(item.popItem());
 console.log(item.peek())
 console.log(item.reverseStack())
//  console.log(item.display())
 console.log(item.includes(0))
console.log(item.middleItems()) // [3, 2]
item.manageItems(4);
console.log(item.mergeStack([10,20,30]))