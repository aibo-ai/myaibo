import React from "react";

export function PainPointsSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[48px] font-bold mb-2 text-center">
          How We Transform Your <span className="text-[#7c3bed]">Business</span>
        </h1>
        <h2 className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Your biggest expense isn&apos;t payroll—it&apos;s inefficiency
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-50 rounded-lg">
          {/* Pain Statements */}
          <div className="lg:w-full border-r border-gray-50">
            <h3 className="text-4xl font-bold mb-6 text-center px-8 pt-8">Pain Points</h3>
            <hr/>
            <ul className="list-none space-y-4 text-xl p-8">
              <li>⏰ Valuable time vanishes on repetitive work daily</li>
              <li>📊 Critical information lives in silos everywhere</li>
              <li>📈 Expenses climb while results plateau</li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="lg:w-full">
            <h3 className="text-4xl font-bold mb-6 text-center px-8 pt-8 text-[#7c3bed]">AI Solutions</h3>
            <hr/>
            <ul className="list-none space-y-4 text-xl p-8">
              <li>🤖 Process Automation → eliminate bottlenecks</li>
              <li>💡 Data Intelligence → connect scattered information</li>
              <li>🎯 Performance AI → amplify results without added costs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
