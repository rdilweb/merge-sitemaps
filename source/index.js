// The data included on the "urlset" tag
// please just keep it as one of these
const possibleVals = [
    `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`,
]

/**
 * Merge sitemaps together.
 *
 * @param {string} map1 The XML contents of map 1.
 * @param {string} map2 The XML contents of map 2.
 * @returns {string} The generated XML.
 */
export default function mergeSitemaps(map1, map2) {
    possibleVals.forEach(val => {
        map2 = map2.replace(val, "<urlset>")
    })
    
    let stuff = map2.split("<urlset>") // get elements before/after
    
    return map1.replace("</urlset>", stuff[1])
}
