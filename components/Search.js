import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useAuthContext } from '../hooks/useAuthContext';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {dispatch} =useAuthContext();

  const onChangeSearch = query => setSearchQuery(query);
  const onPress = () => {
       console.log(searchQuery);
    dispatch({type: 'Search', payload: searchQuery.toLowerCase()});
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={onPress}
    />
  );
};

export default Search;