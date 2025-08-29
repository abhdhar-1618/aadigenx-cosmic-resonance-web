import React from 'react';
import { Navigate } from "react-router-dom";

const AadianPage = () => {
  // Redirect straight to the landing section instead of replaying intro
  return <Navigate to="/#home" replace />;
};

export default AadianPage;