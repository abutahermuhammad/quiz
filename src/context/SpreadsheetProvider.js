import { createContext } from "react";
import { SpreadsheetHook } from "../hooks/useSpreadsheet";

// Creating spreadsheet Context
export const SpreadsheetContext = createContext();

// Creating context provider wrapper
const SpreadsheetProvider = ({ children }) => {
  const allFunctions = SpreadsheetHook();

  return (
    <>
      <SpreadsheetContext.Provider value={allFunctions}>
        {children}
      </SpreadsheetContext.Provider>
    </>
  );
};
export default SpreadsheetProvider;
