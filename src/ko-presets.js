ko.bindingHandlers.preset = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext){
    var bindings = allBindings();
    var value;

    if (bindings.textInput){
      value = bindings.textInput;
    } else if (bindings.value){
      value = bindings.value;
    }

    var presetObject = valueAccessor();

    if (presetObject.formatter){
      ko.bindingHandlers.formatter.init(element, presetObject.formatter, allBindings, viewModel, bindingContext);
    }

    if (presetObject.kavie){
      value.extend({
        kavie: presetObject.kavie
      });

      if (presetObject.invalidValidationClass){
        var cssData = {};
        cssData[presetObject.invalidValidationClass] = value.hasError;
        ko.applyBindingsToNode(element, { css: cssData });
      }
    }

    if (presetObject.extenders){
      value.extend(presetObject.extenders);
    }

    if (presetObject.placeholder){
      element.placeholder = presetObject.placeholder;
    }



  }
}

;(function(ns){
  ns.phone = {
    formatter: Formatter.phone,
    kavie: {
      minLength: 12
    },
    invalidValidationClass: "validation-error",
    placeholder: "___-___-____",
    extenders: {},
  }
}(this.Presets = this.Presets || {}));


ko.extenders.logTarget = function(target, prop){
  console.log(target);
}
