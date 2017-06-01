# hyper-config
Storing my config for using [hyper.is](https://hyper.is/).

### Disclaimer
Not all of these plugins are entirely original - inspired by many existing packages, copied local to get working on Windows.

### Usage
1. Clone / download locally: `git clone https://github.com/andycarrell/hyper-config.git`
2. Copy & paste `.hyper.js` & `.hyper_plugins` into `~/`
3. Change env variables (in .hyper.js) for working directory on startup & powershell location:
```js
  config: {
    ...
    workingDirectory: 'C:/',
    pwsPath: 'C:/Windows/System32/WindowsPowershell/v1.0/powershell.exe'
  },
  ...
```

I also prefer to start my shell in git bash
```js
  config: {
    ...
    shell: 'C:/Program Files/Git/bin/bash.exe',
  },
  ...
```
