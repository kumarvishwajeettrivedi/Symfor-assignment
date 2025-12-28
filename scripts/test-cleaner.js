const { cleanContent } = require('../lib/cleaner');

const dirtyHtml = `
  <html>
    <head>
      <style>body { color: red; }</style>
    </head>
    <body>
      <h1 class="entry-title" style="color: blue;">Hello World</h1>
      <p class="has-text-align-center" style="font-size: 20px;">This is a paragraph.</p>
      <div id="useless-div">
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
      </div>
      <script>alert('malicious')</script>
      <img src="image.jpg" width="100" height="100" class="wp-image-123" />
    </body>
  </html>
`;

console.log('--- Dirty HTML ---');
console.log(dirtyHtml);

const cleaned = cleanContent(dirtyHtml);

console.log('\n--- Cleaned HTML ---');
console.log(cleaned);
