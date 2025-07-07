import supabase from "./supabase";

export async function signUpUser(name, email, password) {
  let { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    console.log(signUpError.message);
    return null;
  }

  const userId = data?.user.id;

  if (userId) {
    const { data: user, insertError } = await supabase
      .from("Users")
      .insert([{ id: userId, name, email }])
      .select();

    if (insertError) {
      console.log(insertError.message);
      return null;
    }

    return user;
  }

  return null;
}

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
