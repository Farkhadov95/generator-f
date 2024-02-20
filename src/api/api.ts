import { dataType, requestType } from "../types";


  export const postData = async (requestBody: requestType): Promise<dataType[]> => {
  try {
    const response = await fetch("https://generator-f.onrender.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
