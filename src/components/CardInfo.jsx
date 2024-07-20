import SocialMedia from "./SocialMedia";

const CardInfo = ({ socialMediaData, name, jop, imgpath }) => {
  return (
    <div className="card-client">
      <div className="user-picture">
        <img src={imgpath} alt="User" />
      </div>
      <p className="name-client">
        {name}
        <span>{jop}</span>
      </p>
      <div className="social-media">
        {socialMediaData.map((item, index) => (
          <SocialMedia
            key={index}
            svgid={item.svgid}
            linkurl={item.linkurl}
            platformname={item.platformname}
          />
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
