#!/usr/bin/env node

import {readdir, writeFile} from "fs";

function template(name) {
    return `export * from './${name.replace(".tsx", "").replace(".ts", "")}';`;
}

const mapFilter = (route, dir = false) => name => {
    const directory = `${route}/${name}`;
    if (name.indexOf(".ts") !== -1 || name.indexOf(".tsx") !== -1) {
        return template(name);
    }
    generate(directory);
    return dir && template(name);
};

function generate(route, dir = false) {
    const index = "index.ts";
    const fileIndex = `${route}/${index}`;
    readdir(route, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        const data = files.filter(i => i !== "index.ts").map(mapFilter(route, dir)).filter(i => i);
        writeFile(fileIndex, data.join("\n"), () => console.log(`Save ${route}`));
    });
}

generate("./src/types");
generate("./src/interfaces");
generate("./src/props");
generate("./src/functions");
generate("./src/components", true);
generate("./src/widget", true);
generate("./src/context");
