import React, { useState, useCallback } from 'react';

export const useFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fetcher = useCallback(async (executeRequest, args) => {
    setLoading(true);

    try {
      const result = await executeRequest(...args);

      if (result) {
        setResult(result);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setResult]);

  return {
    fetcher,
    loading,
    result
  };
};
