import React from 'react'

const IconPerson = () => (
  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const IconLocation = () => (
  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const IconIdCard = () => (
  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
  </svg>
)

type InfoRowProps = {
  icon: React.ReactNode
  children: React.ReactNode
}

const InfoRow = ({ icon, children }: InfoRowProps) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 flex justify-center pt-0.5">{icon}</div>
    <p className="text-gray-800 text-base md:text-lg leading-relaxed">{children}</p>
  </div>
)

const FiremneUdajeSection = () => (
  <div className="max-w-2xl mx-auto mb-12">
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10 font-inter text-center">
        FIREMNÉ ÚDAJE
      </h2>

      <div className="space-y-6 max-w-md mx-auto">
        <InfoRow icon={<IconPerson />}>
          Zdenek Vykydal
        </InfoRow>

        <InfoRow icon={<IconLocation />}>
          Tomanova 10064/78, 831 07 Bratislava – mestská časť Vajnory
        </InfoRow>

        <InfoRow icon={<IconIdCard />}>
          IČO: 50536311
        </InfoRow>

        <InfoRow icon={<IconIdCard />}>
          DIČ: 2120380240
        </InfoRow>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-100 text-center text-gray-700 text-sm md:text-base leading-relaxed space-y-1">
        <p>Výpis z Obchodného registra Mestského súdu Bratislava III</p>
        <p>Vložka číslo: 114639/B</p>
      </div>
    </div>
  </div>
)

export default FiremneUdajeSection
