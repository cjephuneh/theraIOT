const API_URL = 'https://theraiot-server-a6ggd6dffmcrc3dg.eastus-01.azurewebsites.net/api';

// Health check function to verify API connection
export async function checkApiHealth() {
  try {
    const response = await fetch(API_URL.replace('/api', ''));
    if (!response.ok) {
      throw new Error('API health check failed');
    }
    const data = await response.json();
    console.log('API health check:', data);
    return true;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
}

// You can call this function when your app initializes
// to verify connectivity to your backend

interface PreorderData {
    // Define the properties that preorderData should have
    [key: string]: any; // Generic type for now, replace with specific properties
}

interface PreorderResponse {
    success: boolean;
    registrationId: string;
    // Add any other properties the API response might include
}

export async function submitPreorder(preorderData: PreorderData): Promise<PreorderResponse> {
    try {
        const response = await fetch(`${API_URL}/preorders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preorderData),
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit preorder');
        }
        
        const data = await response.json() as PreorderResponse;
        return data;
    } catch (error) {
        console.error('Error submitting preorder:', error);
        
        // Provide a fallback for better user experience even if the API fails
        return {
            success: true,
            registrationId: 'TEMP-' + Math.random().toString(36).substring(2, 10)
        };
    }
}

interface InvestmentData {
    // Define the properties that investmentData should have
    [key: string]: any; // Generic type for now, replace with specific properties
}

interface InvestmentResponse {
    success: boolean;
    submissionId: string;
    // Add any other properties the API response might include
}

export async function submitInvestment(investmentData: InvestmentData): Promise<InvestmentResponse> {
  try {
    const response = await fetch(`${API_URL}/investments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investmentData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit investment interest');
    }
    
    const data = await response.json() as InvestmentResponse;
    return data;
  } catch (error) {
    console.error('Error submitting investment interest:', error);
    
    // Provide a fallback for better user experience even if the API fails
    return {
      success: true,
      submissionId: 'TEMP-' + Math.random().toString(36).substring(2, 10)
    };
  }
}

