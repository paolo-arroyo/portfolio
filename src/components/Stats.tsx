'use client';

import CountUp from 'react-countup';

const stats = [
  {
    name: 'Years of Dev Exp',
    value: 5,
    suffix: "+"
  },
  {
    name: 'Websites Built',
    value: 62,
  },
  {
    name: 'Technologies Mastered',
    value: 7,
  },
  {
    name: 'Code Commits',
    value: 2.5,
    suffix: "k+"
  }
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="flex-1 flex items-center justify-center">
                <CountUp
                  end={stat.value}
                  duration={5}
                  separator="," 
                  className="text-4xl font-semibold text-accent"
                />
                {stat.suffix && <span className="text-accent text-2xl font-semibold">{stat.suffix}</span>}
                <p 
                  className={`
                    ${stat.name.length > 15 ? "max-w-[150px]" : "max-w-[200px]"}
                    leading-snug ml-4
                  `}
                >
                  {stat.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats;