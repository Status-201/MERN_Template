import React, { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("../components/Dashboard"));

const Home = () => {
  console.log("home");
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default Home;
