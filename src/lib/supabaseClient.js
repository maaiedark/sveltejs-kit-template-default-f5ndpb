import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://eusdvnaxjskxdivbidyh.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1c2R2bmF4anNreGRpdmJpZHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwOTU0NzYsImV4cCI6MTk4MTY3MTQ3Nn0.CzrcTdq7F1M_hxdlLVMc0ByEKJAhhVUWLoKlgJ8pOd0'
);
