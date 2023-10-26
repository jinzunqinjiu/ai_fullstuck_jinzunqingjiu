function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.gapHeight = baseObj.randomNum(150, 160) // 间隙
    this.downHeight = baseObj.randomNum(0, 150)
    this.upHeight = 312 - this.downHeight - this.gapHeight
  
    // 生成div
    this.createDiv = function(url, height, positionType, left, top) {
      var newDiv = document.createElement('div')
      newDiv.style.width = '62px'
      newDiv.style.height = height
      newDiv.style.position = positionType
      newDiv.style.left = left
      newDiv.style.top = top
      newDiv.style.backgroundImage = url
      return newDiv
    }
  
    // 生成管道
    this.createBlock = function() {
      // 上方
      let  upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')
      let  upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')
      this.upDivWrap = this.createDiv(null, null, 'absolute', '450px', '0px')
      this.upDivWrap.appendChild(upDiv1)
      this.upDivWrap.appendChild(upDiv2)
  
      //下方
      let downDiv1=this.createDiv('url(img/down_mod.png)',this.downHeight + 'px')
      let downDiv2=this.createDiv('url(img/down_pipe.png)','60px')
      this.downDivWrap=this.createDiv(null,null,'absolute','450px',363-this.downHeight+'px')
      this.downDivWrap.appendChild(downDiv2)
      this.downDivWrap.appendChild(downDiv1)
      jsWrapBg.appendChild(this.upDivWrap)
      jsWrapBg.appendChild(this.downDivWrap)
  
    }
  
  
  }
  
  
  
  // this.createDiv()
  // var b = new Block()