import { useLoaderData } from "react-router-dom";
import type { AxiosResponse } from "axios";
import type { Application } from "../../types";

export default function Shortcode() {
  const { data } = useLoaderData() as AxiosResponse<Application>;

  return (
    <div>
      <p>Shortcode: {data.shortCode}</p>
      <p>Created: {data.dateCreated}</p>
    </div>
  );
}
