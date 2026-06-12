import type { Node } from '@tiptap/pm/model';
/**
 * Position model mismatch: ProseMirror vs native (iOS/Android)
 *
 * Native selection/cursor offsets are plain string indices in rendered text
 * Block boundaries are represented by a single '\n'.
 *
 * ProseMirror positions are tree positions. Entering/leaving block nodes
 * consumes extra positions that do not map to extra native characters.
 * Crossing one paragraph boundary is 1 native char ('\n') but usually 2 PM
 * positions (close paragraph + open next paragraph).
 *
 * Example for three paragraphs "AAAA", "BBBB", "CCCC":
 *
 *   PM:      1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17
 *   Native:  0  1  2  3  4  4  5  6  7   8  9  9 10 11 12 13 14
 *
 * PM 5 and PM 6 both map to native 4, PM 11 and PM 12 both map to native 9.
 */
/**
 * Returns the native position for a given TipTap document position.
 */
export declare function tiptapPosToNativePos(doc: Node, tiptapPos: number): number;
/**
 * Returns the TipTap document position for a given native position.
 *
 * Equivalent mental model: build an array `nativeByTiptapPos` where
 * `nativeByTiptapPos[tiptapPos] = tiptapPosToNativePos(doc, tiptapPos)`.
 * This function finds the first index where
 * `nativeByTiptapPos[index] >= nativePos`, but does it with binary search
 * instead of creating the whole array.
 *
 * We want the leftmost TipTap position T where tiptapPosToNativePos(T) >= nativePos.
 * Leftmost matters because gap positions (for example TipTap 5 and 6 for native 4)
 * share the same native value. We choose the earlier position.
 */
export declare function nativePosToTiptapPos(doc: Node, nativePos: number): number;
//# sourceMappingURL=positionMapping.d.ts.map