import React from 'react';
import { Typography, Icon } from 'coupon-components';
import styles from './footer.scss';
import Logo from 'Components/common/logo/Logo';

class Footer extends React.Component {

  render() {
    const darkNeutral = '#8F8E94';
    const primaryColor = '#ff4a67';
    return (
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Logo/>
            <Typography.Subtitle bold style={{color: darkNeutral}}>2017</Typography.Subtitle>
          </div>
          <Typography.Subtitle light style={{color: primaryColor}}>Contactanos</Typography.Subtitle>
          <div className={styles.logo}>
            <Icon name="FaFacebook" color='#1e477b' size={20}/>
            <Icon name="FaInstagram" color='#285b9e' size={20}/>
            <Icon name="FaTwitter" color='#0093b5' size={20}/>
            <Icon name="FaPinterestP" color='#b93326' size={20}/>
          </div>
        </div>
      </div>
  );
  }
}

export default Footer