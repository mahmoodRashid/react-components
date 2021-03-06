import * as React from "react"
import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly value?: string | number | boolean
	readonly color?: string
	readonly onBlur: (event: React.FocusEvent) => void
}
