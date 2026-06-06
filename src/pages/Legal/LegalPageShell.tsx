import React from 'react'

type LegalPageShellProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

const LegalPageShell = ({ title, subtitle, children }: LegalPageShellProps) => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 font-inter text-center">
        {title}
      </h1>
      <p className="text-center text-gray-600 text-lg mb-12 md:mb-16 max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className="max-w-3xl mx-auto space-y-6">{children}</div>
    </div>
  </div>
)

type LegalSectionProps = {
  title: string
  children: React.ReactNode
}

export const LegalSection = ({ title, children }: LegalSectionProps) => (
  <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
    <h2 className="text-xl md:text-2xl font-bold text-black mb-4 font-inter">{title}</h2>
    <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3">{children}</div>
  </section>
)

export default LegalPageShell
