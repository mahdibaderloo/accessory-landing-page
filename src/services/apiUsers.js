import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("Users").select("*");

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
}

export async function UpdateUser(user) {
  const { data, error } = await supabase
    .from("Users")
    .update({ other_column: "otherValue" })
    .eq("id", "ffc9d896-c04e-4300-aa24-190fd66837b2")
    .select();

  if (error) {
    console.log(error.message);
    return null;
  }

  console.log(data);
  return data;
}
