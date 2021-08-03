---
layout: post
title:  "Code Markdown to Structured Pseudo-code"
---

Convert very simple markdown syntax to very simple pseudo-code.

Code markdown is line-oriented whereas pseudo-code is structure-oriented (braces indicate inclusion).

# Basic Premise
Use `markdown-mode` of emacs to write code and elide details.

## Elision in Emacs Org-Mode
Position mouse over a line containing an octothorpe `#`.

Press `TAB` key.

This will open/close a layer.

Pressing `TAB` key again and again will toggle between elided and non-elided forms of the text.

# Italicized Identifiers

Possible convention, italicized identifiers can include spaces (but not underscores - this can be changed later to be some other character or sequence) and are considered to be comments.

# Example
## Input
```
# _containment_

## _fb pipeline_
	allContains1
	printAllDeepContains
	printAllDirectContains



## _details_
### allContains1
	load fb
	load onSameDiagram
	load contain1
### printAllDeepContains
	load fb
	load onSameDiagram
	load contains2
### printAllDirectContains
	load fb
	load onSameDiagram
	load contains3
```
## Output
```
{_containment_

{_fb pipeline_
	allContains1
	printAllDeepContains
	printAllDirectContains



}
{_details_
{allContains1
	load fb
	load onSameDiagram
	load contain1
}
{printAllDeepContains
	load fb
	load onSameDiagram
	load contains2
}
{printAllDirectContains
	load fb
	load onSameDiagram
	load contains3
}}}
```

# Algorithm

A section beginning with an octothorpe `#` is composed of 3 parts:
1. The octothorpe `#`
2. The first text up to \n
3. The rest of the text up to the next octothorpe (incl. \n's).

```
# a b 
## c d
## e f
```

is converted to 
```
{ a b { c d } { e f }}
```
using a simple algorithm, see md2brace.html and support.js.

1. Set two counters to 0. (depth and openbrackets).
2. When a `#` is encountered, determine new depth as the number of `#`s. If newdepth > depth, emit an open brace `{`, if newdepth === depth emit close and open `}\n{`, otherwise panic. Set depth to newdepth, increment openbrackets by number of `{` that were added.
3. At the end, emit one '}' for each openbracket.

No judgement is made about the contents of a,b,c,d,e,f. (That is left up to other tools).

# Github

[md2brace](https://github.com/guitarvydas/md2brace)

# See Also

[Glue Tool](https://guitarvydas.github.io/2021/04/11/Glue-Tool.html)
[Glue Manual](https://guitarvydas.github.io/2021/03/24/Glue-Manual.html)
[Blog](https://guitarvydas.github.io)
[References](https://guitarvydas.github.io/2021/01/14/References.html)

<script src="https://utteranc.es/client.js" 
        repo="guitarvydas/guitarvydas.github.io" 
        issue-term="pathname" 
        theme="github-light" 
        crossorigin="anonymous" 
        async> 
</script> 
