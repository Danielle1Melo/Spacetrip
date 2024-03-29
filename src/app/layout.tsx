import Stars from '@/components/Stars/Stars';
import '../styles/global.css';

export const metadata = {
  title: 'SpaceTrip',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
