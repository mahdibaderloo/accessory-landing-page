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

export async function logOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
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

export async function updateFavorites(item, userId) {
  const { data: userData, error: fetchError } = await supabase
    .from("Users")
    .select("favorites")
    .eq("id", userId)
    .single();

  if (fetchError) {
    console.log(fetchError.message);
    return null;
  }

  let currentFavorites = [];
  try {
    const raw = userData?.favorites;

    if (typeof raw === "string") {
      currentFavorites = JSON.parse(raw);
    } else if (Array.isArray(raw)) {
      currentFavorites = raw;
    }
  } catch (err) {
    console.log(err);
    currentFavorites = [];
  }

  const updatedFavorites = [...currentFavorites, item];

  const { data, error } = await supabase
    .from("Users")
    .update({ favorites: updatedFavorites })
    .eq("id", userId);
  // .select();

  if (error) {
    console.log(error.message);
    return null;
  }
  return updatedFavorites;
}

export async function removeFavorite(itemId, userId) {
  const { data: userData, error: fetchError } = await supabase
    .from("Users")
    .select("favorites")
    .eq("id", userId)
    .single();

  if (fetchError) {
    console.error(fetchError.message);
    return null;
  }

  let currentFavorites = [];
  try {
    const raw = userData?.favorites;

    if (typeof raw === "string") {
      currentFavorites = JSON.parse(raw);
    } else if (Array.isArray(raw)) {
      currentFavorites = raw;
    }
  } catch (err) {
    console.log(err);
    currentFavorites = [];
  }

  const updatedFavorites = currentFavorites.filter(
    (favorite) => favorite.id !== itemId
  );

  const { data, error } = await supabase
    .from("Users")
    .update({ favorites: updatedFavorites })
    .eq("id", userId);

  if (error) {
    console.error(error.message);
    return null;
  }
  return updatedFavorites;
}

export async function removeAllFavorites(userId) {
  const { data, error } = await supabase
    .from("Users")
    .update({ favorites: [] })
    .eq("id", userId)
    .select("favorites");

  if (error) {
    console.error(error.message);
    return [];
  }

  return data?.[0]?.favorites ?? [];
}

export async function updateUsername(userId, name) {
  const { data, error } = await supabase
    .from("Users")
    .update({ name })
    .eq("id", userId)
    .select();

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data;
}

export async function updateEmail(userId, email) {
  const { data, error } = await supabase
    .from("Users")
    .update({ email })
    .eq("id", userId)
    .select();

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data;
}

export async function updateMobile(userId, mobile) {
  const { data, error } = await supabase
    .from("Users")
    .update({ mobile })
    .eq("id", userId)
    .select();

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data;
}

export async function updateAddress(userId, address) {
  const { data, error } = await supabase
    .from("Users")
    .update({ address })
    .eq("id", userId)
    .select();

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data;
}

export async function updateOrders(userId, order) {
  const { data: userData, error: ordersError } = await supabase
    .from("Users")
    .select("orders")
    .eq("id", userId)
    .single();

  if (ordersError) {
    console.log(ordersError.message);
    return null;
  }

  let currentOrders = [];
  try {
    const raw = userData?.orders;

    if (typeof raw === "string") {
      currentOrders = JSON.parse(raw);
    } else if (Array.isArray(raw)) {
      currentOrders = raw;
    }
  } catch (err) {
    console.log(err);
    currentOrders = [];
  }

  const updatedOrders = [...currentOrders, order];

  const { data, error } = await supabase
    .from("Users")
    .update({ orders: updatedOrders })
    .eq("id", userId)
    .select();

  if (error) {
    console.log(error.message);
    return null;
  }

  return updatedOrders;
}

export async function uploadImage(file) {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(fileName, file);

  if (error) {
    console.log(error.message);
    return null;
  }

  return data.path;
}

export async function storeImage(path, userId) {
  const { data } = supabase.storage.from("avatars").getPublicUrl(path);

  const publicUrl = data.publicUrl;

  const { error: urlError } = await supabase
    .from("Users")
    .update({ image: publicUrl })
    .eq("id", userId);

  if (urlError) {
    throw new Error(urlError.message);
  }
}
