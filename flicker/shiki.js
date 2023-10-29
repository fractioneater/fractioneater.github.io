const code = document.getElementById("example-code-src").textContent;

const response = await fetch("/flicker.tmLanguage.json");
const flickerGrammar = await response.json();

shiki.getHighlighter({
  theme: "css-variables",
  langs: [
    {
      id: "flicker",
      scopeName: "source.flicker",
      grammar: flickerGrammar
    }
  ]
}).then(highlighter => {
  const html = highlighter.codeToHtml(code, { lang: "flicker" })
  document.getElementById("example-code").innerHTML = html;
});
