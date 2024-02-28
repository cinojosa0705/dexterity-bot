export async function newTraderSubHandler(trader: string) {
  const url = `https://dexterity-bot.onrender.com/new-subscription?trg=${trader}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error making request:", error);
  }
}
