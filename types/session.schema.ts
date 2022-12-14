import { object, string, TypeOf } from 'zod';

//This schema corelates to logging in a user
//This doesnt reflect what the session model will look like

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }),
    password: string({
      required_error: 'Password is required',
    }),
  }),
});

export type SessionInput = TypeOf<typeof createSessionSchema>;
