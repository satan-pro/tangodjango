from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class CurrentLoan(models.Model) :
    LOAN_TYPE_CHOICES = [
        ('personal', 'Personal Loan'),
        ('home', 'Home Loan'),
        ('auto', 'Auto Loan'),
        ('education', 'Education Loan'),
        ('business', 'Business Loan'),
    ]

    user - models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    loan_type = models.CharField(max_length=20, choices=LOAN_TYPE_CHOICES)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    remaining_balance = models.DecimalField(max_digits=12, decimal_places=2)
    status = models.CharField(max_length=20)


    def __str__(self):
        return f"{self.user.username} - {self.loan_type} - {self.amount}"


class PaymentHistory(models.Model):

    user_loan = models.ForeignKey(CurrentLoan, on_delete=models.CASCADE)
    transaction_id = models.UUIDField(default=uuid.uuid4,editable=False, unique=True)
    vendor_name = models.CharField(max_length=100)
    emi_amount = models.DecimalField(max_digits=10, decimal_places=2)
    loan_reference = models.ForeignKey(CurrentLoan, on_delete=models.CASCADE)

    payment_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10)


    def __str__(self):
        return "Transaction {self.transaction_id} - {self.vendor_name} - {self.status}"