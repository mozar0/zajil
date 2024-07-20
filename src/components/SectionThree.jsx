import CardInfo from "./CardInfo";

const UserInput = () => {
  return (
    <section id="section-3">
      <div className="theTherd">
        <h2>Our Team</h2>
        <CardInfo
          name="Atef Zaki"
          jop="Art director - 
           Graphic Designer
          Ui - UX Designer"
          imgpath="https://e.top4top.io/p_3123f3gf75.png"
          socialMediaData={[
            {
              svgid: "facebook",
              linkurl: "https://www.facebook.com",
              platformname: "Facebook",
            },
            {
              svgid: "twitter",
              linkurl: "https://www.twitter.com",
              platformname: "Twitter",
            },
            {
              svgid: "behance",
              linkurl: "https://www.behance.com",
              platformname: "behance",
            },
            {
              svgid: "linkedin",
              linkurl: "https://www.linkedin.com",
              platformname: "Linkedin",
            },
          ]}
        />
        <CardInfo
          name="Nader Yasser"
          jop="Cyber Secutry -
          Back-End - porometer Engineer"
          imgpath="https://d.top4top.io/p_31236uwb44.png"
          socialMediaData={[
            {
              svgid: "facebook",
              linkurl: "https://www.facebook.com",
              platformname: "Facebook",
            },
            {
              svgid: "twitter",
              linkurl: "https://www.twitter.com",
              platformname: "Twitter",
            },
            {
              svgid: "github",
              linkurl: "https://www.github.com",
              platformname: "github",
            },
            {
              svgid: "linkedin",
              linkurl: "https://www.linkedin.com",
              platformname: "Linkedin",
            },
          ]}
        />
        <CardInfo
          name="Abdlrhman Nasr"
          jop="Back-end -
               Computer vision -
               NLP Builder"
          imgpath="https://c.top4top.io/p_31238bf783.png"
          socialMediaData={[
            {
              svgid: "facebook",
              linkurl: "https://www.facebook.com",
              platformname: "Facebook",
            },
            {
              svgid: "twitter",
              linkurl: "https://www.twitter.com",
              platformname: "Twitter",
            },
            {
              svgid: "github",
              linkurl: "https://www.github.com",
              platformname: "github",
            },
            {
              svgid: "linkedin",
              linkurl: "https://www.linkedin.com",
              platformname: "Linkedin",
            },
          ]}
        />
        <CardInfo
          name="Yousef Elwageh"
          jop="Mobile App Developer -
Embedded System"
          imgpath="https://b.top4top.io/p_3123qasil2.png"
          socialMediaData={[
            {
              svgid: "facebook",
              linkurl: "https://www.facebook.com",
              platformname: "Facebook",
            },
            {
              svgid: "twitter",
              linkurl: "https://www.twitter.com",
              platformname: "Twitter",
            },
            {
              svgid: "github",
              linkurl: "https://www.github.com",
              platformname: "github",
            },
            {
              svgid: "linkedin",
              linkurl: "https://www.linkedin.com",
              platformname: "Linkedin",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default UserInput;
