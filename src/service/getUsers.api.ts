const userUrl = "/api/users";

export const handleGetUser = async () => {
    try {
        const response = await fetch(userUrl);
        return await response.json();
    } catch (err) {
        return err;
    }
  }