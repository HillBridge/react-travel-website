import React from 'react';
import { useParams } from 'react-router-dom';

type MatchParams = {
  id: string;
  other: string;
};

export const Detail: React.FC = () => {
  const params = useParams<MatchParams>();
  return <div>Detail, id: {params.id}</div>;
};
