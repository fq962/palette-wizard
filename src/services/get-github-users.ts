import { GithubUser } from "@/types/github-user";

const API_URL = "https://api.github.com/users";

export const GetGithubUserInfo = async (user: string): Promise<GithubUser> => {
  return await fetch(API_URL + `/${user}`).then(async (response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  });
};
