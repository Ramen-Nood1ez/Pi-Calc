let rad = document.form1.numoption;
let prev = null;
const num_input = document.getElementById("numinput");
const answer = document.getElementById("ans");
const submit = document.querySelector("#eqsubmit");
const rbs = document.querySelectorAll("input[name='numoptionget']");
let opUsed = 1;
const pi = Math.PI;

for (let i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", function() {
    (prev) ? console.log(prev.value): null;
    if (this !== prev) {
      prev = this;
    }
    // opUsed = this.value;
    console.log(this.value)
      if (this.value == "Circumference") {
        removeOption("Circumference", "2");
      }
      else if (this.value == "Radius") {
        removeOption("Radius", "2");
      }
      else if (this.value == "Area") {
        removeOption("Area", "2");
      }
      else if (this.value == "Diameter") {
        removeOption("Diameter", "2");
      }
      else
        console.log(this.value);
  });
}

function removeOption(input, option_to_remove = "2") {
  switch (option_to_remove) {
    case "1":
      break;
    case "2":
      switch (input) {
        case "Circumference":
          rbs[0].disabled = true;
          opUsed = 0;
          if (rbs[0].checked)
            rbs[0].checked = false;
          for (let i = 0; i < rbs.length; i++) {
            if (i !== 0)
              rbs[i].disabled = false;
          }
          break;
        case "Radius":
          rbs[1].disabled = true;
          opUsed = 1;
          if (rbs[1].checked)
            rbs[1].checked = false;
          for (let i = 0; i < rbs.length; i++) {
            if (i !== 1)
              rbs[i].disabled = false;
          }
          break;
        case "Area":
          rbs[2].disabled = true;
          opUsed = 2;
          if (rbs[2].checked)
            rbs[2].checked = false;
          for (let i = 0; i < rbs.length; i++) {
            if (i !== 2)
              rbs[i].disabled = false;
          }
          break;
        case "Diameter":
          rbs[3].disabled = true;
          opUsed = 3;
          if (rbs[3].checked)
            rbs[3].checked = false;
          for (let i = 0; i < rbs.length; i++) {
            if (i !== 3)
              rbs[i].disabled = false;
          }
          break;
        default:
          break;
      }
      break;
    default:
      console.log(option_to_remove + " is not a valid option!");
      break;
  }
}

submit.onclick = function () {
  let selectedValue;

  for (var rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  if (selectedValue == undefined) {
    console.log("Can't submit because an input is not selected");
  }
  else {
    switch (selectedValue) {
      case "Circumference":
        selectedValue = 0;
        break;
      case "Radius":
        selectedValue = 1;
        break;
      case "Area":
        selectedValue = 2;
        break;
      case "Diameter":
        selectedValue = 3;
        break;
    }
    alert(selectedValue);
    console.log(opUsed);
    var result = calculate(numinput.value, opUsed, selectedValue);
    answer.innerHTML = ("Your answer is: " + result.toFixed(2));
  }
};

function calculate(num, type_used, type_to_get) {
  let result = null;
  console.log(num);
  if ((num > 0 && num !== null)) {
    if (type_used >= 0 && type_used < 5 && type_used != null && type_used != type_to_get) {

      if (type_to_get >= 0 && type_to_get < 5)
      {
        console.log(num);
        switch (type_used) {
          case 0:
            // Circumference
            switch (type_to_get) {
              case 1:
                // Radius
                result = (num / 2 / pi);
                break;
              case 2:
                // Area
                result = (Math.pow(num, 2) / (4 * pi));
                break;
              case 3:
                // Diameter
                result = num / pi;
                break;
            }
            break;
          case 1:
            // Radius
            switch (type_to_get) {
              case 0:
                // Circumference
                result = 2 * pi * num;
                break;
              case 2:
                // Area
                result = (pi * Math.pow(num, 2));
                break;
              case 3:
                // Diameter
                result = num * 2;
                break;
            }
            break;
          case 2:
            // Area
            switch (type_to_get) {
              case 0:
                // Circumference
                result = (2 * (Math.sqrt(pi * num)));
                break;
              case 1:
                // Radius
                result = (Math.sqrt(num / pi));
                break;
              case 3:
                // Diameter
                result = (Math.sqrt(4 * num / pi));
                break;
            }
            break;
          case 3:
            // Diameter
            switch (type_to_get) {
              case 0:
                // Circumference
                result = pi * num;
                break;
              case 1:
                // Radius
                result = num / 2;
                break;
              case 2:
                // Area
                result = (pi * Math.pow(num / 2, 2));
                break;
            }
            break;
        }
        console.log(result);
        return result;
      }
    }
  }
  else {
    console.log("The input number can't be 0 or null");
  }
}
