# merge-sitemaps

A simple CLI and npm package to merge sitemaps together.

## Usage

### With CLI

```bash
$ npx merge-sitemaps sitemap.xml subdir/other-sitemap.xml build/sitemap.xml
```

(With the CLI, argument 1 is the base sitemap, argument 2 is the secondary sitemap, and argument 3 is the destination for the output.)

### With API

```js
var mergeSitemaps = require("merge-sitemaps");

// note: the API doesn't actually do any work with files, it just does the string manipulation and related stuff
console.log(
  mergeSitemaps("base-xml-sitemap-as-string", "secondary-xml-sitemap-as-string")
);
```

## License

MIT. See the LICENSE file.

## Credits

- [Reece Dunham](https://rdil.rocks) - Author
- [Dowland Aiello](https://github.com/dowlandaiello) - Making it work
- [This StackOverflow post](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge) - Very helpful
