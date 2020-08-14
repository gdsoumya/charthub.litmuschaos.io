import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
	// Editor

	statusHeading: {
		marginTop: theme.spacing(-2.5),
		fontSize: "1rem",
		marginLeft: theme.spacing(2.5),
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "130%",
	},

	statusDescription: {
		width: "95%",
		marginTop: theme.spacing(1.875),
		fontSize: "0.875rem",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: "160%",
	},

	editorBackgroundFull: {
		backgroundColor: "#1C1C1C",
		color: "#FFFFFF",
		width: "100%",
	},

	horizontalLineWhite: {
		marginTop: theme.spacing(4),
		backgroundColor: "rgba(255, 255, 255, 0.2)",
	},

	widthManager: {
		width: "98.5%",
	},

	editorButtonGrid: {
		marginTop: theme.spacing(3),
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},

	editorContainer: {
		marginTop: theme.spacing(4),
	},

	editorGrid: {
		overflow: "auto",
		height: "50vh",
		width: "100%",
		"&::-webkit-scrollbar": {
			width: "0.2em",
		},
		"&::-webkit-scrollbar-track": {
			webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: theme.palette.text.primary,
			outline: "1px solid slategrey",
		},
		[theme.breakpoints.down("xl")]: {
			height: "55vh",
		},
		[theme.breakpoints.down("lg")]: {
			height: "50vh",
		},
		[theme.breakpoints.down("md")]: {
			height: "45vh",
		},

		[theme.breakpoints.down("sm")]: {
			height: "201px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "160px",
		},
	},

	extraSpace: {
		backgroundColor: "#1C1C1C",
		height: "2rem",
		width: "100%",
	},

	editorButtons: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(1.25),
	},

	editorButtonFind: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(1.25),
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(4.25),
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: theme.spacing(0.1),
			marginTop: theme.spacing(1.5),
		},
	},

	editorButtonFoldAndUnfold: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(1.25),
		[theme.breakpoints.down("sm")]: {},
		[theme.breakpoints.down("xs")]: {
			marginLeft: theme.spacing(1),
			marginTop: theme.spacing(1.5),
		},
	},

	editorButtonUndo: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(2.5),
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(4.25),
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: theme.spacing(0.1),
		},
	},

	editorButtonDownload: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(6.25),
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(1.5),
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: theme.spacing(1),
		},
	},

	editorButtonReplace: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(15.625),
		[theme.breakpoints.down("xs")]: {
			marginLeft: theme.spacing(-0.5),
			marginTop: theme.spacing(1.5),
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(1.3),
		},
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
		[theme.breakpoints.down("lg")]: {
			marginLeft: theme.spacing(5),
		},
	},

	editorButtonSelectAll: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "#FFFFFF",
		borderColor: "rgba(255, 255, 255, 0.2)",
		paddingLeft: theme.spacing(3.125),
		width: "4rem",
		height: "2.75rem",
		marginLeft: theme.spacing(7.5),
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(1.4),
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: theme.spacing(1),
		},
		[theme.breakpoints.down("lg")]: {
			marginRight: theme.spacing(2.5),
		},
		[theme.breakpoints.down("xs")]: {
			marginRight: theme.spacing(0.1),
			marginTop: theme.spacing(1.5),
		},
		[theme.breakpoints.down("xl")]: {
			marginRight: theme.spacing(2),
		},
	},

	editorButtonFullScreen: {
		borderRadius: 3,
		backgroundColor: "#1C1C1C",
		boxSizing: "border-box",
		color: "rgba(255, 255, 255, 0.2)",
		borderColor: "#1C1C1C",
		paddingLeft: theme.spacing(3.75),
		paddingBottom: theme.spacing(1.875),
		marginTop: theme.spacing(-2),
		width: "1.875rem",
		height: "1.875rem",
		marginLeft: theme.spacing(-10),
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(-2),
			width: "0rem",
			height: "0rem",
			padding: theme.spacing(0),
			border: "0px",
		},
		[theme.breakpoints.down("xl")]: {
			width: "0rem",
			height: "0rem",
			padding: theme.spacing(0),
			border: "0px",
			marginLeft: theme.spacing(-10),
		},
		[theme.breakpoints.down("lg")]: {
			width: "0rem",
			height: "0rem",
			padding: theme.spacing(0),
			border: "0px",
			marginLeft: theme.spacing(-10),
		},
		[theme.breakpoints.down("md")]: {
			width: "0rem",
			height: "0rem",
			padding: theme.spacing(0),
			border: "0px",
			marginLeft: theme.spacing(-10),
		},
	},

	saved: {
		width: "25rem",
		marginTop: theme.spacing(6),
		fontFamily: "Ubuntu",
		fontSize: "1rem",
		color: theme.palette.secondary.dark,
		display: "inline",
	},

	markStyleCorrect: {
		display: "inline-block",
		fontFamily: "Ubuntu",
		fontSize: "1rem",
		color: "#109B67",
	},

	markStyleWrong: {
		display: "inline-block",
		fontFamily: "Ubuntu",
		fontSize: "1rem",
		color: "#CA2C2C",
	},

	fullScreenGrid: {
		width: "0%",
	},

	fullWidth: {
		width: "100%",
	},

	// Validations

	validationError: {
		position: "absolute",
		background: "rgba(202, 44, 44, 0.2)",
	},
}));

export default useStyles;
