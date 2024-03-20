import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../service/user.api";
import { useEffect, useState } from "react";

export const useFetchUsers = (
  page,
  setPage,
  userDetails,
  setUserDetails,
  setLoading,
  setError
) => {
  const currentUser = useSelector(
    (state) => state.user.currentUser.payload.data.message
  );
  console.log("CURR", currentUser);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [error, setErrorState] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      console.log("this")
      try {
        const response = await getUsers(currentUser, dispatch);
        setUserDetails((prevUsers) => [...prevUsers, ...response.user]);
        setData(response.user);

      } catch (error) {
        console.error("Error fetching users:", error.message);
        setError(error);
        setErrorState(error);

      } finally {
        setLoading(false);
        setLoadingState(false);

      }
    };

    fetchUsers();
  }, [page, setUserDetails, setLoading, setError, dispatch, currentUser]);
  return {data, loading, error}
};

// useIntersectionObserver.js

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

