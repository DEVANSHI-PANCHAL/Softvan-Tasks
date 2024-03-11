import { getUsers } from '../service/user.api';

export const useFetchUsers = (
  page,
  setPage,
  userDetails,
  setUserDetails,
  setLoading,
  setError
) => {
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await getUsers(page);
        setUserDetails((prevUsers) => [...prevUsers, ...response.user]);
      } catch (error) {
        console.error("Error fetching users:", error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

  }, [page, setUserDetails, setLoading, setError]);
};

// useIntersectionObserver.js
import { useEffect } from 'react';

export const useIntersectionObserver = (loaderRef, setPage) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };

  }, [loaderRef, setPage]);
};
