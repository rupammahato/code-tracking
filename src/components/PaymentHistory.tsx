'use client'

import { motion } from 'framer-motion'

export default function PaymentHistory() {
  const payments = [
    { id: 1, amount: 500, status: 'success', timestamp: '2023-05-01 10:30:00', paymentId: 'PAY123456' },
    { id: 2, amount: 750, status: 'failed', timestamp: '2023-05-02 14:45:00', paymentId: 'PAY234567' },
    { id: 3, amount: 1000, status: 'success', timestamp: '2023-05-03 09:15:00', paymentId: 'PAY345678' },
  ]

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8 border border-blue-500 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Timestamp</th>
              <th className="pb-2">Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className={`border-t border-gray-700 
                `}>
                <td className="py-2">₹{payment.amount}</td>
                <td className="py-2">{payment.status}</td>
                <td className="py-2">{payment.timestamp}</td>
                <td className="py-2">{payment.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}



// ${payment.status != 'success' ? 'glow-green' : 'glow-red' }