import { Client, Account, Databases, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('67e66d4d0023f264932f'); // Your project ID

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

// Database and collection IDs from environment variables
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const PREORDER_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_PREORDER_COLLECTION_ID || '';
export const INVESTMENT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INVESTMENT_COLLECTION_ID || '';

// Helper functions for TheraIOT operations
export async function submitPreorder(preorderData) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      PREORDER_COLLECTION_ID,
      ID.unique(),
      preorderData
    );
    
    return { 
      success: true, 
      registrationId: response.$id
    };
  } catch (error) {
    console.error('Appwrite error:', error);
    throw error;
  }
}

export async function submitInvestment(investmentData) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      INVESTMENT_COLLECTION_ID,
      ID.unique(),
      investmentData
    );
    
    return {
      success: true,
      submissionId: response.$id
    };
  } catch (error) {
    console.error('Appwrite error:', error);
    throw error;
  }
}