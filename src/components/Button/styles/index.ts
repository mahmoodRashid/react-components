import { Theme } from "../../../theme"

import { IProps } from "../__types/IProps"
import { Values } from "../__types/Values"

// tslint:disable-next-line:no-any
export const styles: any = (theme: typeof Theme) => ({
	button: {
		color: "black",
		background: ({ color, disabled }: IProps) => (disabled ? "#ccc" : color || theme.primaryLight),
		padding: ({ padding }: IProps) => padding || Values.defaultPadding,
		width: ({ width, buttonType }: IProps) => (buttonType === "square" ? 50 : width || Values.defaultWidth),
		outline: "none",
		border: "none",
		margin: ({ margin }: IProps) => margin || "10px 0px",
		cursor: "pointer",
		boxShadow: "1px 3px 8px 0px #ccc"
	},
	addBtn: {
		background: ({ color, disabled }: IProps) => (disabled ? "#ccc" : color || theme.primaryLight),
		width: 40,
		height: 40,
		borderRadius: "50%",
		display: "flex",
		boxShadow: "1px 3px 8px 0px #ccc",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer"
	}
})
