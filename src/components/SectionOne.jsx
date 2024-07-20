import OutoWriting from "./OutoWriting";

const SectionOne = () => {
  return (
    <section id="section-1">
      <div className="theFirst">
        <div className="content">
          <h1>Save Your Time With Zajil</h1>
          <p>
            <OutoWriting />
            <span>New generation of call service (ZAJIL{<img className="logo" src="../../public/Screenshot_2024-07-20_182626-removebg-preview.png"/>})</span>
          </p>
        </div>
        <div className="heroCard animate-pulse"></div>
        
      </div>
    </section>
  );
};

export default SectionOne;
