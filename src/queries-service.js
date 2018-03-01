import gql from 'graphql-tag';

const QueryService = {
  getHunters: gql`
    query allHunters{
      allHunters {
        _id
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
  `
}

export default QueryService;
