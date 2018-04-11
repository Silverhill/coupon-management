import React from 'react';
import { graphql } from 'react-apollo';
import { Card, Typography, RowHunter } from 'coupon-components';

import QueryService from '../../queries-service';
import style from './MakerPage.scss';

class MakerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    if (!this.props.data.loading) {
      return (
        <div className={style.container}>
          <div className={style.leftPanel}>
            <h1>todo: add something</h1>
          </div>
          <div className={style.userList}>
            <Card title="Makers" className={style.hunterCard}>
              <Typography.Title>Listado de Hunters</Typography.Title>
              {(this.props.data.allMakers || []).map((user, i) => (
                <Card key={i}>
                  <RowHunter
                    key={i}
                    name={user.name}
                    email={user.email}
                    totalCoupons={user.couponCount}
                  />
                </Card>
              ))}
            </Card>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }

  }

}

export default graphql(QueryService.getMakers)(MakerPage);