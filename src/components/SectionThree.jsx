import CardInfo from "./CardInfo";

const UserInput = () => {
  return (
    <section id="section-3">
      <div className="theTherd">
        <CardInfo
          name="Atef Zaki"
          jop="Art director"
          imgpath="../../public/Screenshot 2024-07-20 130939.png"
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
              linkurl: "https://www.linkedin.com",
              platformname: "Linkedin",
            },
          ]}
        />
        <CardInfo
          name="Nader Yasser"
          jop="Cyber Secutry"
          imgpath="../../public/Screenshot 2024-07-20 130952.png"
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
