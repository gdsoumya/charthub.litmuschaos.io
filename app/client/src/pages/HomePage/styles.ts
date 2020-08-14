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
		[theme.breakpoints.up("xl")]: {
			display: "flex",
			flexDirection: "row",
			paddingTop: 60,
			marginLeft: 250,
			marginRight: 250,
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "row",
			paddingTop: 20,
			marginLeft: 50,
			marginRight: 50,
		},
		[theme.breakpoints.down("xs")]: {
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
		[theme.breakpoints.down("xs")]: {
			fontSize: "25px",
			fontWeight: 500,
			marginBottom: 10,
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
	searchBar: {
		flexGrow: 1,
	},
	searchDiv: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 130,
		marginRight: 80,
		marginTop: 30,
		[theme.breakpoints.up("xl")]: {
			display: "flex",
			flexDirection: "row",
			marginLeft: 250,
			marginRight: 250,
		},
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			width: "95%",
			marginLeft: 30,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "5%",
			marginLeft: 10,
		},
		[theme.breakpoints.down(378)]: {
			marginTop: 90,
			marginLeft: 10,
			marginRight: 10,
		},
	},
	statsDiv: {
		marginTop: -10,
		flexGrow: 1,
		marginLeft: 10,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginLeft: -10,
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 0,
			marginRight: 0,
		},
	},
	chartsDiv: {
		marginTop: -80,
		marginLeft: "8.55%",
		marginRight: "8.55%",
		backgroundColor: theme.palette.common.white,
		border: "1px solid rgba(0, 0, 0, 0.05)",
		borderRadius: "3px",
		[theme.breakpoints.down(376)]: {
			marginTop: -40,
			marginLeft: "6%",
			marginRight: "6%",
		},
	},
}));
