import React from "react";
import "./Css/loading.css";
const Loading = () => {
  return (
    <div className="loadingDiv">
      <p className="loadingP">
        Please allow access to your location so we can access your weather{" "}
      </p>
      <img
        className="loadingImg"
        src="https://images.squarespace-cdn.com/content/v1/53e5e8b4e4b0f39bef5e536c/1547215224537-CKW4KQXKD9Y2D28HJCSW/ke17ZwdGBToddI8pDm48kLPswmMOqQZ9-Q6KHLjvbpZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVTQf06wQztZgT3ocQ_Nttc9pRe5bgfSgFgLIpbw9lM5m7cT0R_dexc_UL_zbpz6JQ/sun.gif?format=2500w"
      ></img>
    </div>
  );
};

export default Loading;
