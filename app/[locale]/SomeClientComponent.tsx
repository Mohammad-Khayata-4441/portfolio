"use client";
import {  useTranslations } from 'next-intl'
import React from 'react'

export default function SomeClientComponent() {
    const t = useTranslations()

  return (
    <div>SomeClientComponent {t('welcomeMessage')}</div>
  )
}
