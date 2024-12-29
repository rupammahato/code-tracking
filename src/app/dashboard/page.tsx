import Header from '@/components/Header'
import UserProfile from '@/components/UserProfile'
import ProgressTracker from '@/components/ProgressTracker'
import RegistrationFee from '@/components/RegistrationFee'
import PaymentHistory from '@/components/PaymentHistory'
import LogoutButton from '@/components/LogoutButton'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <UserProfile />
          <div className="space-y-8">
            <ProgressTracker />
            <RegistrationFee />
          </div>
        </div>
        <PaymentHistory />
        <LogoutButton />
      </main>
    </div>
  )
}

