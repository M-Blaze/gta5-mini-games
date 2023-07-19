"use client"
import React, { useState } from 'react'

import BankHack from './BankHack'
import { BankHackContext } from './BankHackContext'

const DEFAULT_STATE = {
  gameState: "",
};

export interface BankHackState {
  bankHackState: typeof DEFAULT_STATE
}

export default function BankHackPage() {
  return (
    <BankHack />
  )
}
