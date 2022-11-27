import { useTheme, Box, Typography } from "@mui/material"
import { shades } from "../../theme"

const Footer = () => {
	const { palette: { neutral }} = useTheme()
	return (
		<Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
			<Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="30px" columnGap="clamp(20px, 30px, 40px)">
				<Box width="clamp(20%, 30%, 40%)">
					<Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
					<div>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Corporis repellendus corrupti cupiditate cum quia a quam. Nulla, odit exercitationem! Ad, sint, qui! Deleniti cum ad quos laboriosam tempore quia officiis!</div>
				</Box>
				<Box>
					<Typography variant="h4" fontWeight="bold" mb="30px">About Us</Typography>
					<Typography>Careers</Typography>
					<Typography>Our Stores</Typography>
					<Typography>Terms &amp; Conditions</Typography>
					<Typography>Privacy Policy</Typography>
				</Box>
				<Box>
					<Typography variant="h4" fontWeight="bold" mb="30px">Customer Care</Typography>
					<Typography>Help Center</Typography>
					<Typography>Track Your Order</Typography>
					<Typography>Corporate &amp; Bulk Purchasing</Typography>
					<Typography>Returns &amp; Refunds</Typography>
				</Box>
				<Box width="clamp(20%, 25%, 30%)">
					<Typography variant="h4" fontWeight="bold" mb="30px">Contact Us</Typography>
					<Typography>50 north whatever Blvd, Washington, DC 10501</Typography>
					<Typography>Email: sethmwebi@gmail.com</Typography>
					<Typography>(222)333-4444</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer