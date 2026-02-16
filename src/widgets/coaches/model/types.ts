export type CoachModel = {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city: string;
  photo: {
    url: string;
    alt: string;
  };
};
