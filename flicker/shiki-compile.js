const response = await fetch("/flicker.tmLanguage.json");
const flickerGrammar = await response.json();

const items = [
  {
    name: "example-snippet",
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
    name: "list-insert-snippet",
    code:
`var l = [1, 2, 4, 5]  # [1, 2, 4, 5]
l.insert(2, 3)        # [1, 2, 3, 4, 5]
`
  },
  {
    name: "list-sort-snippet",
    code:
`var l = [1, 5, 7, 3, 6]   # [1, 5, 7, 3, 6]
l.sort { |a, b| a >= b }  # [7, 6, 5, 3, 1]`
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
    const location = document.getElementById(items[i].name);
  
    if (location != null) {
      console.groupCollapsed(items[i].name);
      console.debug(html);
      console.groupEnd();  
      location.innerHTML = html;
    }
  }
});
