# HTML NOTES

## SPAN

Use the span tag to style specifc words inside another element. Spans are good since they are in-line elements and won't affect the things around it.

## INPUT

### REQUIRED

You can use `required` in your input so that it must be filled in for submission.

```html
<input type="text" required />
```

### CHECKBOX

You can use `checked` to check the box on default.

```html
<input type="checkbox" name="news" id="news" checked />
```

## SELECT / OPTION

You can use `selected` to select a default option.

```html
<select name="find-us" id="find-us">
  <option value="friends" selected>Friends</option>
  <option value="search">Search engine</option>
  <option value="ad">Advertisement</option>
</select>
```

## TEXTAREA

You can actually resize the `textarea` on your browser. On the bottom-right hand corner you can drag that to resize.

You can disable it with CSS.

```css
textarea {
  resize: none;
}
```

## GLYPHS

You can add special characters in your HTML by using these [glyphs](https://css-tricks.com/snippets/html/glyphs/).

```html
<p>&nbsp;</p>
<!-- this creates a whitespace in the p tag. -->
```

## BASIC SEARCH ENGINE OPTIMIZATION (SEO)

Use the `meta` tag to store basic information about your webpage.

```html
<!-- Example from Udemy's webpage -->
<meta name="description" content="Udemy is the world&#039s largest destination for online courses...">
```

## BOOLEAN ATTRIBUTES

Attributes with a boolean value just needs to be present in the tag to be turned on. Heres an example with the attribute `controls`:

```html
<!-- example from freecodecamp -->
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

## ACCESSIBILITY

### Images

Images should have an `alt` text to describe the image in case the image doesn't load or the link is broken. If explaining the image in `alt` is redundant because the following sentences describe the picture, then leaving `alt` as an empty string may be appropriate i.e. `alt=""`. 

### LINKS

Having a list of 'Click here' links is not very helpful for people with screen readers.

Try using more descriptive text. Example:

```html
<!-- from this -->
<p>Hey! <a href="">Click here</a> for information about godzilla-sized kangaroos!</p>

<!-- to this -->
<p>Hey! Click here for <a href="">information about godzilla-sized kangaroos!</a></p>
```