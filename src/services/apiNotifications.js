import supabase from "./supabase";

export async function getNotifications() {
  const { data, error } = await supabase.from("notifications").select("*");

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
}
