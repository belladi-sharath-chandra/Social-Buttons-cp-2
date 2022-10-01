const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="button-heading">
      <h1 className="heading"> Social Buttons </h1>
      <div className="buttons">
        <Button className="like" text="like" />
        <Button className="comment" text="comment" />
        <Button className="share" text="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
