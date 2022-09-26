import { useEffect, useState } from "react";
import { getCountries } from './../api/utils/Country';
import { userInfo } from './../utils/auth';


const useCountries = () => {
    const [countries, setCountries] = useState([]);
     const { token } = userInfo();
    useEffect(() => {
      getCountries(token).then((res) => {
        setCountries(res.data.countries);
      });
    }, []);

  return countries;
};

export default useCountries;
