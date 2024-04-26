import {createClient} from '@supabase/supabase-js';

const URL = 'https://oedcchdiewcknnjkwnzl.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lZGNjaGRpZXdja25uamt3bnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDMxNDYsImV4cCI6MjAyOTQxOTE0Nn0.vQJY6fQ2fEaPHue20lTwzzSOmPXrOzZzeM15LbvgdgQ';

export const supabase = createClient(URL, KEY);
