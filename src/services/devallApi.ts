import axios from "axios";
import { Post } from "../types/Post";
import { Source } from "../types/Site";

const api = axios.create({
  baseURL: "https://api.devall.com.br/api/v2",
});

export const getPosts = async (params?: {
  content?: string;
  page?: number;
}): Promise<Post[] | null> => {
  try {
    const response = await api.get<Post[]>("/post", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSources = async (params?: { name?: string }) => {
  try {
    const response = await api.get<Source[]>("/sources", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSite = async (id: number) => {
  const response = await api.get<Source>("/site/", {
    params: { id },
  });
  return response.data;
};

export const getClick = async (id: number): Promise<void> => {
  try {
    await axios.get(`http://localhost:3001/api/v2/post/${String(id)}/click`);
  } catch (error) {
    throw error;
  }
};
