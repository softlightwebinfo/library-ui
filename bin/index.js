#!/usr/bin/env node

import {lstatSync, readdir} from "fs";

function template(name) {
    return `export * from './${name.replace(/\b(?:.tsx|.ts)\b/gi, "")}';`;
}

const mapFilter = route => async name => {
    const directory = `${route}/${name}`;
    const stat = await lstatSync(directory);
    console.log(directory,name)
    if (!stat.isFile()) return generate(directory);
    return template(name);
};

function generate(route) {
    const index = "index.ts";
    const fileIndex = `${route}/${index}`;
    readdir(route, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach

        Promise.all(files.filter(i => i !== "index.ts").map(mapFilter(route))).then(rs => {
            console.log(rs)
        });
        //writeFile(fileIndex, data.join("\n"), () => console.log(`Save ${route}`));
    });
}

// generate("./src/types");
// generate("./src/interfaces");
// generate("./src/props");
// generate("./src/functions");
generate("./src/components");
// generate("./src/context");