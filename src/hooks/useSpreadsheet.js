/** @format */

import { GoogleSpreadsheet } from "google-spreadsheet";
import { useContext } from "react";
import {
  spreadsheet_id,
  client_email,
  private_key,
  sheet_id
} from "../constant";
import { SpreadsheetContext } from "../context/SpreadsheetProvider";

/*============================*/
/* Spreadsheet Hook			  */
/*============================*/
const useSpreadsheet = () => {
  return useContext(SpreadsheetContext);
};
export default useSpreadsheet;

/*============================*/
/* Spreadsheet 				  */
/*============================*/
// Configs
// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY;
// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// const SHEET_ID = process.env.REACT_APP_SHEET_ID;

const doc = new GoogleSpreadsheet(spreadsheet_id);

// This function consisting all features that are available for spreadsheet.
export const SpreadsheetHook = () => {
  // Workspace Auth
  const appendToSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: client_email,
        private_key: private_key
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[sheet_id];
      const result = await sheet.addRow(row);
      console.log("RESULT: ", result);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return { appendToSpreadsheet };
};
