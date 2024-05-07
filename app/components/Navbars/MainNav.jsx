"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../images/logo1.png";
import NavLink from "../Links/NavLink";
import ActionButton from "../Buttons/ActionButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
import { logout } from "@/app/lib/authActions";

const pages = ["Pricing", "Support", "About"];
const settings = ["Dashboard", "Profile", "Account"];

export default function MainNav(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  ////////////drawer///////////////////
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left", pt: "4px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 1,
          ml: 2,
        }}
      >
        <Link href="/" scroll={true} legacyBehavior>
          <Image width={32} height={23} src={logo} alt="Elbee logo" />
        </Link>
        <NavLink text="Elbee" href="/" color="#000" />
      </Box>
      <Divider />

      <List>
        {pages.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton key={index} sx={{ textAlign: "left" }}>
              <ListItemText
                key={index}
                primary={
                  <Link
                    style={{ display: "block", textDecoration: "none" }}
                    href={`/${item.toLocaleLowerCase()}`}
                  >
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // ////////drawer end///////////////////////////////

  const handleOpenUserMenu = (event) => {
    if (anchorElUser !== event.currentTarget) {
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleCloseUserMenu = async (e) => {
    setAnchorElUser(null);
    if (e.target.id !== "") router.push(`/user/${e.target.id.toLowerCase()}`);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          background: "rgba(165,234,191, 0.95)",
          background: "rgba(255,255,255, 0.95)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* ///////////////////Desktop/////////////////// */}
            <Typography sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Image width={40} height={40} src={logo} alt="Elbee logo" />
            </Typography>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
                href="/"
              >
                Elbee-TS
              </Link>
            </Typography>

            {/* ////////////Mobile////////////////////// */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Box component="nav">
                <Drawer
                  anchor="left"
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <Link href="/">
                <Image width={32} height={32} src={logo} alt="Elbee logo" />
              </Link>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
                href="/"
              >
                Elbee
              </Link>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <NavLink
                  endIcon={<KeyboardArrowDownIcon color="primary" />}
                  pathname={`/services`}
                  text="Services"
                />
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx={1}
                  >
                    <NavLink
                      pathname={`/${page.toLocaleLowerCase()}`}
                      text={page}
                    />
                  </Box>
                ))}
              </Box>

              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: props.session?.user ? "block" : "none",
                  },
                  p: 0,
                  ml: 2,
                  "&:hover": {
                    color: "#686E26",
                  },
                }}
              >
                <PersonIcon fontSize="large" />
              </IconButton>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!props.session?.user && (
                  <Box
                    sx={{
                      display: {
                        xs: props.session?.user ? "none" : "block",
                        md: "none",
                      },
                    }}
                  >
                    <MenuItem>
                      <ActionButton
                        variant="outlined"
                        color="primary"
                        text="Login"
                        onClick={() => {
                          setAnchorElUser(null);
                          router.push("/login");
                        }}
                        fontSize="1rem"
                      />
                    </MenuItem>
                    <MenuItem>
                      <ActionButton
                        fontSize="1rem"
                        variant="contained"
                        color="primary"
                        text="Get Started"
                        onClick={() => {
                          setAnchorElUser(null);
                          router.push("/");
                        }}
                      />
                    </MenuItem>
                  </Box>
                )}
                <Box
                  sx={{
                    display: { xs: !props.session?.user ? "none" : "block" },
                  }}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      id={setting}
                      key={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography
                        textAlign="center"
                        id={setting}
                        color={
                          pathname.startsWith(
                            `/user/${setting.toLocaleLowerCase()}`
                          )
                            ? "secondary.dark"
                            : "primary"
                        }
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}

                  <ActionButton
                    onClick={async () => {
                      setAnchorElUser(null);
                      await logout();
                    }}
                    type="submit"
                    fontSize="1rem"
                    variant="contained"
                    color="secondary"
                    text="Logout"
                  />
                </Box>
              </Menu>
              {!props.session?.user && (
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <ActionButton
                    variant="outlined"
                    color="secondary"
                    text="Login"
                    mx={2}
                    onClick={() => {
                      router.push("/login");
                    }}
                    // size="small"
                    fullWidth={false}
                    fontSize="1rem"
                  />

                  <ActionButton
                    // size="small"
                    variant="contained"
                    fontSize="1rem"
                    color="secondary"
                    mx={2}
                    text="Get Started"
                    fullWidth={false}
                    onClick={() => router.push("/")}
                  />
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
