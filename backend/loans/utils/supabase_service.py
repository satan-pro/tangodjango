from supabase import create_client, Client

url = "https://mqkkbiwhygcunuwvuzye.supabase.co/"  # Replace with your actual Supabase URL
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa2tiaXdoeWdjdW51d3Z1enllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NjgyNzYsImV4cCI6MjA1NDA0NDI3Nn0.ampFEbQTl3T0mtXEtcEP5K351to6_gNPq--vRbNWf04"    # Replace with your actual Supabase API key

supabase: Client = create_client(url, key)

def fetch_current_loans(user_id):\

    # fetch loans for specific user
    response = supabase.table('current_loans').select('*').eq('user_id', user_id).execute()
    if response.status_code == 200:
        return response.data  
    else:
        print(f"Error fetching loans: {response.error}")
        return None

def fetch_payment_history(user_id):

    # payment history
    response = supabase.table('payment_history').select('*').eq('user_id', user_id).execute()
    if response.status_code == 200:
        return response.data  
    else:
        print(f"Error fetching payment history: {response.error}")
        return None

def add_current_loan(user_id, loan_data):

    # add new loan
    response = supabase.table('current_loans').insert({
        'user_id': user_id,
        'loan_type': loan_data['loan_type'],
        'amount': loan_data['amount'],
        'interest_rate': loan_data['interest_rate'],
        'remaining_balance': loan_data['remaining_balance'],
        'status': loan_data['status']
    }).execute()
    
    if response.status_code == 201:
        return response.data  # Return newly created loan data if successful
    else:
        print(f"Error adding loan: {response.error}")
        return None

def add_payment_history(user_loan_id, payment_data):
    
    # Add a new payment record to the payment history
    response = supabase.table('payment_history').insert({
        'user_loan_id': user_loan_id,
        'transaction_id': payment_data['transaction_id'],
        'vendor_name': payment_data['vendor_name'],
        'emi_amount': payment_data['emi_amount'],
        'payment_date': payment_data['payment_date'],
        'status': payment_data['status']
    }).execute()
    
    if response.status_code == 201:
        return response.data  # Return newly created payment record if successful
    else:
        print(f"Error adding payment history: {response.error}")
        return None
