
```
npm install --save-dev flow-bin
```

```
"scripts": {
  "flow": "flow"
}
```

```
npm run flow init
```

flow服务的工作方式是增量检查，也就是说它只检查变化的部分。在终端输入以下命令来启动flow服务：
```
npm run flow
```

输入`npm run flow stop`停止服务

由于额外添加的类型注释不是正确的JavaScript语法，打包编译的时候需要在源码中剔除。可以通过flow-remove-types来剔除，或者如果你已经用Babel来转译JS，你可以使用Babel preset来移除。

```
npm install --save-dev babel-cli babel-preset-flow
```

```
npm install --save-dev flow-remove-types
```

```
"scripts": {
  "flow": "flow",
  "build": "flow-remove-types src/ -D dest/",
}
```

## related

https://github.com/be-fe/iUtils.js

[flow入门](http://blog.csdn.net/fen747042796/article/details/68945984)
