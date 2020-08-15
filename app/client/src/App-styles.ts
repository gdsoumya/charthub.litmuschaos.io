import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "auto",
		scrollbarColor: "#5B44BA #000000",
		scrollbarWidth: "thin",
		"&::-webkit-scrollbar": {
			width: "0.5em",
		},
		"&::-webkit-scrollbar-track": {
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
			borderRadius: "0.5em",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: theme.palette.text.primary,
			outline: "1px solid slategrey",
			borderRadius: "0.5em",
		},
		"&::-moz-scrollbar": {
			width: "0.5em",
		},
		"&::-moz-scrollbar-track": {
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
			borderRadius: "0.5em",
		},
		"&::-moz-scrollbar-thumb": {
			backgroundColor: theme.palette.text.primary,
			outline: "1px solid slategrey",
			borderRadius: "0.5em",
		},
		"&::-o-scrollbar": {
			width: "0.5em",
		},
		"&::-o-scrollbar-track": {
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
			borderRadius: "0.5em",
		},
		"&::-o-scrollbar-thumb": {
			backgroundColor: theme.palette.text.primary,
			outline: "1px solid slategrey",
			borderRadius: "0.5em",
		},
		"&::-ms-scrollbar": {
			width: "0.5em",
		},
		"&::-ms-scrollbar-track": {
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
			borderRadius: "0.5em",
		},
		"&::-ms-scrollbar-thumb": {
			backgroundColor: theme.palette.text.primary,
			outline: "1px solid slategrey",
			borderRadius: "0.5em",
		},
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
		color: theme.palette.primary.contrastText,
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
	},
	routeBody: {
		width: "100%",
	},
}));
