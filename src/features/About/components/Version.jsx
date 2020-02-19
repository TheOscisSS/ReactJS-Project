import React, { Fragment } from "react";

const Version = () => {
  const projectVersion = process.env.REACT_APP_VERSION;

  return (
    <Fragment>
      {process.env.NODE_ENV === "development" && (
        <div>Текущая версия проекта {projectVersion}</div>
      )}
    </Fragment>
  );
};

export default Version;
