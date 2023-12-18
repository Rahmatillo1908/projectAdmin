import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { useTheme } from "@emotion/react"
import { tokens } from "../../theme"
import { useState } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlined, HomeOutlined, MapOutlined, MenuOutlined, PeopleOutlined, PersonOutlined, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
    active={selected === title}
    style={{
      color: colors.grey[100],
    }}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    <Typography>{title}</Typography>
    <Link to={to} />
  </MenuItem>
  )
}
const Sidebars = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  const rahmatillo= "Ed Roh"
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
      <ProSidebar  collapsed={isCollapsed} >
        <Menu iconShape="square" >
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlined /> : ''}
            style={{ margin: "0px 0 10px 0", color: colors.grey[100] }} >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px" >
                <Typography variant="h5" color={colors.grey[100]} >
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="2px">
              <Box display="flex" justifyContent="center" alignContent="center" >
                <img src="./user.png" width="70px" height="70px" style={{ cursor: 'pointer', borderRadius: "50%" }} alt="profile-user" />
              </Box>
              <Box textAlign="center" >
                <Typography variant="h4" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }} >{rahmatillo}</Typography>
                <Typography variant="h6" color={colors.greenAccent[500]} >VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlined />} setSelected={setSelected} selected={selected} />
            <Typography  variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>
            <Item title="Manage Team" to="/team" icon={<PeopleOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="Contacts Information" to="/contact" icon={<ContactsOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlined />} setSelected={setSelected} selected={selected} />
            <Typography  variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages</Typography>
            <Item title="Profile Form" to="/form" icon={<PersonOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="FAQ Page" to="/faq" icon={<HelpOutlined />} setSelected={setSelected} selected={selected} />
            <Typography  variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Charts</Typography>
            <Item title="Bar Chart" to="/bar" icon={<BarChartOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlined />} setSelected={setSelected} selected={selected} />
            <Item title="Line Chart" to="/line" icon={<TimelineOutlined />} setSelected={setSelected} selected={selected} />
            <Item title=" Geography Chart" to="/geography" icon={<MapOutlined />} setSelected={setSelected} selected={selected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebars