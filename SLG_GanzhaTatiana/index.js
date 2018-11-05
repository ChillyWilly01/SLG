


var Slide = React.createClass({
  render: function() {
    return (
      <div className="content--text">
        <p className="text">{this.props.children}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div className="content--text">
    <Slide>Текст тест</Slide>
    <Slide>слайд 2 текст тест</Slide>
    <Slide>слайд 3 текст тест</Slide>
  </div>,
  document.getElementById("container")
);

var RedButton = React.createClass({
  render: function() {
    return (
      <div className="content--btn">
        <button type="button" className="content--btn_red">
          {this.props.name}
        </button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <RedButton name="кнопка" />
  </div>,
  document.getElementById("container")
);
