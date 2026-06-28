import React from 'react'

const TaskListNumber = ({ data }) => {
  const cards = [
    { label: 'New Tasks', value: data.taskCount.newTask, color: 'from-sky-500 to-indigo-600', icon: '🆕' },
    { label: 'Completed', value: data.taskCount.completed, color: 'from-emerald-500 to-teal-600', icon: '✅' },
    { label: 'Accepted', value: data.taskCount.active, color: 'from-amber-400 to-orange-500', icon: '📌' },
    { label: 'Failed', value: data.taskCount.failed, color: 'from-rose-500 to-fuchsia-600', icon: '🚫' },
  ]

  return (
    <div className='grid gap-5 md:grid-cols-4 mt-10'>
      {cards.map((card) => (
        <div
          key={card.label}
          className={`rounded-[28px] bg-gradient-to-br ${card.color} p-6 shadow-2xl shadow-slate-950/20`}
        >
          <div className='flex items-center justify-between text-sm text-white/80'>
            <span>{card.label}</span>
            <span>{card.icon}</span>
          </div>
          <p className='mt-6 text-4xl font-semibold text-white'>{card.value}</p>
          <p className='mt-2 text-sm text-white/70'>Tasks in this category</p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber