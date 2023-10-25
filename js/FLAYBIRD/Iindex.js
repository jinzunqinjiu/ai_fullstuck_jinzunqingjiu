let jdHeadTitle =document.getElementById('headTitle')
let  jsheadBird=document.getElementById('headBird')
//标题的摆动
let Y=3
let imgArr=['./img/bird0.png','./img/bird1.png']
let index=0;
setInterval(headwave,200)
function headwave(){
    Y=Y*-1
    jdHeadTitle.style.top= jdHeadTitle.offsetTop+Y+'px'
   jsheadBird.src =imgArr[index++]
   if(index>1)
   {
    index=0
   }

}
headwave()
//草地的移动
let jsGrassland1=document.getElementById('grassLand1')
let jsGrassland2=document.getElementById('grassLand2')
setInterval(landRun,30)
function landRun(){
    jsGrassland1.style.left=jsGrassland1.offsetLeft-3+'px'
    jsGrassland2.style.left=jsGrassland2.offsetLeft-3+'px'
    if(jsGrassland1.offsetLeft<=-343)
    {
        jsGrassland1.style.left=343+'px'
    }
    if(jsGrassland2.offsetLeft<=-343)
    {
        jsGrassland2.style.left=343+'px'
    }
}