import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="iMemento/shadertoy-tutorial"
        repoId="R_kgDON6rfNQ"
        category="General"
        categoryId="DIC_kwDON6rfNc4CnNqp"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}