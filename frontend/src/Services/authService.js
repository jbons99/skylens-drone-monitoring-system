import api from "./api.js";

const SESSION_KEY = "skylens.session";

function readSession() {
  try {
    const rawValue = window.localStorage.getItem(SESSION_KEY);
    return rawValue ? JSON.parse(rawValue) : null;
  } catch {
    return null;
  }
}

function writeSession(user) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
}

export async function registerUser({ fullName, email, password }) {
  try {
    const response = await api.post("/user/register", {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to create account right now.",
    );
  }
}

export async function loginUser({ email, password }) {
  try {
    const response = await api.post("/user/login", {
      email: email.trim().toLowerCase(),
      password,
    });

    writeSession(response.data.user);
    return response.data.user;
  } catch (error) {
    clearSession();
    throw new Error(
      error.response?.data?.message || "Unable to sign in right now.",
    );
  }
}

export function getSession() {
  return readSession();
}

export function getCachedSession() {
  return readSession();
}

export async function logoutUser() {
  try {
    await api.get("/user");
  } finally {
    clearSession();
  }
}
