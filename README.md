ember-google-fonts
==============================================================================

Automatically import Google Fonts into your Ember application.

This addon will add a `<link>` tag to the `content-for "head-footer"` target in your app's `index.html` file.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
npm install --save-dev https://github.com/charlesfries/ember-google-fonts
```
```
ember install ember-google-fonts
```


Usage
------------------------------------------------------------------------------

```javascript
// config/environment.js

module.exports = function(environment) {
  let ENV = {
    /* your config */

    googleFonts: [
      'Merriweather:400,700,900',
      'Roboto:300'
    ]
  };
  return ENV;
}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
