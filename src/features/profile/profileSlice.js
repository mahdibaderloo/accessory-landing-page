import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getImageUrl,
  loginUser,
  logOutUser,
  removeAllFavorites,
  removeFavorite,
  signUpUser,
  updateAddress,
  updateEmail,
  updateFavorites,
  updateMobile,
  updateOrders,
  updateUsername,
  uploadImage,
} from "../../services/apiUsers";
import toast from "react-hot-toast";
import supabase from "../../services/supabase";

const initialState = {
  activeSection: "profile",
  user: null,
  notifications: [],
  favorites: [],
  status: "idle",
  isAuthenticated: false,
  error: null,
};

export const signUp = createAsyncThunk(
  "auth/signUpUser",
  async function ({ name, email, password, navigate }, { rejectWithValue }) {
    try {
      const user = await signUpUser(name, email, password);

      if (!user) {
        return rejectWithValue("Signup filed. Please try again");
      }
      navigate("/profile");
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/loginUser",
  async function ({ email, password }, { rejectWithValue }) {
    try {
      const user = await loginUser(email, password);

      if (!user) {
        return rejectWithValue("Login filed. Please try again");
      }
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOutUser",
  async function (_, { rejectWithValue }) {
    try {
      await logOutUser();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "favorites/addToFavorites",
  async function ({ item, id }, { rejectWithValue }) {
    try {
      const favoriteData = await updateFavorites(item, id);

      if (!favoriteData) {
        return rejectWithValue("There was a problem. Try again");
      }
      return favoriteData[0];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "favorites/removeFromFavorites",
  async function ({ itemId, userId }, { rejectWithValue }) {
    try {
      const updatedFavorites = await removeFavorite(itemId, userId);

      if (!updatedFavorites) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updatedFavorites;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const clearFavorites = createAsyncThunk(
  "favorites/removeAllFavorites",
  async function (userId, { rejectWithValue }) {
    try {
      const updatedFavorites = await removeAllFavorites(userId);

      if (!updatedFavorites) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updatedFavorites;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const changeName = createAsyncThunk(
  "profile/changeName",
  async function ({ userId, name }, { rejectWithValue }) {
    try {
      const updatedName = await updateUsername(userId, name);

      if (!updatedName) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updatedName;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const changeEmail = createAsyncThunk(
  "profile/changeEmail",
  async function ({ userId, email }, { rejectWithValue }) {
    try {
      const updateUserEmail = await updateEmail(userId, email);

      if (!updateUserEmail) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updateUserEmail;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const changeMobile = createAsyncThunk(
  "profile/changeMobile",
  async function ({ userId, mobile }, { rejectWithValue }) {
    try {
      const updateUserMobile = await updateMobile(userId, mobile);

      if (!updateUserMobile) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updateUserMobile;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const changeAddress = createAsyncThunk(
  "profile/changeAddress",
  async function ({ userId, address }, { rejectWithValue }) {
    try {
      const updateUserAddress = await updateAddress(userId, address);

      if (!updateUserAddress) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updateUserAddress;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addToOrders = createAsyncThunk(
  "profile/addToOrders",
  async function ({ userId, order }, { rejectWithValue }) {
    try {
      const updateUserOrders = await updateOrders(userId, order);

      if (!updateUserOrders) {
        return rejectWithValue("Failed to remove favorite item.");
      }

      return updateUserOrders;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const uploadUserAvatar = createAsyncThunk(
  "profile/uploadAvatar",
  async function ({ file, userId }, { rejectWithValue }) {
    try {
      const uploadedPath = await uploadImage(file);
      if (!uploadedPath) {
        return rejectWithValue("Upload failed");
      }

      const { data: storedImage } = supabase.storage
        .from("avatars")
        .getPublicUrl(uploadedPath);

      const publicUrl = storedImage.publicUrl;

      const { error: urlError } = await supabase
        .from("users")
        .update({ image: publicUrl })
        .eq("id", userId);

      if (urlError) {
        return rejectWithValue(urlError.message);
      }

      return publicUrl;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setNotifications(state, action) {
      state.notifications = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        toast.success("Account created successfully");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "Failed";
        state.isAuthenticated = false;
        toast.error(action.payload);
      })

      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        toast.success("You're successfully logged in");
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "Failed";
        state.isAuthenticated = false;
        toast.error(action.payload);
      })

      .addCase(logOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.isAuthenticated = false;
        state.notifications = [];
        state.favorites = [];
        toast.success("You're successfully logged out");
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "Failed";
        state.isAuthenticated = true;
        toast.error(action.payload);
      })

      .addCase(addToFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favorites = action.payload;
        toast.success("Product successfully added to favorites");
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.status = "Failed";
        toast.error(action.payload);
      })

      .addCase(removeFromFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favorites = action.payload;
        toast.success("Product removed from favorites");
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      .addCase(clearFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearFavorites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favorites = Array.isArray(action.payload) ? action.payload : [];
        toast.success("Favorites cleared");
      })
      .addCase(clearFavorites.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      .addCase(changeName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Your name updated");
      })
      .addCase(changeName.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      .addCase(changeEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Your email updated");
      })
      .addCase(changeEmail.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      .addCase(changeMobile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeMobile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Your mobile number updated");
      })
      .addCase(changeMobile.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      .addCase(changeAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Your Address updated");
      })
      .addCase(changeAddress.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      });
  },
});

export const {
  setActiveSection,
  setUser,
  setIsAuthenticated,
  setFavorites,
  setNotifications,
} = profileSlice.actions;
export default profileSlice.reducer;
