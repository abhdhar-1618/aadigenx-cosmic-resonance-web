 import React from 'react';
-
-const AadianPage = () => {
-  return (
-    <div className="w-full h-screen">
-      <iframe 
-        src="https://aadigenix.com/" 
-        className="w-full h-full border-0"
-        title="AadiGenix"
-        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
-        allowFullScreen
-      />
-    </div>
-  );
-};
-
-export default AadianPage;
+import { Navigate } from "react-router-dom";
+
+const AadianPage = () => {
+  // Redirect straight to the landing section instead of replaying intro
+  return <Navigate to="/#home" replace />;
+};
+
+export default AadianPage;
