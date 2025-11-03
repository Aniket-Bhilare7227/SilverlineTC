import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-heading font-bold mb-4 text-gradient">404</h2>
        <h3 className="text-2xl font-semibold mb-4">Page Not Found</h3>
        <p className="text-muted-foreground mb-8">Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
