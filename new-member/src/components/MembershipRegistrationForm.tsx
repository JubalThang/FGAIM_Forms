import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { MemberForm } from "./MemberForm";
import type {
  Address,
  Member,
  MembershipForm,
  OtherName,
} from "../types/membership";
import { Printer, UserPlus, Users } from "lucide-react";
import fga_logo from "../assets/fga-logo.jpg";
import { MembershipCommitment } from "./MembershipCommitment";
// import { GoogleSheetsConfig } from "./GoogleSheetsConfig";
// import { useGoogleSheets } from "@/hooks/useGoogleSheets";

const createEmptyOtherName = (): OtherName => ({
  firstName: "",
  middleName: "",
  lastName: "",
});

const createEmptyAddress = (): Address => ({
  street: "",
  city: "",
  state: "",
  zipCode: "",
});

const createEmptyMember = (isAssignee = false): Member => ({
  id: crypto.randomUUID(),
  firstName: "",
  middleName: "",
  lastName: "",
  otherName: createEmptyOtherName(),
  hasOtherName: false,
  gender: "",
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
  address: createEmptyAddress(),
  maritalStatus: "",
  spiritualLife: [],
  relationship: isAssignee ? "" : "",
});

export const MembershipRegistrationForm = () => {
  const [formData, setFormData] = useState<MembershipForm>({
    assignee: createEmptyMember(true),
    additionalMembers: [],
    membershipCommitment: false,
    signatureDate: new Date().toISOString().split("T")[0],
  });

  const showRelationship = formData.additionalMembers.length > 0;

  //   const { config, setConfig, submitToGoogleSheets, isSubmitting } = useGoogleSheets();

  const handleAssigneeChange = (assignee: Omit<Member, "relationship">) => {
    setFormData((prev) => ({
      ...prev,
      assignee: { ...assignee, relationship: "" },
    }));
  };

  const handleMemberChange = (index: number, member: Member) => {
    setFormData((prev) => ({
      ...prev,
      additionalMembers: prev.additionalMembers.map((m, i) =>
        i === index ? member : m,
      ),
    }));
  };

  const addMember = () => {
    setFormData((prev) => ({
      ...prev,
      additionalMembers: [...prev.additionalMembers, createEmptyMember()],
    }));
  };

  const removeMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      additionalMembers: prev.additionalMembers.filter((_, i) => i !== index),
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // const success = await submitToGoogleSheets(formData);
    // if (success) {
    //   // Reset form after successful submission
    //   setFormData({
    //     assignee: createEmptyMember(true),
    //     additionalMembers: [],
    //   });
    // }
  };

  return (
    <div className="min-h-screen py-4 px-4 print:py-2 print:px-2 print:flex print:flex-col">
      <div className="print-container max-w-4xl  mx-auto print:min-w-full print:flex-1 print:flex print:flex-col">
        {/* Letterhead Header */}
        <div className="bg-card border border-border rounded-lg p-4 mb-4 print:p-3 print:mb-2 print:border-primary/20">
          <div className="flex items-center gap-4 print:gap-3">
            {/* Logo Container */}
            <div className="shrink-0">
              <div className="w-25 h-25 rounded-full border-2 border-primary/5 bg-primary/5 flex items-center justify-center overflow-hidden print:w-16 print:h-16">
                {/* fgaim logo */}
                <img
                  src={fga_logo}
                  alt="Organization Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Organization Info */}
            <div className="flex-1">
              <div className=" text-center ">
                <h1 className="text-xl font-bold text-primary tracking-tight print:text-lg">
                  Full Gospel Assembly International Ministries
                </h1>
                <p className="text-sm text-muted-foreground print:text-xs">
                  9100 E 151st St S, Bixby, OK 74008
                </p>
                <p className="text-sm text-muted-foreground print:text-xs">
                  Phone: (918) 557-5153 | Email: contact@fgaim.church
                </p>
              </div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mt-3 pt-3 border-t border-border text-center print:mt-2 print:pt-2">
            <h2 className="text-lg font-semibold text-primary print:text-base">
              Membership Registration Form
            </h2>
            <p className="text-muted-foreground text-xs print:text-[10px]">
              Please complete all required fields marked with an asterisk (*)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 print:hidden">
          {/* Primary Assignee Section */}
          <Card className="form-card shadow-md border-border print:shadow-none">
            <CardHeader className="bg-primary/5 border-b border-border rounded-t-lg py-2 print:py-1">
              <CardTitle className="text-base font-semibold text-primary flex items-center gap-2 print:text-sm">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold print:w-4 print:h-4 print:text-[10px]">
                  1
                </span>
                Primary Assignee Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 print:pt-2 print:pb-2">
              <MemberForm
                member={formData.assignee}
                onChange={(member) =>
                  handleAssigneeChange(member as Omit<Member, "relationship">)
                }
              />
            </CardContent>
          </Card>

          {/* Additional Members Section */}
          <Card className="form-card shadow-md border-border print:shadow-none">
            <CardHeader className="bg-primary/5 border-b border-border rounded-t-lg py-2 print:py-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-primary flex items-center gap-2 print:text-sm">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold print:w-4 print:h-4 print:text-[10px]">
                    2
                  </span>
                  Additional Members
                  {formData.additionalMembers.length > 0 && (
                    <span className="ml-2 text-xs font-normal text-muted-foreground print:text-[10px]">
                      ({formData.additionalMembers.length} member
                      {formData.additionalMembers.length !== 1 ? "s" : ""})
                    </span>
                  )}
                </CardTitle>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addMember}
                  className="no-print border-primary text-primary hover:bg-primary hover:text-primary-foreground h-7 text-xs"
                >
                  <UserPlus className="w-3 h-3 mr-1" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-4 print:pt-2 print:pb-2">
              {formData.additionalMembers.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground print:py-2">
                  <Users className="w-10 h-10 mx-auto mb-2 opacity-30 print:w-6 print:h-6" />
                  <p className="text-sm print:text-xs">
                    No additional members added yet.
                  </p>
                  <p className="text-xs print:hidden">
                    Click "Add Member" to register family members or dependents.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 print:space-y-2">
                  {formData.additionalMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className="p-3 bg-form-section rounded-lg border border-border print:p-2 print:bg-transparent"
                    >
                      <div className="mb-2 print:mb-1">
                        <span className="text-xs font-semibold text-primary print:text-[10px]">
                          Member #{index + 1}
                        </span>
                      </div>
                      <MemberForm
                        member={member}
                        onChange={(m) => handleMemberChange(index, m as Member)}
                        onRemove={() => removeMember(index)}
                        showRelationship
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Membership Commitment Section */}
          <Card className="form-card shadow-md border-border print:shadow-none">
            <CardHeader className="bg-primary/5 border-b border-border rounded-t-lg py-2 print:py-1">
              <CardTitle className="text-base font-semibold text-primary flex items-center gap-2 print:text-sm">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold print:w-4 print:h-4 print:text-[10px]">
                  3
                </span>
                Membership Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 print:pt-2 print:pb-2">
              <MembershipCommitment
                isChecked={formData.membershipCommitment}
                signatureDate={formData.signatureDate}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    membershipCommitment: checked,
                  }))
                }
                onDateChange={(date) =>
                  setFormData((prev) => ({ ...prev, signatureDate: date }))
                }
              />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-between items-center no-print">
            {/* <GoogleSheetsConfig
              apiKey={config.apiKey}
              spreadsheetId={config.spreadsheetId}
              sheetName={config.sheetName}
              onSave={setConfig}
            /> */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrint}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print Form
              </Button>
              {/* <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button> */}
            </div>
          </div>
        </form>

        {/* Print Spreadsheet (hidden on screen, visible in print) */}
        <div className="hidden print:block mt-4">
          <h3 className="text-sm font-semibold text-primary text-center mb-2">
            Assignees
          </h3>
          <table className="w-full border-collapse text-[10px]">
            <thead>
              <tr>
                <th className="border px-2 py-1 text-left">Name</th>
                <th className="border px-2 py-1 text-left">Gender</th>
                <th className="border px-2 py-1 text-left">Marital Status</th>
                {showRelationship && (
                  <th className="border px-2 py-1 text-left">Relationship</th>
                )}
              </tr>
            </thead>
            <tbody>
              {[formData.assignee, ...formData.additionalMembers].map((m) => (
                <tr key={m.id}>
                  <td className="border px-2 py-1">
                    {`${m.firstName}${m.middleName ? " " + m.middleName : ""} ${m.lastName}`
                      .replace(/\s+/g, " ")
                      .trim()}
                  </td>
                  <td className="border px-2 py-1">{m.gender || ""}</td>
                  <td className="border px-2 py-1">{m.maritalStatus || ""}</td>
                  {showRelationship && (
                    <td className="border px-2 py-1">{m.relationship || ""}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer for print */}
        <div className="hidden print:flex justify-between mt-4 pb-4 border-b border-border text-center text-[10px] text-muted-foreground print:mt-auto">
          <p>Signature: _________________________</p>
          <p>Registration Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
