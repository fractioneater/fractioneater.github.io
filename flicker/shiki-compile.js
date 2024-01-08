const response = await fetch("/flicker.tmLanguage.json");
const flickerGrammar = await response.json();

const items = [
  {
    location: document.getElementById("example-code"),
    code:
`var i = 4

fun three(arg)
  if arg == 3
    print "three"

three(i)

class Test
  init(+property)
    print "initializing instance"

  getProperty()
    return this.property

print Test(49.202).getProperty()

# output:
# initializing instance
# 49.202`
  },
  {
    location: document.getElementById("list-insert-snippet"),
    code:
`var l = [1, 2, 4, 5]  # [1, 2, 4, 5]
l.insert(2, 3)        # [1, 2, 3, 4, 5]
`
  }
];

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
  for (var i in items) {
    const html = highlighter.codeToHtml(items[i].code, "flicker");
    console.debug(html);
    if (items[i].location != null) {
      items[i].location.innerHTML = html;
    }
  }
});
