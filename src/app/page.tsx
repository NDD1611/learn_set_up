
'use client'
import { useLingui } from '@lingui/react'

export default function App() {
  const { i18n } = useLingui()
  return <div>
    <div> {i18n._("Home page root")} </div>
  </div>
}


