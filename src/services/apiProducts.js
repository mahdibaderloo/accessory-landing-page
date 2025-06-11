import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error.message);
    return null;
  }

  console.log(data);
  return data;
}
