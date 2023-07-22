"use client"
import React, { useState } from 'react'

import ConstantBlock from './ConstantBlock'

const DEFAULT_STATE = {
  gameState: "",
};

export interface ConstantBlockState {
  constantBlockState: typeof DEFAULT_STATE
}

export default function ConstantBlockPage() {
  return (
    <ConstantBlock />
  )
}
