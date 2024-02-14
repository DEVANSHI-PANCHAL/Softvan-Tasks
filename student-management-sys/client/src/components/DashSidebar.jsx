import { Sidebar } from "flowbite-react";
import { HiUser,HiUserGroup, HiArrowSmRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const { currentUser } = useSelector((state) => state.user);

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
              label={currentUser.data.user.role=="ADMIN"?"Admin":"user"}
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.data.user.role === 'ADMIN' && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item icon={HiUserGroup} labelColor="dark">
                Users
              </Sidebar.Item>
            </Link>
          )}
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
