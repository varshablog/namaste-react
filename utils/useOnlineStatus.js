import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    // console.log("inside useOnlineStatus")
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
// console.log("inside useEffect");
      window.addEventListener("offline", () => {
        console.log("inside useEffect false");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
        console.log("inside useEffect true");
      setOnlineStatus(true);
    });
  }, []);

   return onlineStatus;
};

export default useOnlineStatus;
