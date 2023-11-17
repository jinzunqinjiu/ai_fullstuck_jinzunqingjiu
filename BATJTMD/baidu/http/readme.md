# 百度HTTP底层理解   从代码层走向协议层

- openai.Completion 接口，实现了prompt任务
  底层封装了一次http请求

- http请求
  - 构建在tcp/ip之上，传输的是数据报
  - Post（Method） + url(openai api 地址)  请求
  - 请求头  Authorization  api-key    key-value<=>401 状态码  必考，重点

    cookie  ?
  - 请求体  body 分包发送，上传文件   400 用户犯错了
  JSON 格式的参数
  {

  }
  - HTTP状态码的划分
  1xx 请求中
  2xx 成功
  3xx 跳转
  4xx 用户有错
  5xx 服务器有错