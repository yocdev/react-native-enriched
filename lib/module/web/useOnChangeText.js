"use strict";

import { useOnEditorChange } from "./useOnEditorChange.js";
export const useOnChangeText = (editor, onChangeText) => {
  useOnEditorChange(editor, onChangeText, e => e.getText({
    blockSeparator: '\n'
  }));
};
//# sourceMappingURL=useOnChangeText.js.map