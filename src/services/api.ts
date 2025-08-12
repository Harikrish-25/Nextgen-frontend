// API configuration and service functions
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Response types
interface ApiResponse {
  success: boolean;
  message: string;
  whatsapp_sent?: boolean;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    return this.request('/api/health');
  }

  // Products
  async getProducts() {
    return this.request('/api/products');
  }

  async getProduct(id: string) {
    return this.request(`/api/products/${id}`);
  }

  // Orders
  async submitOrder(orderData: {
    customer_info: {
      name: string;
      email: string;
      phone: string;
    };
    products: Array<{
      product_id: string;
      product_name: string;
      quantity: number;
      unit_price: number;
      total_price: number;
    }>;
    total_amount: number;
    delivery_address: {
      street: string;
      city: string;
      state: string;
      postal_code: string;
      landmark?: string;
    };
    special_instructions?: string;
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/orders/submit', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  // Awareness Program
  async submitAwarenessBooking(bookingData: {
    name: string;
    email: string;
    phone: string;
    preferred_date: string;
    session_type: string;
    message?: string;
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/awareness/submit', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  // Training & Consulting
  async submitTrainingRequest(trainingData: {
    company_name: string;
    contact_person: string;
    email: string;
    phone: string;
    training_type: string;
    participants_count: number;
    preferred_dates: string[];
    requirements?: string;
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/training/submit', {
      method: 'POST',
      body: JSON.stringify(trainingData),
    });
  }

  // Contact
  async submitContact(contactData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/contact/submit', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }
}

export const apiService = new ApiService();
export default apiService;
