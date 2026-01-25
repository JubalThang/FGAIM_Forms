import { useState } from "react";
import "./App.css";
import type { Member, MembershipForm, OtherName } from "./types/membership";
import { MemberForm } from "./components/MemberForm";
import { MembershipRegistrationForm } from "./components/MembershipRegistrationForm";

const createEmptyOtherName = (): OtherName => ({
  firstName: "",
  middleName: "",
  lastName: "",
});

const createEmptyMember = (isAssignee = false): Member => ({
  id: crypto.randomUUID(),
  firstName: "",
  middleName: "",
  lastName: "",
  otherName: createEmptyOtherName(),
  hasOtherName: false,
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
  address: "",
  maritalStatus: "",
  spiritualLife: [],
  relationship: isAssignee ? "" : "",
});


function App() {
   return <MembershipRegistrationForm />
}

export default App;
