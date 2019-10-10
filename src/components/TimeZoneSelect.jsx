import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Select } from 'antd';

const GET_TIMEZONES = gql`
  query getTimezones($countryCode: String) {
    timezones(countryCode: $countryCode) {
      countryCode
      name
      abbreviation
      gmtOffset
    }
  }
`;

export default function TimeZoneSelect({ countryCode, ...rest }) {
  const {
    loading,
    data: { timezones }
  } = useQuery(GET_TIMEZONES, {
    variables: { countryCode },
    fetchPolicy: 'cache-first'
  });

  return (
    <Select
      style={{ display: 'block' }}
      placeholder="Timezone"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().includes(input.toLowerCase())
      }
      showSearch
      {...rest}
    >
      {!loading &&
        timezones.map(timezone => (
          <Select.Option
            key={timezone.name}
            value={timezone.name}
          >{`${timezone.name}`}</Select.Option>
        ))}
    </Select>
  );
}
