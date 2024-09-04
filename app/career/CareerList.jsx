import React from 'react'

async function getCareerList() {
    const res = await fetch('http://localhost:4000/career')

    return res.json()
}

export default async function CareerList() {
    const careers = await getCareerList()

  return (
    <div>
            {careers.map((career) => (
                <div key={career.id} className="card flex mb-8 justify-between w-full left-timeline">
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {career.startDate}
                    </time>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {career.role}
                    </h3>
                    <h4 className="text-lg semi-bold text-gray-900 dark:text-white">
                        {career.company}
                    </h4>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {career.description}
                    </p>
                </div>
            ))}
            {careers.length === 0 && (
                <p className="text-center">Empty database for career</p>
            )}
        </div>
  )
}

