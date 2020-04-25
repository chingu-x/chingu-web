import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Select } from 'antd';

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      code
      name
    }
  }
`;

export default function CountrySelect({ ...rest }) {
  const { loading, data = {} } = useQuery(GET_COUNTRIES, {
    fetchPolicy: 'cache-first'
  });

  const { countries } = data;

  return (
    <Select
      style={{ display: 'block' }}
      placeholder="Country"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().includes(input.toLowerCase())
      }
      showSearch
      {...rest}
    >
      {!loading &&
        countries.map(country => (
          <Select.Option key={country.code} value={country.code}>
            {country.name}
          </Select.Option>
        ))}
    </Select>
  );
}
