# kaho (t)
me when kahoot
<hr>
make this code a bookmarklet or something:
```js
javascript:fetch('https://cdn.jsdelivr.net/gh/RuralAnemone/kahoot@latest/code.js').then(res=>res.text().then(text=>eval(text))).catch(e=>alert(e))
```