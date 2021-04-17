import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              <p>logo</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {/**
             *  You can add the content of the sidebar ex: menu, profile details, ...
             */}
          </SidebarContent>
          <SidebarFooter>
            {/**
             *  You can add a footer for the sidebar ex: copyright
             */}
          </SidebarFooter>
        </ProSidebar>
        ;
      
    </>
  );
};

export default Navbar;
