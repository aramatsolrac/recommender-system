import "./Header.scss";
import Button from "../Button/Button";
function Header({
  handleBack,
  handleSkip,
  progressValue,
  progressMax,
  formIndex,
  formLength,
}) {
  return (
    <div className="header">
      <div className="header__buttons">
        <Button handleBack={handleBack} className="header__buttons-back" />
        <Button
          handleSkip={handleSkip}
          children={"Skip"}
          className="header__buttons-skip"
        />
      </div>
      <div>
        <h1 className="header__title">
          Help Us{" "}
          <span className="header__title-highlight">
            Tailor Your experience
          </span>{" "}
          and Store
        </h1>
      </div>
      <div className="header__progress">
        <progress
          className="header__progress-bar"
          value="20"
          max="100"
          //   value={progressValue} -> need to pass the value via props
          //   max={progressMax} -> need to pass the value via props
        ></progress>
        <span className="header__progress-number">
          {formIndex}/{formLength}
        </span>
      </div>
    </div>
  );
}

export default Header;
