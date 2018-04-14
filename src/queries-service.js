import gql from 'graphql-tag';

const QueryService = {
  getHunters: gql`
    query allHunters{
      allHunters {
        id
        name
        email
        provider
        couponCount
      }
  }`,
  login: gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password)
  }
  `,
  getMakers: gql`
  query allMakers{
    allMakers {
      id
      name
      email
    }
  }
  `,
  getMe: gql`
  query getMe{
    me {
      name
      email
      id
      role
    }
  }
  `
}

export default QueryService;
