export default function parseNestedJson(jsonString) {
    try {
      const parsedObject = JSON.parse(jsonString);
  
      // Recursively parse nested JSON strings
      for (const key in parsedObject) {
        if (typeof parsedObject[key] === "string") {
          try {
            parsedObject[key] = JSON.parse(parsedObject[key]);
          } catch (error) {
            console.error(`Error parsing nested JSON: ${error.message}`);
          }
        }
      }
  
      return parsedObject;
    } catch (error) {
      console.error(`Error parsing JSON: ${error.message}`);
      return null;
    }
  }