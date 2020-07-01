window.require.config({
  baseUrl: "lib",
  paths: {
    SimpleKeyboard: "simple-keyboard"
  }
});

window.require(["SimpleKeyboard"], SimpleKeyboard => {
  console.log("SimpleKeyboard", SimpleKeyboard);
  const Keyboard = SimpleKeyboard.default;

  const myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
  });

  console.log("myKeyboard", myKeyboard);

  function onChange(input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button) {
    console.log("Button pressed", button);
  }
});
