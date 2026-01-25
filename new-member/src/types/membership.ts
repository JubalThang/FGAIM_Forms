export interface OtherName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface Member {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  otherName: OtherName;
  hasOtherName: boolean;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  maritalStatus: string;
  spiritualLife: string[];
  relationship: string;
}

export interface MembershipForm {
  assignee: Omit<Member, 'relationship'>;
  additionalMembers: Member[];
}

export const RELATIONSHIP_OPTIONS = [
  'Spouse',
  'Child',
  'Parent',
  'Sibling',
  'Grandparent',
  'Grandchild',
  'In-Law',
  'Guardian',
  'Dependent',
  'Other'
] as const;

export const MARITAL_STATUS_OPTIONS = [
  'Single',
  'Married',
  'Widowed',
  'Divorced',
  'Separated'
] as const;

export const SPIRITUAL_LIFE_OPTIONS = [
  'Born Again',
  'Water Baptism'
] as const;
