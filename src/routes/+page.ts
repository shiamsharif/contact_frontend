import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("http://localhost:8000/contacts/");
  const contacts = await response.json();

  return {
    contacts,
  };
};
