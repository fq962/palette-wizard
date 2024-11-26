import { GithubUser } from "@/types/github-user";
import { useEffect, useState } from "react";
import { CollaboratorsList } from "../../public/collaborators";
import { GetGithubUserInfo } from "@/services/get-github-users";
import Collaborator from "./Collaborator";

export default function Collab() {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const userPromises = CollaboratorsList.map(
          async (collab) => await GetGithubUserInfo(collab.login)
        );
        const gitUsers = await Promise.all(userPromises);
        setUsers(gitUsers);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error fetching user data");
        console.error(error);
      }
    };

    void fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center sm:justify-end sm:p-8 gap-3">
        {users.map((user) => (
          <Collaborator key={user.login} gitUser={user} />
        ))}
      </div>
    </>
  );
}
