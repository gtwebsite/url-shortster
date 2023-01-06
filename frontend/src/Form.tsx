import { SyntheticEvent, useState } from "react";
import axios from "axios";
import type { Application } from "../../types";

export default function Form() {
  const [shortCode, setShortCode] = useState("");

  const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setShortCode(e.currentTarget.value);
  };

  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post<Application[]>("/api/submit", {
        shortCode,
      });

      setShortCode("");

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} method="post">
        <fieldset>
          <input
            name="shortcode"
            title="shortcode"
            value={shortCode}
            onChange={handleOnChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
