import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/admin/Header";

const PrivateRouter = () => {
  const [adminLogin, setAdminLogin] = useState(() => {
    const adminLocal = JSON.parse(localStorage.getItem("adminLogin")) || false;
    return adminLocal;
  });

  return (
    <>
      {adminLogin ? (
        <>
          <Header
            adminLogin={adminLogin}
            setAdminLogin={setAdminLogin}
          ></Header>
          <div className="mt-[56px]">
            <Outlet></Outlet>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRouter;
