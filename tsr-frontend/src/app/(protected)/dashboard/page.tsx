import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">
        Welcome to your Dashboard
      </h1>
      <p className="mt-4 text-zinc-400">
        This is your central hub for managing all your activities. Use the
        sidebar to navigate through different sections and access your tools.
      </p>
    </div>
  );
};

export default DashboardPage;
