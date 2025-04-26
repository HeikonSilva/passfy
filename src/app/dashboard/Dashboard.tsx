import { DataTable } from '@/components/layout/data-table'
import { SectionCards } from '@/components/layout/section-cards'

import data from '@/api/data.json'

export default function Dashboard() {
  return (
    <>
      <SectionCards />
      <DataTable data={data} />
    </>
  )
}
