import gql from 'graphql-tag';

const QueryService = {
  getHunters: gql`
    query allMakers{
      allMakers {
        _id
        name
        email
        provider
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
      _id
      name
      email
    }
  }`
}

export default QueryService;
