const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

export async function fetchFromAPI(endpoint: string, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("API request failed")
  }

  return response.json()
}

export async function predictLoan(data: any) {
  return fetchFromAPI("/predict-loan/", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function fetchLoanDetails(userId: string) {
  return fetchFromAPI(`/loans/${userId}/`)
}

export async function fetchAnalytics() {
  return fetchFromAPI("/analytics/")
}

