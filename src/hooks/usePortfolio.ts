// hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { PortfolioService } from '@/services/portfolio';
import { PortfolioData } from '@/types/domain';

/**
 * Custom hook for portfolio data management
 * Follows Single Responsibility Principle - only handles portfolio data state
 */
export const usePortfolio = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);
        const portfolioData = await PortfolioService.getAllPortfolioData();
        setData(portfolioData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const portfolioData = await PortfolioService.getAllPortfolioData();
      setData(portfolioData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reload portfolio data');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
};