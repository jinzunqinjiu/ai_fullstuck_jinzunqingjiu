function myInstance(L,R){
    let left=L.__proto__
    let right=R.__proto__
    while(left!=null){
        if(left===right)
        {
            return true
        }
        left=left.__proto__
    }
    return false
}