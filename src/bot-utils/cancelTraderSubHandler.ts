export async function cancelTraderSub() {
  const url = `https://dexterity-bot.onrender.com/cancel-subscription`;

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
