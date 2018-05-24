import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Destination Table"
          cardSubtitle="Overview of Routes"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Notifications", "Start", "End"]}
              tableData={[
                ["Work", "on", "1111 Industry Ave", "1111 Industry Ave"],
                ["Vail", "on", "1111 Industry Ave", "1111 Industry Ave"],
                ["Joe's House", "off", "1111 Industry Ave", "1111 Industry Ave"],
                ["Dollar Scoops", "on", "1111 Industry Ave", "1111 Industry Ave"],
                ["Industry", "on", "1111 Industry Ave", "1111 Industry Ave"],
                ["Heavydoody Enterprises", "off", "1111 Industry Ave", "1111 Industry Ave"]
              ]}
            />
          }
        />
      </ItemGrid>

    </Grid>
  );
}

export default TableList;
