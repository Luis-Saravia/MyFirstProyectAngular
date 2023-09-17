import { FormControl } from "@angular/forms";

export interface Form {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  country: FormControl<string | null>;
  city: FormControl<string | null>;
}