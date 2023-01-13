import {
  HybridModule,
  publishToRegistries,
} from "projen-cdktf-hybrid-construct";

const project = new HybridModule({
  author: "jingood2",
  authorAddress: "jingood2@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "terraform-aws-module-null",
  repositoryUrl: "https://github.com/user/terraform-aws-module-null.git",

  ...publishToRegistries({
    name: "my-new-hybrid-construct",
    namespace: "jingood2",
    registries: ["npm"],
  }),
  // cdktfVersion: "^0.13.0",       /* Minimum target version of this library. */
  // constructExamples: undefined,  /* If set a construct examples folder will be created. */
  constructExamples: {
    enabled: true,
    folder: "examples/construct",
  },
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
  // terraformExamples: undefined,  /* If set a terraform examples folder will be created. */
});
project.synth();
