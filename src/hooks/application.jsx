import React, { useMemo } from 'react';
import { useUser } from '../contexts/user';

export default function useApplication({ statusRequired } = {}) {
  const { data: userData = {}, loading } = useUser();

  const route = useMemo(() => {
    const { status } = userData.application || {};
    console.log(loading, statusRequired, status);

    if (loading) {
      return null;
    }

    if (statusRequired !== status) {
      switch (status) {
        case 'PENDING_PAYMENT':
          return '/payment';
        case 'PENDING_REVIEW':
          return '/profile';
        default:
          return '/apply';
      }
    }

    return '/apply';
  }, [userData, statusRequired, loading]);

  return route;
}
