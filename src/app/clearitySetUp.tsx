"use client"; // Marks this file as a client-side component

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const ClaritySetup = () => {
  useEffect(() => {
    const projectId = "ptvel4whb1"; // Your Clarity project ID
    Clarity.init(projectId);
  }, []);

  return null; // No UI is needed
};

export default ClaritySetup;
