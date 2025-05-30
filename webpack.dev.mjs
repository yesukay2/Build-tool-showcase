import { merge } from "webpack-merge";
import common from "./webpack.common.mjs";

export default merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    open: true,
  },
});
