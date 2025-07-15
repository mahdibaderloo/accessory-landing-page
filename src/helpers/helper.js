import { getUser } from "../services/apiUsers";

export async function fetchUser(user) {
  if (!user?.id && !user?.user?.id) return;

  const userId = user.id || user.user.id;

  const result = await getUser(userId);
  if (result) return result;
}
