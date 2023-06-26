import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TagTab from "@/app/admin/admin-tab/tag/tag-tab";
import CreateBlog from "@/app/admin/admin-tab/blog/create-blog";
import PriceTab from "@/app/admin/admin-tab/price/price-tab";
import { Stack } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", justifyContent: "space-around" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ width: "33%" }} label="tags" {...a11yProps(0)} />
          <Tab sx={{ width: "33%" }} label="blog" {...a11yProps(1)} />
          <Tab
            sx={{ width: "33%" }}
            label="price and services"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TagTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateBlog />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PriceTab />
      </TabPanel>
    </Box>
  );
};

export default AdminTab;
