import React from "react";

const Page = ({ params }: { params: { id: any } }) => {
  return (
    <div className="flex flex-col items-center justify-between py-10 text-white">
      Profile Page of{" "}
      <span className="text-lg bg-yellow-400 ">{params.id}</span>
    </div>
  );
};

export default Page;
