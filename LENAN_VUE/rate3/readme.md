# 招聘


- 简历
Boss 直聘  聊天
    - 前端全栈 vue 年前正式面试
    - ai 岗位  绘画
    杭州  海康卫视


- VUE   写
    - 组件  评分
    - 显示和数据
    - 加一项功能，要能点击评分  click
    - 鼠标经过  显示

- rate组件 
   - 它是基本每一个电商项目都有的组件，通有组件，手写了一下，挺复杂的

   - vue开发忠于数据驱动
        父组件给我们value，rate 组件，mouseover   mouseout  私有数据  width来驱动，当ckick打完分后，需要汇报给父组件，父组件和子组件状态统一。

- props + emits
    子组件是不可以直接修改props的,vue的数据除v-model是单向的，如果要改就要遵守流程，就是emits
    - 父组件会以自定义事件的方式，定义一个事件，并接受传参，同步状态
    @update-rate="update"
    - 子组件  defineEmits(['update-rate'])emits  数组
    - emits('update-rate',num)

    