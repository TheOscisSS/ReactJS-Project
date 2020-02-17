import React from "react";

const Version = () => {
  const projectVersion = process.env.REACT_APP_PROJECT_VERSION;

  return (
    <div>
      {process.env.NODE_ENV === "development" && (
        <div>Текущая версия проекта {projectVersion}</div>
      )}
    </div>
  );
};

export default Version;
