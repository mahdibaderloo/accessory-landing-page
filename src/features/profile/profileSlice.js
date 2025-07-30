import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  removeAllFavorites,
  removeFavorite,
  signUpUser,
  updateFavorites,
  updateUsername,
} from "../../services/apiUsers";
import toast from "react-hot-toast";

const initialState = {
  activeSection: "profile",
  user: null,
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
        state.favorites = action.payload;
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
      });
  },
});

export const { setActiveSection, setUser, setIsAuthenticated, setFavorites } =
  profileSlice.actions;
export default profileSlice.reducer;
