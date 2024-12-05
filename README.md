# Frida Script Dev Example

https://github.com/oleavr/frida-agent-example

https://github.com/oleavr/frida-tool-example

https://github.com/hluwa/FRIDA-DEXDump

## How to compile

```bash
$ git clone https://github.com/feicong/frida-agent-dev
$ cd frida-agent-dev/
$ npm install
```

## Development workflow

To continuously recompile on change, keep this running in a terminal:

```bash
$ npm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.

## How to debug

```bash
$ adb shell su -c /data/local/tmp/frida-server
$ npm run debug
# or
$ frida -U --debug --runtime=v8 -l _agent.js -o out.log  -f com.android.settings
```

Open Chrome: ```chrome://inspect/```

Click: ```Remote Target -> inspect```

(⌘ + P) -> Open File: agent/index.js

Setup breakpoint. type ```rpc.exports.test()``` in the console.

enjoy debugging.
