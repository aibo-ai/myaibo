import { redirect } from 'next/navigation';

export default function WhitepapersPage() {
  // Whitepapers have been removed from the public site.
  // Redirect any old links to the main Resources page.
  redirect('/resources');
}
