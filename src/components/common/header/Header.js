import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar,
         Typography,
         Icon,
         Dropdown,
         DropdownTrigger,
         DropdownContent } from 'coupon-components';
import PropTypes from 'prop-types';

import Logo from 'Components/common/logo/Logo';
import styles from './header.scss';

class Header extends React.Component {

  render() {
    const primaryColor = '#ff4a67';
    const { tabs, userData } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <Logo color={primaryColor} />
            <div className={styles.dividerLogo}></div>
            <Typography.Subtitle light style={{ color: primaryColor }}>MAKER</Typography.Subtitle>
          </NavLink>
        </div>
        <div className={styles.itemsContainer}>
          {tabs && tabs.map((tab) => {
            const key = { key: tab.id };
            return (
              <NavLink {...key} to={tab.route} className={styles.tabs} activeClassName={styles.active}>
                <Icon name={tab.icon} size={30} />
                <Typography.Text small bold>{tab.label}</Typography.Text>
              </NavLink>
            )
          })}
          <Dropdown>
            <DropdownTrigger>
              <div className={styles.userMenu}>
                <div className={styles.avatarContainer}>
                  <Avatar image={userData.image}
                    borderColor={primaryColor} />
                </div>
                <Typography.Text small bold>{userData.name}</Typography.Text>
                <Icon name="FaCaretDown" size={10} />
              </div>
            </DropdownTrigger>
            <DropdownContent className={styles.menuContainer}>
              {userData.options && userData.options.map((option, i) => {
                return (
                  <div key={`option-${i}`} onClick={option.onClick} className={styles.menuOption}>
                    <Typography.Text small>
                      {option.value}
                    </Typography.Text>
                  </div>
                )
              })}
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  userData: PropTypes.object,
  tabs: PropTypes.array,
}

export default Header;