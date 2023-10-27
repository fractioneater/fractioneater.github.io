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
  ],
}).then(highlighter => {
  const code = highlighter.codeToHtml(
`var i = 4

if i == 3
  print "three"

class Test
  init(+property)
    print "initializing instance"

  getProperty()
    return this.property

print Test(49.202).getProperty()

# output:
# initializing instance
# 49.202`, { lang: "flicker" })
  document.getElementById("example-code").innerHTML = code;
});
