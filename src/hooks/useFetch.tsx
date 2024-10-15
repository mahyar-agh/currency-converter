import { useEffect, useState } from "react";

const useFetch = <T,>(url: string): [boolean, T | undefined, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function getConversionRate() {
      try {
        setErrorMessage("");
        setIsLoading(true);
        const res = await fetch(url);

        if (!res.ok)
          throw new Error("Somthing went wrong when trying to get data!");

        const data: T = await res.json();

        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) setErrorMessage(error.message);
        else {
          setErrorMessage("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }
    getConversionRate();
  }, [url]);

  return [isLoading, data, errorMessage];
};

export default useFetch;
