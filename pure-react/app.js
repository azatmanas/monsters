const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "Hi",
      { className: "title", key: 3 },
      "React is render "
    ),
    React.createElement(Person, {
      name: "Azat",
      occupation: "Bartender",
    }),
    React.createElement(Person, {
      name: "Atai",
      occupation: "Server",
    }),
    React.createElement(Person, {
      name: "Tali",
      occupation: "Supervisor",
    }),
  ]);
};
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
