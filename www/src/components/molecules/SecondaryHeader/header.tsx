import React from 'react'
import { HiCalendar, HiFilter, HiSearch, HiShare } from 'react-icons/hi'
import { MdAutoAwesomeMotion } from 'react-icons/md'

const SecondaryHeader = () => {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6">
      <div className="flex items-center gap-2">
        <HiSearch className="h-5 w-5 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="max-w-xs rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="flex gap-4">
  <div className="flex items-center gap-2">
    <HiCalendar className="h-5 w-5" />
    <h1>Calendar</h1>
  </div>
  <div className="flex items-center gap-2">
    <MdAutoAwesomeMotion className="h-5 w-5" />
    <span>Automation</span>
  </div>
  <div className="flex items-center gap-2">
    <HiFilter className="h-5 w-5" />
    <span>Filter</span>
  </div>
  <div className="flex items-center gap-2">
    <HiShare className="h-5 w-5" />
    <span>Share</span>
  </div>
</div>

    </header>
  )
}

export default SecondaryHeader