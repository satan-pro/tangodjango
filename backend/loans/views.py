from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from django.shortcuts import render, redirect
from .utils.supabase_service import fetch_current_loans, add_current_loan



def current_loans_view(request):
    user_id = request.user.id  # Assuming you have user authentication set up
    
    if request.method == "GET":
        loans = fetch_current_loans(user_id)
        return render(request, 'loans/current_loans.html', {'loans': loans})
    
    if request.method == "POST":
        loan_data = {
            'loan_type': request.POST['loan_type'],
            'amount': request.POST['amount'],
            'interest_rate': request.POST['interest_rate'],
            'remaining_balance': request.POST['remaining_balance'],
            'status': request.POST['status']
        }
        add_current_loan(user_id, loan_data)
        return redirect('current_loans_view') 
