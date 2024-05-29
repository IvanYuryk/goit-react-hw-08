import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts } from "../contacts/operations.js";
import { addContact } from "../contacts/operations.js";
import { deleteContact } from "../contacts/operations.js";
import { updateContact } from "../contacts/operations.js";
import { logout } from "../auth/operations.js";
import toast from "react-hot-toast";

const initialState = {
  items: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        toast("Contact added.");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        toast("Contact deleted.");
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        toast("Contact updated.");
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending,
          logout.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected,
          logout.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
