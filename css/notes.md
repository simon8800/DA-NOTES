# CSS NOTES

## BASIC SETUP

### RESET BORDER, PADDING, AND MAKE IT BORDER-BOX
This will get rid of default borders, padding, and make sizing border-box.
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## BACKGROUND IMAGE

### HERO IMAGE

Basic hero image setup. 

1. `background-size: cover;` make the image cover the whole div.
2. `background-position: center;` will center the image. 
3. `background-attachment: fixed;` makes the background not move when you scroll past the element.
4. `height: 100vh;` makes the image 100% the viewport height. Which just means it will fill the whole screen.

```css
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
}
```

### GRADIENT
This will add a gradient on top of your background image. This is useful for placing text on top of an image that is too bright. Make the linear gradient black with transparency. Need high contrast for text on image to look decent.
```css
div {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(image);
}
```

## 0 vs None
There is a difference between using 0 and none. Find the answer in this
[link](https://stackoverflow.com/questions/10978118/0-vs-none-as-css-attribute-value).

TL;DR: The values correspond to different properties. For example, `border:0;` will set the `border-width: 0;`while `border:none;` will set `border-style: none;`.

