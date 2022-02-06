import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
      const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
      const prevTitle = document.title;
      document.title = `${prevTitle} | ${capitalizeFirstLetter(title)}`;
      return () => {
        document.title = prevTitle;
      }
    })
  }
  
export default useTitle;
