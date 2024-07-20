// import logo
import svg1 from "../../public/icon-feature-1.svg";
import svg2 from "../../public/icon-feature-2.svg";
import svg3 from "../../public/icon-feature-3.svg";
const SectionTwo = () => {
  return (
    <section id="section-2">
      <div className="theSecond">
        <p className="headLine">Remarkable features in Zajle</p>
        <div className="cardsContainer">
          <div className="box">
            <img src={svg1} />
            <p>
              <span>Multilingual Support</span>
              <br />
              <br />
              Here with Zajle you will recive the best security for your data
            </p>
          </div>
          <div className="box">
            <img src={svg2} />
            <p>
              <span>Intent Recognition</span>
              <br />
              <br />
              AI allows chatbots to refer back to a earlier messages, answer
              follow-up
            </p>
          </div>
          <div className="box">
            <img src={svg3} />
            <p>
              <span>Context Management</span>
              <br />
              <br />
              It can determine what the user is trying to respond accordingly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
