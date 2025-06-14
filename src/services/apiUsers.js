import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("Users").select("*");

  if (error) {
    console.log(error.message);
    return null;
  }

  console.log(data);
  return data;
}
