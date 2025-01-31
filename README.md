# AO - A Handmade Hugo theme

**[Demo](https://ao2233.github.io)**

<p align="center">
   
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/2.png">
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/1.png">
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/5.png">
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/6.png">
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/4.png">
   <img width="720"  src="https://github.com/AO2233/archive/blob/main/img/AO/3.png">
</p>

<p float="center">
  <img src="https://github.com/AO2233/archive/blob/main/img/AO/7.PNG" />
  <img src="https://github.com/AO2233/archive/blob/main/img/AO/8.PNG" />
  <img src="https://github.com/AO2233/archive/blob/main/img/AO/9.PNG" />
</p>

## New Feature
> for features in archie, follow [archie](https://github.com/athul/archie) to set
- Mobile Device Style Support
- Dark/Light Mode Auto Toggle (based on system theme mode -> Windows10+✅, MacOS✅, Linux Gnome43✅)
- Full LaTeX support
- PDF Display
- Music (APlayer Spotify)
- Video (Dplayer Youtube Bilibili)

## Writing Posts
Create a new `.md` file in the *content/posts* folder
```yml
---
title: Title of the post
description:
date:
tldr: (optional)
draft: true/false (optional)
tags: [tag names] (optional)
---
```
## Aplayer
```js
{{< aplayer id=2 url=/media/atest.mp3 name="fly away"  artist=上原あずみ >}}
```
## Dplayer
```js
{{< dplayer id=1 url=/media/vtest.mp4 >}}
```
## PDF embed
```js
{{< pdf id=s url=/media/pdf/f@ckTeX.pdf >}}
```
## LaTeX
```latex
$$
f(x)=\int_{-\infty}^\infty\widehat f\xi e^{2\pi i\xi x} d\xi
$$

\begin{equation}
  x = a_0 + \cfrac{1}{a_1 
          + \cfrac{1}{a_2 
          + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }
\end{equation}
```
## mermaid
```js
{{< mermaid >}}
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid
    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d
    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
{{< /mermaid >}}
```
## footnote
```js
reference: [reference]({\{< ref "path/demo.md" >}\})
same page reference: [reference]({\{< relref "demo.md#1" >}\})
```

## Base on & Reference 
[archie](https://github.com/athul/archie) -> **A really great theme**

[ezhil](https://github.com/vividvilla/ezhil) -> **Simple is the best**

[Zpix](https://github.com/SolidZORO/zpix-pixel-font) -> **The Best pixel font in Chinese**
