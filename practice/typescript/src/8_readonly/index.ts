// type Address = {
//   readonly postalCode: number;
//   readonly city: string;
//   readonly street: string;
//   readonly building: string;
//   readonly unitNumber: number;
// };

type Address = {
  postalCode: number;
  city: string;
  street: string;
  building: string;
  unitNumber: number;
};

type ReadonlyAddress = Readonly<Address>;