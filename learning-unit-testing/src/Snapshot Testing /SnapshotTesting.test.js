import { render, screen, cleanup } from "@testing-library/react";
import * as snapshot from "react-test-renderer";
import SnapshotTesting from "./SnapshotTesting";
import "@testing-library/jest-dom";

/**
 * Snapshot is a useful tool for unit testing React components 
 * by capturing and comparing their rendered output.
 */

test("text matches snapshot", () => {
   const component = snapshot.create(<SnapshotTesting/>); 
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();


  });