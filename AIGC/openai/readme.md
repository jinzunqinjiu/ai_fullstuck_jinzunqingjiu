# 跨境电商
AI 开店
开玩具店->拼多多的海外版
- 翻译?  NLP   不用google  翻译写程序
pipeline('translate')
AIGC
- 卖什么货？
- 卖多少钱？
- 营销内容怎么写有搞头

- 如何让openai 帮你开店?
大模型(openai 接口调用)-Prompt Enginner  (编写prompt)


## prompt 工程
会问问题的人比解决问题的人更nb
大模型超越了大部分人的能力

## openai 封装的过程
人生苦短，我用python
特别适合nlp
一个功能写法就一种
风格 缩进
def get_response(prompt)：
调用了openai库的Completions模块(其他模块).create方法
completions=openai.Completions.create(
    engine=,
    prompt=,  吴恩达prompt
    temperature=0,  自由度
    max_tokens=,
    n=,
)
同步的   js异步的
print(completions)
result =completions.choices[0].text
return result
