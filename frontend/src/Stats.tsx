import { useLoaderData } from "react-router-dom";
import type { AxiosResponse } from "axios";
import { format, parseISO } from "date-fns";
import type { Application } from "../../types";

export default function Stats() {
  const { data } = useLoaderData() as AxiosResponse<Application>;

  return (
    <div>
      <p>Shortcode: {data.shortCode}</p>
      <p>Created: {format(parseISO(data.dateCreated), "Y-MM-dd h:mm:ss a")}</p>
      <p>
        Last Accessed:{" "}
        {data.dateLastAccessed &&
          format(parseISO(data.dateLastAccessed), "Y-MM-dd h:mm:ss a")}
      </p>
      <p>Count: {data.count}</p>
    </div>
  );
}
