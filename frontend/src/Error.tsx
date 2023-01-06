import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const { response } = useRouteError() as AxiosError;

  return (
    <p>
      Error {response?.status}: {response?.data}
    </p>
  );
}
