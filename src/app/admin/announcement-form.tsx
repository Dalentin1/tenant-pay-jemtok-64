'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { addAnnouncementAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Posting...' : 'Post Announcement'}
    </Button>
  );
}

export default function AnnouncementForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(addAnnouncementAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.errors?.title && !state.errors?.content) {
      toast({
        title: 'Success',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.message && (state.errors?.title || state.errors?.content)) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="e.g., Water Maintenance"
        />
        {state.errors?.title && (
          <p className="text-sm text-destructive mt-1">{state.errors.title[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Input
          id="content"
          name="content"
          placeholder="e.g., The water will be shut off for maintenance..."
        />
        {state.errors?.content && (
          <p className="text-sm text-destructive mt-1">{state.errors.content[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
