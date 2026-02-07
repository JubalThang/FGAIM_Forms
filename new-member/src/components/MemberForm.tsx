import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Trash2 } from "lucide-react";
import {
  RELATIONSHIP_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  SPIRITUAL_LIFE_OPTIONS,
  GENDER_OPTIONS,
  US_STATES,
} from "../types/membership";
import type { Address, Member, OtherName } from "../types/membership";

interface MemberFormProps {
  member: Member | Omit<Member, "relationship">;
  onChange: (member: Member | Omit<Member, "relationship">) => void;
  onRemove?: () => void;
  showRelationship?: boolean;
  index?: number;
}

export const MemberForm = ({
  member,
  onChange,
  onRemove,
  showRelationship = false,
  index,
}: MemberFormProps) => {
  const handleChange = (
    field: keyof Member,
    value: string | boolean | string[] | OtherName | Address,
  ) => {
    const updatedMember = { ...member, [field]: value };

    // If relationship is set to Spouse, automatically set marital status to Married
    if (field === "relationship" && value === "Spouse") {
      updatedMember.maritalStatus = "Married";
    }

    onChange(updatedMember);
  };

  const isSpouse =
    showRelationship && (member as Member).relationship === "Spouse";

  const handleOtherNameChange = (field: keyof OtherName, value: string) => {
    onChange({
      ...member,
      otherName: { ...member.otherName, [field]: value },
    });
  };

  const handleAddressChange = (field: keyof Address, value: string) => {
    onChange({
      ...member,
      address: { ...member.address, [field]: value },
    });
  };

  const handleSpiritualLifeChange = (option: string, checked: boolean) => {
    const current = member.spiritualLife || [];
    if (checked) {
      handleChange("spiritualLife", [...current, option]);
    } else {
      handleChange(
        "spiritualLife",
        current.filter((item) => item !== option),
      );
    }
  };

  const prefix = index !== undefined ? `member-${index}` : "assignee";

  return (
    <div className="space-y-3 print:space-y-2">
      {showRelationship && onRemove && (
        <div className="flex items-center justify-between pb-2 border-b border-form-divider">
          <div className="flex items-center gap-4">
            <Label
              htmlFor={`${prefix}-relationship`}
              className="text-sm font-medium text-muted-foreground print:text-xs"
            >
              Relationship to Assignee
            </Label>
            <Select
              value={(member as Member).relationship}
              onValueChange={(value) => handleChange("relationship", value)}
            >
              <SelectTrigger
                id={`${prefix}-relationship`}
                className="w-48 h-8 print:h-6 print:text-xs"
              >
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                {RELATIONSHIP_OPTIONS.map((rel) => (
                  <SelectItem key={rel} value={rel}>
                    {rel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="text-destructive hover:text-destructive hover:bg-destructive/10 no-print"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-3 gap-2 print:gap-1">
        <div className="space-y-1">
          <Label
            htmlFor={`${prefix}-firstName`}
            className="text-xs font-medium"
          >
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${prefix}-firstName`}
            value={member.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="First name"
            className="h-8 text-sm print:h-6 print:text-xs"
            required
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor={`${prefix}-middleName`}
            className="text-xs font-medium"
          >
            Middle Name
          </Label>
          <Input
            id={`${prefix}-middleName`}
            value={member.middleName}
            onChange={(e) => handleChange("middleName", e.target.value)}
            placeholder="Middle name"
            className="h-8 text-sm print:h-6 print:text-xs"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${prefix}-lastName`} className="text-xs font-medium">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${prefix}-lastName`}
            value={member.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Last name"
            className="h-8 text-sm print:h-6 print:text-xs"
            required
          />
        </div>
      </div>

      {/* Other Name Option */}
      <div className="space-y-2 print:space-y-1">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`${prefix}-hasOtherName`}
            checked={member.hasOtherName}
            onCheckedChange={(checked) =>
              handleChange("hasOtherName", checked === true)
            }
          />
          <Label
            htmlFor={`${prefix}-hasOtherName`}
            className="text-xs cursor-pointer"
          >
            I have another name (maiden name, alias, etc.)
          </Label>
        </div>
        {member.hasOtherName && (
          <div className="grid grid-cols-3 gap-2 pl-6 print:gap-1 print:pl-4">
            <div className="space-y-1">
              <Label
                htmlFor={`${prefix}-otherFirstName`}
                className="text-xs font-medium"
              >
                Other First Name
              </Label>
              <Input
                id={`${prefix}-otherFirstName`}
                value={member.otherName.firstName}
                onChange={(e) =>
                  handleOtherNameChange("firstName", e.target.value)
                }
                placeholder="First name"
                className="h-8 text-sm print:h-6 print:text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label
                htmlFor={`${prefix}-otherMiddleName`}
                className="text-xs font-medium"
              >
                Other Middle Name
              </Label>
              <Input
                id={`${prefix}-otherMiddleName`}
                value={member.otherName.middleName}
                onChange={(e) =>
                  handleOtherNameChange("middleName", e.target.value)
                }
                placeholder="Middle name"
                className="h-8 text-sm print:h-6 print:text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label
                htmlFor={`${prefix}-otherLastName`}
                className="text-xs font-medium"
              >
                Other Last Name
              </Label>
              <Input
                id={`${prefix}-otherLastName`}
                value={member.otherName.lastName}
                onChange={(e) =>
                  handleOtherNameChange("lastName", e.target.value)
                }
                placeholder="Last name"
                className="h-8 text-sm print:h-6 print:text-xs"
              />
            </div>
          </div>
        )}
      </div>

      {/* Gender, DOB, Marital Status */}
      <div className="grid grid-cols-3 gap-2 print:gap-1">
        <div className="space-y-1">
          <Label htmlFor={`${prefix}-gender`} className="text-xs font-medium">
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select
            value={member.gender}
            onValueChange={(value) => handleChange("gender", value)}
          >
            <SelectTrigger
              id={`${prefix}-gender`}
              className="h-8 print:h-6 print:text-xs"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {GENDER_OPTIONS.map((gender) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${prefix}-dob`} className="text-xs font-medium">
            Date of Birth <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${prefix}-dob`}
            type="date"
            value={member.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            className="h-8 text-sm print:h-6 print:text-xs"
            required
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor={`${prefix}-maritalStatus`}
            className="text-xs font-medium"
          >
            Marital Status
          </Label>
          <Select
            value={isSpouse ? "Married" : member.maritalStatus}
            onValueChange={(value) => handleChange("maritalStatus", value)}
            disabled={isSpouse}
          >
            <SelectTrigger
              id={`${prefix}-maritalStatus`}
              className="h-8 print:h-6 print:text-xs"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {MARITAL_STATUS_OPTIONS.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="grid grid-cols-2 gap-2 print:gap-1">
        <div className="space-y-1">
          <Label htmlFor={`${prefix}-email`} className="text-xs font-medium">
            Email
          </Label>
          <Input
            id={`${prefix}-email`}
            type="email"
            value={member.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="email@example.com"
            className="h-8 text-sm print:h-6 print:text-xs"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`${prefix}-phone`} className="text-xs font-medium">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${prefix}-phone`}
            type="tel"
            value={member.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="(123) 456-7890"
            className="h-8 text-sm print:h-6 print:text-xs"
            required
          />
        </div>
      </div>

      {/* Address Fields */}
      <div className="space-y-2">
        <Label className="text-xs font-medium">Address</Label>
        <div className="grid grid-cols-4 gap-2 print:gap-1">
          <div className="col-span-2 space-y-1">
            <Label
              htmlFor={`${prefix}-street`}
              className="text-xs text-muted-foreground"
            >
              Street Address
            </Label>
            <Input
              id={`${prefix}-street`}
              value={member.address.street}
              onChange={(e) => handleAddressChange("street", e.target.value)}
              placeholder="123 Main Street"
              className="h-8 text-sm print:h-6 print:text-xs"
            />
          </div>
          <div className="space-y-1">
            <Label
              htmlFor={`${prefix}-city`}
              className="text-xs text-muted-foreground"
            >
              City
            </Label>
            <Input
              id={`${prefix}-city`}
              value={member.address.city}
              onChange={(e) => handleAddressChange("city", e.target.value)}
              placeholder="City"
              className="h-8 text-sm print:h-6 print:text-xs"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label
                htmlFor={`${prefix}-state`}
                className="text-xs text-muted-foreground"
              >
                State
              </Label>
              <Select
                value={member.address.state}
                onValueChange={(value) => handleAddressChange("state", value)}
              >
                <SelectTrigger
                  id={`${prefix}-state`}
                  className="h-8 print:h-6 print:text-xs"
                >
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label
                htmlFor={`${prefix}-zipCode`}
                className="text-xs text-muted-foreground"
              >
                ZIP Code
              </Label>
              <Input
                id={`${prefix}-zipCode`}
                value={member.address.zipCode}
                onChange={(e) => handleAddressChange("zipCode", e.target.value)}
                placeholder="12345"
                className="h-8 text-sm print:h-6 print:text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spiritual Life */}
      <div className="space-y-1">
        <Label className="text-xs font-medium">Spiritual Life</Label>
        <div className="flex gap-4">
          {SPIRITUAL_LIFE_OPTIONS.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${prefix}-spiritual-${option}`}
                checked={member.spiritualLife?.includes(option) || false}
                onCheckedChange={(checked) =>
                  handleSpiritualLifeChange(option, checked === true)
                }
              />
              <Label
                htmlFor={`${prefix}-spiritual-${option}`}
                className="text-xs cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
