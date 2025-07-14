import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "../../services/apiUsers";
import toast from "react-hot-toast";

const initialState = {
  activeSection: "profile",
  user: null,
  status: "idle",
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("Account created successfully");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "Failed";
        toast.error(action.payload);
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        toast.success("You're successfully logged in");
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "Failed";
        toast.error(action.payload);
      });
  },
});

export const { setActiveSection, setUser } = profileSlice.actions;
export default profileSlice.reducer;
