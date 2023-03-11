import React, { createContext, useState, useContext } from "react"

export interface ContextState<T> {
  state: T
  setState: React.Dispatch<T>
}

export interface ControlState {
  speed?: number
  running?: boolean
}

const initialState: ControlState = {
  speed: 1.0,
  running: false,
}

const Context: any = createContext<ContextState<ControlState> | undefined>(
  undefined
)

export const ControlProvider = (props: any) => {
  const [state, setState] = useState<ControlState>(initialState)

  const setContext = (state: ControlState) => {
    setState((prevState: ControlState) => ({ ...prevState, ...state }))
  }

  return (
    <Context.Provider value={{ state: { ...state }, setState }}>
      <>{props.children}</>
    </Context.Provider>
  )
}

export const useControlState = () => {
  const ctx: ContextState<ControlState> | undefined = useContext(Context)
  if (ctx === undefined) {
    throw new Error("useControlState should be used within ControlProvider")
  }
  const { state, setState } = ctx
  return [state, setState]
}
