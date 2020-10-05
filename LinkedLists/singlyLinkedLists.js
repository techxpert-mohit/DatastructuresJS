class Node{
  constructor(val){
      this.val = val
      this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.length =  0
    this.head = null
    this.tail = null
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop(){
    if(!this.head) return undefined
    var current = this.head
    var newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length===0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift(){
    if(!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--
    if(this.length===0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(val){
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(idx){
    if(idx < 0 || idx>=this.length) return null
    var counter = 0
    var current = this.head
    while(counter !== idx){
      current = current.next
      counter++
    }
    return current
  }
  set(idx, val){
    var current = this.get(idx)
    if(!current) return false
    current.val = val
    return true
  }
  insert(idx, val){
    if(idx < 0 || idx > this.length) return false
    if(idx === this.length) return !! this.push(val)
    if(idx === 0) return !! this.unshift(val)
    var newNode = new Node(val)
    var prev = this.get(idx - 1)
    var temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
 remove(idx){
   if(idx < 0 || idx >= this.length) return undefined
   if(idx === this.length - 1) return this.pop()
   if(idx === 0) return this.shift()
   var previousNode = this.get(idx - 1)
   var removed = previousNode.next
   previousNode.next = removed.next
   this.length--
   return removed
 }
 reverse(){
   var node = this.head
   this.head = this.tail
   this.tail = node
   var prev = null
   var next
   for(var i = 0; i < this.length; i++){
     next = node.next
     node.next = prev
     prev = node
     node = next
   }
   return this
 }

}

// var list = new SinglyLinkedList()
// list.push('Hello')
// list.push('GOODBYE')
// list.push('!')
// list.push(99)
// console.log(list.reverse())
//console.log(list.get(0))
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
 //console.log(list)
// console.log(list.pop())
//console.log(list.shift())
//console.log(list.unshift("*"))