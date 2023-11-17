let s='abcd'
function isPalindrome(s){
 let i=0,j=s.length-1

 while(i<j)
 {
    if(s[i]===s[j])
    {
        i++
        j++ 
    }
    else 
    {
        break
    }
    if(isPalindrome(i+1,j))
    {
        return true
    }
    if(isPalindrome(i,j-1))
    {
        return true
    }
 }
}