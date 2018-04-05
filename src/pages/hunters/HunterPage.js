import React from 'react';
import { graphql } from 'react-apollo';
import { Card, Typography, RowHunter} from 'coupon-components';

import QueryService from '../../queries-service';
import style from './HunterPage.scss';

class HunterPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    if(!this.props.data.loading){
      return (
          <div>
            <Card title="Hunters" className={style.hunterCard}>
                <Typography.Title>Listado de Hunters</Typography.Title>
                {(this.props.data.allHunters || []).map((user, i) => (
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
      );
    }else{
      return <div>Loading...</div>;
    }

  }

}

export default graphql(QueryService.getHunters)(HunterPage);