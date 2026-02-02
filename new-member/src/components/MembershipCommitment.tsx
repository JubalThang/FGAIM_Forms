import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { MEMBERSHIP_COMMITMENT_TEXT } from "../types/membership";

interface MembershipCommitmentProps {
  isChecked: boolean;
  signatureDate: string;
  onCheckedChange: (checked: boolean) => void;
  onDateChange: (date: string) => void;
}

export const MembershipCommitment = ({
  isChecked,
  signatureDate,
  onCheckedChange,
  onDateChange,
}: MembershipCommitmentProps) => {
  return (
    <div className="space-y-4 print:space-y-2">
      {/* Commitment Text */}
      <div className="bg-muted/10 p-4 rounded-lg border border-border/10 print:p-2 print:bg-transparent">
        <p className="text-sm whitespace-pre-line print:text-xs">
          {MEMBERSHIP_COMMITMENT_TEXT}
        </p>
      </div>

      {/* Commitment Checkbox */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="membership-commitment"
          checked={isChecked}
          onCheckedChange={(checked) => onCheckedChange(checked === true)}
          className="mt-0.5"
        />
        <Label 
          htmlFor="membership-commitment" 
          className="text-sm font-medium cursor-pointer leading-relaxed"
        >
          I/We have read, understood, and agree to the membership commitment above.
          <span className="text-destructive"> *</span>
        </Label>
      </div>

      {/* Signature Date */}
      <div className="flex items-center gap-4 pt-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="signature-date" className="text-sm font-medium whitespace-nowrap">
            Signature Date <span className="text-destructive">*</span>
          </Label>
          <Input
            id="signature-date"
            type="date"
            value={signatureDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="h-8 w-48 text-sm print:h-6 print:text-xs"
            required
          />
        </div>
        
        {/* Print signature line */}
        <div className="hidden print:flex print:items-center print:gap-2 print:flex-1">
          <span className="text-xs">Signature:</span>
          <div className="flex-1 border-b border-foreground min-w-50"></div>
        </div>
      </div>
    </div>
  );
};

// TODO: Signature Date on the bottom should be just date not date selector. Make it print only.