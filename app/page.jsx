"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import React from "react";
import Main from "@/components/Main";

function page() {
  const [loading] = useState(true);

  return loading ? loading : <Main />;
}

export default page;
