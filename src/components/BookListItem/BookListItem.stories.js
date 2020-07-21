import React from "react";
import { withInfo } from "@storybook/addon-info";

import BookListItem from "./BookListItem.js";

export default {
  title: "BookListItem",
  decorators: [withInfo],
};

export const Default = () => (
  <BookListItem
    item={{
      image: "https://picsum.photos/400",
      title: "Hello World",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }}
  />
);
