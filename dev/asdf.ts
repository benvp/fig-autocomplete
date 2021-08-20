export const completionSpec: Fig.Spec = {
  name: "asdf",
  description: "Manage multiple runtime versions with a single CLI tool",
  subcommands: [
    {
      name: "list",
      description: "List installed versions of a package",
      subcommands: [
        {
          name: "all",
          description:
            "List all versions of a package and optionally filter the returned versions",
          args: [
            {
              name: "name",
              description: "Name of the package to list versions for.",
              generators: [
                {
                  // // we need asdf to be in the shell somehow
                  // script: "asdf plugin-list",
                  // postProcess: function (out, tokens) {
                  //   return [{ name: "hello" }];
                  //   return out.split("\n").map((branch) => {
                  //     return { name: branch, description: "branch" };
                  //   });
                  // },
                },
              ],
            },
          ],
        },
      ],
      args: {},
      options: [
        {
          name: ["-b"],
          description: "create and checkout a new branch",
          args: {
            name: "branch",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current git version",
    },
  ],
};

export default completionSpec;
