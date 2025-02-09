import { getSession } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession(req, res);
    if (!session?.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Get saved data from localStorage on client side
    const personalInfo = typeof window !== 'undefined' ? localStorage.getItem('personalInfo') : null;
    const chronicConditions = typeof window !== 'undefined' ? localStorage.getItem('chronicConditions') : null;
    const temporaryConditions = typeof window !== 'undefined' ? localStorage.getItem('temporaryConditions') : null;

    // Combine user data
    const userData = {
      auth0: session.user,
      personalInfo: personalInfo ? JSON.parse(personalInfo) : null,
      chronicConditions: chronicConditions ? JSON.parse(chronicConditions) : [],
      temporaryConditions: temporaryConditions ? JSON.parse(temporaryConditions) : [],
    };

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
}