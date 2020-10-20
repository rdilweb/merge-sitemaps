import xml from "xml-js"

const isObject = (target) =>
    typeof target === "object" && !Array.isArray(target)

const mergeDeep = (target, ...sources) => {
    if (!sources.length) return target
    const source = sources.shift()

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} })
                mergeDeep(target[key], source[key])
            } else {
                Object.assign(target, { [key]: source[key] })
            }
        }
    }

    return mergeDeep(target, ...sources)
}

/**
 * Merge sitemaps together.
 *
 * @param {string} map1 The XML contents of map 1.
 * @param {string} map2 The XML contents of map 2.
 * @returns {string} The generated XML.
 */
export default function mergeSitemaps(map1, map2) {
    let mapObj = xml.xml2js(map1, { compact: true })
    const secondMap = xml.xml2js(map2, { compact: true })

    mergeDeep(mapObj, secondMap)

    return xml.js2xml(mapObj, { compact: true })
}
