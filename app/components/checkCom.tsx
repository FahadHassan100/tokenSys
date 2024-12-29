"use client";
import { getUserByEmail } from "@/services/user";
import React, { useEffect, useState } from "react";

const CheckCom = () => {
  const [dataCheck, setDataCheck] = useState<any>();

  useEffect(() => {
    const checkClient = async () => {
      // Check if email exists
      const checkUser: any = await getUserByEmail("fahad@justicetrading.com");
      setDataCheck(checkUser);
    };

    checkClient();
  }, []);

  return (
    <div>
      This is Client Name:{" "}
      {dataCheck && dataCheck.First_Name + " " + dataCheck.Last_Name}
    </div>
  );
};

export default CheckCom;
