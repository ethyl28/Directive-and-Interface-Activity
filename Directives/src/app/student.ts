export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  nationality: string,
  gender: "Male" | "Female",
  status: "Single" | "Married",
  homeAddress: string,

  //Education background
  educBack?: string,
  elemSchool?: string,
  highSchool?: string,
  college?: string,
  degree?:string // put a question mark in degree to make it optional


}
