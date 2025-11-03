import React from "react";

const VersionFooter: React.FC = () => {
  const version = import.meta.env.VITE_APP_VERSION || "dev";
  return (
    <footer style={{ textAlign: "center", marginTop: "2rem", opacity: 0.7 }}>
      <small>Version: {version}</small>
    </footer>
  );
};

export default VersionFooter;
