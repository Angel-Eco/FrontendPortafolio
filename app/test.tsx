"use client";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, AcademicCapIcon, CalculatorIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Liderazgo',
      description:
        'Motivación al equipo de trabajo mediante una comunicación eficaz y respeto a sus pares. Inteligencia emocional y habilidades para resolver problemas.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Trabajo en equipo',
      description:
        'Experiencia con distintas personas, equipos y culturas de trabajo, mejorando y generando un ambiente más comunicativo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Gestión del tiempo',
      description:
        'Una buena organización para cumplir plazos de entrega. Uso de software y metodologías de trabajo para el logro de metas eficazmente.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Innovación y creatividad',
      description:
        'Ideas frescas e innovadoras que se ajustan a los requerimientos proporcionados',
      icon: CalculatorIcon,
    },
  ]

export default function Example() {
  return (
    <div className="z-10 w-full mt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">          
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Skills
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm not just a Developer, I'm help our World to defeat the crisis climate 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}