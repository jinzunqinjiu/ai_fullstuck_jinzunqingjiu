# react + AI  结合

- 百度翻译
    - nlp 任务 翻译
    语言  -> transformers.js  huggingface  推出的transformers  python的平替版
    让前端也可以使用大模型。


- 项目介绍
    - 代码优化
        - 函数封装
        - 配置const 声明大写
        - 面向对象封装
            - es6 提供了类java等企业级大型项目的class，static,extens,get,set等语法糖。(底层还是原型式)。
            - trannsformes  pipeline 封装了 MyTranslatePipeline 类。
            - 使用了单例模式。
                开销很大，只能实例化一次，在一次任务中，也只需要一次，之后可以复用，单例模式杜绝了没必要的多次实例化。
            再举个例子，登录框。

- transformers  js 库
    - 单例？
    反复的调用，多次触发nlp任务的执行。
        - initiate
            装载下载文件
        - progress
        file percentage(文件和百分比)
        更新进度(模型运行在前端，微型化)
        - done
        移除  filter 文件加载
        - update
        nlp translate任务。
        - complete 
        置之死地而后生。
react nlp 翻译任务。
