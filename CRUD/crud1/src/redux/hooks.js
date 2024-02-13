import { useDispatch, useSelector } from "react-redux";
import { store } from "./store.js";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
