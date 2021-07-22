var copyRandomList = function(head) {
    if(head == null){
        return null;
    }
    
    var map = new Map();
    var n = head;
    while(n != null){
        var oldVal = n;
        var newVal = new Node(n.val);
        map.set(oldVal, newVal);
        n = n.next;
    }
    //console.log(map);
    n = head;
    while(n != null){
        map.get(n).next = map.get(n.next) || null;
        map.get(n).random = map.get(n.random) || null;
        n= n.next;
    }
    return map.get(head);
};
