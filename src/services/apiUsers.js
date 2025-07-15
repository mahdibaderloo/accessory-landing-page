import toast from "react-hot-toast";
import supabase from "./supabase";

export async function signUpUser(name, email, password) {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    toast.error(signUpError.message);
    return null;
  }

  const userId = data?.user.id;

  if (userId) {
    const { data: user, insertError } = await supabase
      .from("Users")
      .insert([{ id: userId, name, email }])
      .select();

    if (insertError) {
      toast.error(insertError.message);
      return null;
    }

    toast.success("Your account successfully created");
    return user?.[0];
  }

  return null;
}

export async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data.user;
}

export async function getUser(id) {
  const user = JSON.parse(
    localStorage.getItem("sb-ywipdwyvwyrqejrfdahl-auth-token")
  );

  const { data, error } = await supabase.from("Users").select("*").eq("id", id);

  if (error) {
    toast.error(error.message);
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

  return data;
}

export async function updateFavorites({ item, id }) {
  const { data, error } = await supabase
    .from("Users")
    .insert([{ favorites: item }])
    .eq("id", id)
    .select();

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
}
