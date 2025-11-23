import React from 'react'
import { SkillsItem } from '@/utils/data'

const Skills = () => {
  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4 py-10">
      <div className="w-full">
        <h1 className="text-sm font-semibold italic mb-10">{"{ "}What I Do , What I Have 🥷{" }"}</h1>
        {SkillsItem.map((skills, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
              >
                <h2 className="text-base font-bold mb-6 text-center tracking-wide text-blue-400">
                  {category}
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {items.map((item) => {
                    const Icon = item.icon
                    return item.name ? (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 bg-zinc-800 hover:bg-blue-600 transition px-4 py-2 rounded-full text-xs font-medium cursor-default"
                      >
                        {Icon && <Icon size={14} />}
                        {item.name}
                      </div>
                    ) : null
                  })}
                </div>
              </div>
            ))}
          </div>
      ))}
      </div>
    </section>
  )
}

export default Skills
