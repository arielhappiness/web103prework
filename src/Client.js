import { createClient } from '@supabase/supabase-js';
const URL = 'https://enzbgppoiozkshdwavpa.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuemJncHBvaW96a3NoZHdhdnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNjQyMzIsImV4cCI6MjAzNjg0MDIzMn0.2Bs6kyQRQEqRF2Uy1CgW3anf1kVQxJXlPcTHCfjGT68';

export const supabase = createClient(URL, API_KEY);