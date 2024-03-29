import { Sidebar } from "flowbite-react";
import { HiUser,HiUserGroup, HiArrowSmRight, HiAcademicCap } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  // const { currentUser } = useSelector((state) => state.user);
  const state = useSelector((state) => state);
  console.log(state);
  const currentUser = state.user.currentUser.payload.data.user
  console.log(currentUser)
  const handleSignout = () => {
    dispatch(signoutSuccess());
  };

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.role}
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.role === 'ADMIN' && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item icon={HiUserGroup} labelColor="dark">
                Users
              </Sidebar.Item>
            </Link>
          )}
           {/* {currentUser.data.user.role === 'ADMIN' && ( */}
            <Link to="/dashboard?tab=students">
              <Sidebar.Item icon={HiAcademicCap} labelColor="dark">
                Students
              </Sidebar.Item>
            </Link>
          {/* )} */}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
