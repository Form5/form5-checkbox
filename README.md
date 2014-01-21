form5-checkbox
==========

form5-checkbox is a simple jQuery plugin to skin checkboxes. Only **2KB** of
minified Javascript, along with your own styles (very basic demo styles are
provided).

[Demo](http://form5.github.io/form5-checkbox/)

## Getting started

### How to fetch form5-checkbox?

Install with [Bower](http://bower.io): `bower install form5-checkbox`

Clone the Github project: `git clone https://github.com/Form5/form5-checkbox.git`

Or [download zip](https://github.com/Form5/form5-checkbox/archive/master.zip).

### Then what?

After installation simply load the files along with other styles and scripts.
Remember that this script requires jQuery, meaning jQuery should already be
loaded before this script. We recommend using the latest stable release.

```html
<link rel="stylesheet" href="path/to/form5-checkbox.css">
...
<script src="path/to/jquery.js"></script>
<script src="path/to/form5-checkbox.min.js"></script>
<script>
  $(function(){
    $('input[type=checkbox]').checkbox();
  });
</script>
```

No need for any special markup, form5-radio should target inputs directly.
Simply create an input with `type='checkbox'` and the plugin will generate a
new element like so.

```html
// This
<input type="checkbox">

// Will become
<checkbox type="checkbox">
  <input type="checkbox">
</checkbox>
```

See our [demo](http://form5.github.io/form5-checkbox) for a live example.

### What about labels?

There is a way to include labels directly with this plugin, or simply by
adding the `data-label='...'` attribute to your `input`, which will allow you
to append the contents in a pseudo element for example.

See our [demo](http://form5.github.io/form5-checkbox) for a live example.

`## Advanced usage

There are not many ways to configure the scripts functionality, except for
event based callbacks. Here you can see all the options with their default
values, and below you can find more detailed description for each option.

```javascript
$('input[type=checkbox]').checkbox({
  toggle: function(){},
  init: function(){},
  debug: false
});
```

`toggle: function ()` **Default: function() {}**

Optional function to be ran each time a checkbox button is toggled.

`init: function ()` **Default: function() {}**

Optional function to be ran at initialization.

`debug: boolean` **Default: false**

If you are having problems and are not sure certain parts of the scripts are
actually working, you can enable this option to receive console.logs with
messages for initialization, toggling and destroying. This will also add a
`debug="true"` attribute to your new element enabling you to add some styles
that might help with debugging.


### After initialization

Sometimes we do things we wish we hadn't, and just wanna take a step back and
rethink the situation. For those instances, we included a helper string that
enables you to simply reverse all changes made by this script.

```javascript
$('input[type=checkbox]').checkbox('destroy');
```

After running this, you can initialize some fresh new checkbox buttons with new
options or whatever your mind can imagine.

### Still not satisfied?

You could go all in and customize the script directly. The original can be
found in `src/form5-checkbox.js`. To compile a minified/uglified version of
your new script you can build it again by running:

```shell
$ npm install
$ grunt build
```

If you would like to extend the core functionality of this script in a way
that could benefit others, don't hesitate to create a pull request!

## Cress

### Using [Cress](http://github.com/Form5/Cress)

If you are using our awesome CSS framework Cress, you can find a `.scss` file
using the appropriate variables in `src/form5-checkbox.cress.scss`. That way
you have a some basic checkbox buttons working directly with your current styles.

## Author
Written by [Benedikt D Valdez](http://github.com/benediktvaldez), developer at
[Form5](http://www.form5.is).

### Contributors
[Árni Reynir Óskarsson](http://github.com/arnireynir), developer at
[Form5](http://www.form5.is).
