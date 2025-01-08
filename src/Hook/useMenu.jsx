import { useEffect, useState } from "react";

const useMenu = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("batches.json")
      .then((res) => res.json())
      .then((data) => {
        setBatches(data);
        setLoading(false);
      });
  }, []);

  return [batches, loading];
};

export default useMenu;
