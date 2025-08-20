"use client"

import { useState } from "react"
import Link from "next/link"

export default function UnsubscribePage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
        setEmail("")
      } else {
        setError("Failed to unsubscribe. Please try again.")
      }
    } catch {
      setError("Failed to unsubscribe. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-[#7c3bed]">Unsubscribe</h1>
        <p className="mb-6 text-gray-600">
          Enter your email to unsubscribe from our mailing list.
        </p>
        {!submitted ? (
          <form onSubmit={handleUnsubscribe}>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-[#7c3bed] text-white font-bold py-2 rounded hover:bg-[#8920ED] transition"
            >
              Unsubscribe
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        ) : (
          <div className="text-green-600 font-semibold flex flex-col items-center">
            You have been unsubscribed.
            <Link href="/subscribe">
              <button className="mt-4 px-4 py-2 bg-[#8920ED] text-white rounded font-bold hover:bg-[#7c3bed] transition">
                Subscribe Again
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}