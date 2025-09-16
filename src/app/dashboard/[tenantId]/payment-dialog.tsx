'use client';

import { useActionState, useEffect, useState, useTransition } from 'react';
import { processPaymentAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Bill } from '@/lib/types';
import { usePaystackPayment } from 'react-paystack';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Loader2 } from 'lucide-react';

export default function PaymentDialog({
  tenantId,
  bill,
}: {
  tenantId: string;
  bill: Bill;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(bill.amount);
  
  const initialState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(processPaymentAction, initialState);
  const { toast } = useToast();
  
  const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  const config = {
      reference: new Date().getTime().toString(),
      email: email,
      amount: Math.round(amount * 100), // Amount in kobo
      publicKey: paystackKey || '',
  };

  const initializePayment = usePaystackPayment(config);

  const onPaymentSuccess = (reference: { reference: string }) => {
    console.log('Paystack success:', reference);
    startTransition(async () => {
        const formData = new FormData();
        formData.append('tenantId', tenantId);
        formData.append('amount', String(amount));
        formData.append('paystackReference', reference.reference);
        formAction(formData);
    })
  };

  const onPaymentClose = () => {
    console.log('Paystack dialog closed');
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !amount) {
        toast({
            title: 'Missing Information',
            description: 'Please enter your email and a valid amount.',
            variant: 'destructive',
        });
        return;
    }
    if (!paystackKey) {
        toast({
            title: 'Configuration Error',
            description: 'Paystack public key is not configured. Please contact support.',
            variant: 'destructive',
        });
        return;
    }
    initializePayment({onSuccess: onPaymentSuccess, onClose: onPaymentClose});
  }

  useEffect(() => {
    if (state.message && state.success) {
      toast({
        title: 'Payment Successful',
        description: `Your payment of ₦${amount.toFixed(2)} has been processed.`,
      });
      setIsOpen(false);
    } else if (state.message && !state.success) {
      toast({
        title: 'Payment Failed',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, amount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (isNaN(value)) {
        setAmount(0);
    } else {
        setAmount(value);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg">
          <CreditCard className="mr-2" /> Pay Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogDescription>
            Your outstanding bill for {new Date(`${bill.month}-01`).toLocaleString('default', { month: 'long', year: 'numeric' })} is ₦{bill.amount.toFixed(2)}. 
            Enter your email and the amount you would like to pay.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlePayment}>
            <div className="space-y-4 py-4">
            <div className="space-y-2">
                <Label htmlFor="email">Paystack Email</Label>
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="amount">Amount to Pay (₦)</Label>
                <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    max={bill.amount}
                    min="0.01"
                    step="0.01"
                    required
                />
                 {state.errors?.amount && (
                    <p className="text-sm text-destructive mt-1">{state.errors.amount[0]}</p>
                )}
            </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                 <Button type="submit" disabled={isPending || !email || !amount}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    `Pay ₦${amount ? amount.toFixed(2) : '0.00'}`
                  )}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
