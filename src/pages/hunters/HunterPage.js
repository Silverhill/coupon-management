import React from 'react';
import { graphql } from 'react-apollo';
import { Card, Typography, BasicRow } from 'coupon-components';

import QueryService from '../../queries-service';
import style from './HunterPage.scss';

class HunterPage extends React.Component {
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
            <Card title="Hunters" className={style.hunterCard}>
              <Typography.Title>Listado de Hunters</Typography.Title>
              {(this.props.data.allHunters || []).map((user, i) => (
                <Card key={i}>
                  <BasicRow
                    key={i}
                    title={user.name}
                    subtitle={user.email}
                    number={user.couponCount}
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

export default graphql(QueryService.getHunters)(HunterPage);