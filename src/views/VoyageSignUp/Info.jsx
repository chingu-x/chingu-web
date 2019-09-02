import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

export default function Info() {
  return (
    <Card bordered={false}>
      <Title>Sign Up For a Voyage</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
      <Link to="/voyageSignUp/path">
        <Button type="primary">Sign Up for the September Voyage</Button>
      </Link>
    </Card>
  );
}
