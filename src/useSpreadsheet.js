import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  spreadsheet_id,
  client_email,
  private_key,
  sheet_id
} from "./constant";

// Initialization
const doc = new GoogleSpreadsheet(spreadsheet_id);

const useSpreadsheet = () => {
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
export default useSpreadsheet;
