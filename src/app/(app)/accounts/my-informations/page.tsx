import React from "react";
import { getDefaultUserDetails } from "@/actions/user.action";
import AccountDetails from "./account-details";
export default async function page() {
  const userDetails = await getDefaultUserDetails();

  return (
    <div>
      <AccountDetails userDetails={userDetails} />
    </div>
  );
}
