import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
}

export async function getCategories() {
  const { data, error } = await supabase.from("products").select("category");

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
}
