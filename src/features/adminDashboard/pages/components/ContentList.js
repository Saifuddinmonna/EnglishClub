import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllContents } from '../../../../services/apiService';
import ContentTable from './ContentTable';
import ContentCard from './ContentCard';

const ContentList = ({ viewMode, search, onEdit, onShowForm }) => {
  // Fetch content data
  const {
    data: contents = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['contents', search],
    queryFn: () => getAllContents(search ? { search } : {}),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-500">{error?.message || 'Failed to fetch content'}</div>;

  if (viewMode === 'table') {
    return <ContentTable contents={contents} onEdit={onEdit} onShowForm={onShowForm} refetch={refetch} />;
  }
  return <ContentCard contents={contents} onEdit={onEdit} onShowForm={onShowForm} refetch={refetch} />;
};

export default ContentList;
