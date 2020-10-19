#!/usr/bin/env node

import fs from "fs"
import { program } from "commander"
import mergeSitemaps from "./index"

let loadSitemap = (sitemap) => {
    return fs.readFileSync(sitemap).toString()
}

let dispatch = (base, second, outFile) => {
    let baseSitemap = loadSitemap(base)
    let secondSitemap = loadSitemap(second)

    fs.writeFileSync(outFile, mergeSitemaps(baseSitemap, secondSitemap))

    console.log(`Wrote merged sitemap to ${outFile}!`)
}

program
    .name("merge-sitemaps")
    .arguments("<base-sitemap> <second-sitemap> <output-file>")
    .action(dispatch)

program.parse(process.argv)
