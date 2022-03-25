import "./Footer.scss";
import Button from "../Button/Button";

function Footer({ handleNext }) {
  return (
    <div className="footer">
      <h2 className="footer__name">shopify</h2>
      <Button
        children="Next"
        className="footer__button"
        type="button"
        onClick={handleNext}
      />
    </div>
  );
}

export default Footer;
