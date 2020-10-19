import xml from "xml-js"
import toXml from "xml"
import { merge } from "merge-anything"

/**
 * Merge sitemaps together.
 * 
 * @param {string} map1 The XML contents of map 1.
 * @param {string} map2 The XML contents of map 2.
 * @returns {string} The generated XML.
 */
export default function mergeSitemaps(map1, map2) {
    let mapObj = xml.xml2js(map1)
    const secondMap = xml.xml2js(map2)

    let getXmlValByName = (name, xml) => {
        let item;
        xml.forEach((thing) => {
            if (thing.name === name) {
                item = thing
            }
        })
        return item
    }

    mapObj.elements[
        mapObj.elements.indexOf(
            getXmlValByName("urlset", mapObj.elements)
        )
    ].elements = merge(
        getXmlValByName("urlset", mapObj.elements).elements,
        getXmlValByName("urlset", secondMap.elements).elements
    )
    return xml.js2xml(mapObj)
}
