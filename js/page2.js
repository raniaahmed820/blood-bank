new Validator(document.querySelector('#myForm'), function (err, res) {
    return res;
});

new Validator(document.querySelector('#myForm'), function (err, res) {
    return res;
},options: {

    rules: {
      custom: function (value) {
        return (value.trim().toLowerCase() === 'custom');
      }
    },
    messages: {
      en: {
        custom: {
          incorrect: 'Error ;-)'
        }
      }
    }
  };
);


// Validation of a current field after the events of "change", "keyup", "blur"
onAir: true,

// Show validation errors
showErrors: true,

// Auto-hide the error messages
autoHideErrors: false,

// Timeout auto-hide error messages
autoHideErrorsTimeout: 2000,

// Language error messages
locale: 'en',

// Object for custom error messages
messages: {},

// Object for custom rules
rules: {},

// classname for error messages
errorClassName: 'error',

// remove spaces from validation field values
removeSpaces: false,

// tracking of new elements
autoTracking: true,

// events list for binding
eventsList: ['keyup', 'change', 'blur']