# ko-presets

An experimental combination of Kavie, ko-formatter, and placeholders. Allows for creating of presets which will setup Kavie validators, ko-formatter formatting profiles, and placeholder text which can be used consistantly accross your entire site.

# Installation

```html
<script src="/path/to/knockout.js"></script>
<script src="/path/to/kavie.js"></script>
<script src="/path/to/ko-formatter.js"></script>
<script src="/path/to/ko-presets.js"></script>
```

# Usage

```html

<script>
  Presets.phone = {
    // specify formatter profile
    formatter: Formatter.phone,
    
    // kavie validators
    kavie: {
      minLength: 12 
    },
    
    // the class added to the element if the value.hasError is false
    invalidValidationClass: "validation-error",
    
    // the elements placeholder
    placeholder: "___-___-____",
    
    // any custom extenders to add to this value
    extenders: {},
  }
</script>


<input type="text" data-bind="textInput: value, preset: Presets.phone" />
```
