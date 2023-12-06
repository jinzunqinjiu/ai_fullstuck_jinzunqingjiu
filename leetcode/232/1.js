// 数据的存储结构   1 2 3 4 5 6 7 8
const MyQueue=function(){
    this.stack1=[];
    this.stack2=[];
}
MyQueue.prototype={
    push:function(x){
        this.stack1.push(x);
    },
    //FIFO
    pop:function(){
        if(this.stack2.length<=0){
            while(this.stack1.length!=0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop();
    },
    //拿到最front的值
    peek:function(){
        if(this.stack2.length<=0)
        {
            while(this.stack1.length!=0){
                this.stack2.push(this.stack1.pop)
            }
        }
        const  stack2len=this.stack2.length
        return stack2len&& this.stack2[this.stack2len-1]
    },
    empty:function(){
        return !this.stack1.length&&!this.stack2.length
    }
}