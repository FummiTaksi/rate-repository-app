import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const response = useQuery(GET_REPOSITORIES);
  return { repositories: response.data.repositories , loading: response.loading};
};

export default useRepositories;