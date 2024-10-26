import dotenv from 'dotenv';
dotenv.config();
export const mongoDBURL = process.env.mongoDBURL;
export const PORT = process.env.PORT || 3000;