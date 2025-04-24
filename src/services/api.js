const API_URL = "http://localhost:8080";

export const fetchMenus = async () => {
  try {
    const response = await fetch(`${API_URL}/menu`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.menus;
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};

export const createMenu = async (menuData) => {
  const response = await fetch(`${API_URL}/menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menuData),
  });
  return await response.json();
};

export const updateMenu = async (id, menuData) => {
  const response = await fetch(`${API_URL}/menus/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menuData),
  });
  return await response.json();
};

export const deleteMenu = async (id) => {
  const response = await fetch(`${API_URL}/menus/${id}`, {
    method: "DELETE",
  });
  return response.status === 204;
};
