RAW – rawworld.net  (static website, no build step)

FOLDER
  index.html          the page and all its text
  css/style.css       colours, fonts, layout (colours are at the top, under :root)
  js/main.js          photo viewer + inquiry form
  images/             photos used on the page (replace a file, keep the same name)
  images/gallery/     gallery-01.jpg ... gallery-14.jpg
  images/all-photos/  every photo extracted from your PDF, for reuse
  TEXTS.txt           all page text in reading order

HOW TO EDIT
  Text:    open index.html in any text editor and change the words between tags.
  Photos:  replace the file in images/ with a better one, same file name.
  Colours: css/style.css -> --gold, --gold2, --bg at the top.
  Email:   js/main.js -> change hello@rawworld.net to your real address.
  Preview: double-click index.html (fonts need internet).

GO LIVE
  Upload the whole folder (keeping its structure) to your host so index.html is at the root
  of rawworld.net (e.g. Netlify, Vercel, Cloudflare Pages, or cPanel public_html).

NOTES
  - Photos from the PDF are low resolution. Swap in the originals for a sharper hero.
  - Before publishing the Invest section, have a lawyer review the investment wording.
