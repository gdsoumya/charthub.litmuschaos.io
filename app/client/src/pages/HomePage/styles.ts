import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootContainer: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	root: {
		textAlign: "center",
	},
	mainDiv: {
		backgroundImage:
			"linear-gradient(82.18deg, #5B44BA -6.24%, #858CDD 142.26%)",
		height: 500,
		display: "flex",
		flexDirection: "column",
	},
	headerDiv: {
		display: "flex",
		flexDirection: "row",
		paddingTop: 80,
		marginLeft: 130,
		marginRight: 130,
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "row",
			paddingTop: 20,
			marginLeft: 20,
			marginRight: 20,
		},
	},
	headerText: {
		width: 540,
		height: 120,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	mainHeader: {
		fontSize: "40px",
		fontWeight: 500,
		color: theme.palette.common.white,
		textAlign: "left",
		[theme.breakpoints.down("sm")]: {
			fontSize: "25px",
			fontWeight: 500,
			marginBottom: 20,
		},
	},
	headerDesc: {
		fontSize: "16px",
		marginBottom: 20,
		color: theme.palette.common.white,
		textAlign: "left",
	},
	headerImg: {
		marginTop: -80,
	},
	searchDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 130,
		marginRight: 130,
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			width: "95%",
			marginTop: "10%",
			marginLeft: 10,
			marginRight: 10,
		},
	},
	statsDiv: {
		marginTop: -10,
		marginLeft: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginLeft: 0,
			marginRight: 0,
		},
	},
	chartsDiv: {
		marginTop: "-5%",
		marginLeft: "8.55%",
		marginRight: "8.55%",
		backgroundColor: theme.palette.common.white,
		border: "1px solid rgba(0, 0, 0, 0.05)",
		borderRadius: "3px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "-10%",
			marginLeft: "6%",
			marginRight: "6%",
		},
	},
}));
