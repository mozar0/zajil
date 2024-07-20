import './socialmedia.css';
import "boxicons";

const SocialMedia = ({ svgid, linkurl, platformname }) => {
  return (
  
      <a href={linkurl}>
        <box-icon type="logo" name={svgid}></box-icon>
        <span className="tooltip-social">{platformname}</span>
      </a>

  );
};

export default SocialMedia;
