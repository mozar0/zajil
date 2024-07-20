import "../../public/icon-feature-1.svg";
import "../../public/icon-feature-2.svg";
import "../../public/icon-feature-3.svg";

const SectionTwo = () => {
  return (
    <section id="section-2">
      <div className="theSecond">
        <p className="headLine">Remarkable features in Zajle</p>
        <div className="cardsContainer">
          <div className="box">
            <img src="/public/icon-feature-1.svg" />
            <p>
              <span>Multilingual Support</span>
              <br />
              <br />
              Here with Zajle you will recive the best security for your data
            </p>
          </div>
          <div className="box">
            <img src="/public/icon-feature-2.svg" />
            <p>
              <span>Intent Recognition</span>
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            </p>
          </div>
          <div className="box">
            <img src="/public/icon-feature-3.svg" />
            <p>
              <span>Context Management</span>
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
