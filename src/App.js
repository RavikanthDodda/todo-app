import React from "react";
import List from "./components/List";
import { Grid, Box, AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Todo app</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Box mt="2rem">
        <Grid container item alignItems="center">
          <Grid item xs={false} sm={false} md={1} />
          <Grid item xs={12} sm={12} md={10}>
            <List />
          </Grid>
          <Grid item xs={false} sm={false} md={1} />
        </Grid>
      </Box>
    </Grid>
  );
}

export default App;
