export interface OtherName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
export interface Member {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  otherName: OtherName;
  hasOtherName: boolean;
  gender: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: Address;
  maritalStatus: string;
  spiritualLife: string[];
  relationship: string;
}

export interface MembershipForm {
  assignee: Member;
  additionalMembers: Member[];
  membershipCommitment: boolean;
  signatureDate: string;
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

export const GENDER_OPTIONS = ['Male', 'Female'] as const;

export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'DC', label: 'Washington D.C.' },
] as const;

export const MEMBERSHIP_COMMITMENT_TEXT = `I/We agree with and accept the creeds and doctrines of Full Gospel Assembly International Ministries.

I/We hereby commit to:

• Worship the living God faithfully
• Actively participate in church and ministry activities
• Faithfully pay tithes and give offerings
• Pray consistently and engage in evangelism

I/We make this commitment as members of Full Gospel Assembly International Ministries.`;