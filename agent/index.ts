import { log } from "./logger.js";

rpc.exports = {
    test: function () {
        const header = Memory.alloc(16);
        header
            .writeU32(0xdeadbeef).add(4)
            .writeU32(0xd00ff00d).add(4)
            .writeU64(uint64("0x1122334455667788"));
        log(hexdump(header.readByteArray(16) as ArrayBuffer, { ansi: true }));

        Process.getModuleByName("libc.so")
            .enumerateExports()
            .slice(0, 16)
            .forEach((exp, index) => {
                log(`export ${index}: ${exp.name}`);
            });

        Interceptor.attach(Module.getExportByName(null, "open"), {
            onEnter(args) {
                const path = args[0].readUtf8String();
                log(`open() path="${path}"`);
            }
        });
    }
};
