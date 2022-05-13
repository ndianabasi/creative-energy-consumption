const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ad energy consumption</title>
</head>
<body>
    <script src="energyCalculator.js"></script>

    <script
            data-creative-id='819-1677-2235-16161'
            data-click-macro='MACRO_PLACEHOLDER'
    >
      /* READ THE BELOW CAREFULLY AND DO NOT REMOVE IT BEFORE FINAL TAG PLACEMENT
       * 1. THIS IS AN CHATBOX TAG AND IS TO BE USED ONLY IN CHATBOX PLACEMENT.
       * 2. DO NOT MAKE ANY CHANGES TO THE CONTENTS OF THIS TAG. IT WILL STOP WORKING.
       * Converse ID 819-1677-2235-16161 generated 2022-03-18T11:58:25.032Z
       */
      (function() {
        var s   = document.createElement('script');
        s.src   = 'https://creative-composer-outputs.s3.eu-north-1.amazonaws.com/creatives/16161/assets/stub.js?bust=1647604705032';
        s.async = true;
        document.body.appendChild(s);
      })();
    </script>


    <div id="event-log" style="display: flex; flex-direction: column;">

    </div>
</body>
</html>`;

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request));
});
