'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ReceiptText } from 'lucide-react';

export default function ReceiptViewer({ receiptText }: { receiptText: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <ReceiptText className="mr-2 h-4 w-4" /> View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Payment Receipt</DialogTitle>
        </DialogHeader>
        <div className="bg-muted p-4 rounded-lg my-4">
          <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
            {receiptText}
          </pre>
        </div>
        <Button onClick={() => window.print()}>Print Receipt</Button>
      </DialogContent>
    </Dialog>
  );
}
