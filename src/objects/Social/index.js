import React from 'react';
import GithubIcon from '../../img/github-icon.png';
import LinkedinIcon from '../../img/linkedin-icon.png';
import FacebookIcon from '../../img/facebook-icon.png';
import TwitterIcon from '../../img/twitter-icon.png';
import InstagramIcon from '../../img/instagram-icon.png';


const Social = () => (
  <figure className="social">
    <img className="icon" src={GithubIcon} />
    <img className="icon" src={LinkedinIcon} />
    <img className="icon" src={FacebookIcon} />
    <img className="icon" src={TwitterIcon} />
    <img className="icon" src={InstagramIcon} />
  </figure>
);

export default Social;